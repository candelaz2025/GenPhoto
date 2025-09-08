import React, { useState, useRef, MouseEvent, WheelEvent, useEffect, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { Result } from '../types';
import { 
    ReuseIcon, DownloadIcon, ShareIcon, ZoomInIcon, ZoomOutIcon, ResetZoomIcon, 
    EditIcon, CropIcon, RotateCcwIcon, BrightnessIcon, CheckIcon, XIcon 
} from './IconComponents';
import { Translation } from '../locales/translations';

interface ResultDisplayProps {
  result: Result | null;
  onAddToHistory: (result: Result) => void;
  t: Translation;
}

/**
 * Creates an image from a data URL, crops it, rotates it, and adjusts brightness.
 * @param {string} imageSrc - The source data URL of the image.
 * @param {Area} crop - The pixel area to crop.
 * @param {number} rotation - The rotation angle in degrees.
 * @param {number} brightness - The brightness value (100 is normal).
 * @returns {Promise<string>} A promise that resolves with the new data URL.
 */
const getEditedImage = async (
  imageSrc: string,
  crop: Area | null,
  rotation = 0,
  brightness = 100
): Promise<string> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  const rotRad = (rotation * Math.PI) / 180;
  
  const cropX = crop?.x ?? 0;
  const cropY = crop?.y ?? 0;
  const cropWidth = crop?.width ?? image.width;
  const cropHeight = crop?.height ?? image.height;

  // calculate bounding box of the rotated image
  const bBoxWidth = Math.abs(Math.cos(rotRad)) * cropWidth + Math.abs(Math.sin(rotRad)) * cropHeight;
  const bBoxHeight = Math.abs(Math.sin(rotRad)) * cropWidth + Math.abs(Math.cos(rotRad)) * cropHeight;
  
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  ctx.filter = `brightness(${brightness}%)`;

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.translate(-cropWidth / 2, -cropHeight / 2);

  // draw rotated image
  ctx.drawImage(
    image,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    cropWidth,
    cropHeight
  );

  return canvas.toDataURL('image/png');
};

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues
    image.src = url;
  });

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onAddToHistory, t }) => {
  // Pan/Zoom state for viewing
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  // State for the displayed image (original or edited)
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Editing state
  const [isEditing, setIsEditing] = useState(false);
  const [activeTool, setActiveTool] = useState<'crop' | 'brightness' | null>(null);
  const [tempRotation, setTempRotation] = useState(0);
  const [tempBrightness, setTempBrightness] = useState(100);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropZoom, setCropZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isProcessingEdit, setIsProcessingEdit] = useState(false);

  useEffect(() => {
    if (result?.image) {
      setCurrentImage(result.image);
      handleResetZoom();
      setIsEditing(false);
    }
    if(result?.videoUrl) {
      setIsEditing(false);
    }
  }, [result]);

  const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleApplyEdits = async () => {
    if (!result?.image) return;
    setIsProcessingEdit(true);
    try {
      const editedImg = await getEditedImage(
        result.image,
        croppedAreaPixels,
        tempRotation,
        tempBrightness
      );
      setCurrentImage(editedImg);
      setIsEditing(false);
    } catch (e) {
      console.error(e);
    } finally {
        setIsProcessingEdit(false);
    }
  };

  const handleEnterEditMode = () => {
    setIsEditing(true);
    setActiveTool(null);
    setTempRotation(0);
    setTempBrightness(100);
    setCroppedAreaPixels(null);
    setCrop({ x: 0, y: 0 });
    setCropZoom(1);
  };
  
  const handleCancelEditMode = () => {
    setIsEditing(false);
  };
  
  const handleRotate = () => {
    setTempRotation((prev) => (prev + 90) % 360);
  };

  // Handlers for viewing zoom/pan
  const handleResetZoom = () => { setScale(1); setPosition({ x: 0, y: 0 }); };
  useEffect(() => { if (currentImage) handleResetZoom(); }, [currentImage]);
  const handleAdd = () => { if (result && currentImage) onAddToHistory({ ...result, image: currentImage }); };
  const handleDownload = () => {
    if (!currentImage) return;
    const link = document.createElement('a');
    link.href = currentImage;
    link.download = `gemini-art-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleVideoDownload = () => {
    if (!result?.videoUrl) return;
    const link = document.createElement('a');
    link.href = result.videoUrl;
    link.download = `gemini-video-${Date.now()}.mp4`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleShare = async () => {
    if (!currentImage || !navigator.share) { alert(t.unsupportedShare); return; }
    try {
        const response = await fetch(currentImage);
        const blob = await response.blob();
        const file = new File([blob], `gemini-art-${Date.now()}.png`, { type: blob.type });
        await navigator.share({ title: t.appName, text: 'Check out this image I generated with AI!', files: [file] });
    } catch (error) { console.error('Error sharing:', error); }
  };
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => { if (scale > 1 && !isEditing) { e.preventDefault(); setIsPanning(true); } };
  const handleMouseUp = () => setIsPanning(false);
  const handleMouseLeave = () => setIsPanning(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => { if (isPanning) { setPosition(pos => ({ x: pos.x + e.movementX, y: pos.y + e.movementY })); } };
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (isEditing) return;
    e.preventDefault();
    const scaleAmount = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = Math.min(Math.max(scale + scaleAmount, 1), 5);
    setScale(newScale);
    if (newScale <= 1) handleResetZoom();
  };
  const handleZoomIn = () => setScale(s => Math.min(s + 0.2, 5));
  const handleZoomOut = () => { const newScale = Math.max(scale - 0.2, 1); setScale(newScale); if (newScale <= 1) handleResetZoom(); };

  if (!result) return null;
  
  const renderImageEditor = () => (
    <div className="w-full md:w-1/2 relative group">
        <div className="w-full aspect-square rounded-lg shadow-lg overflow-hidden bg-base-100 relative">
            {activeTool === 'crop' ? (
                 <Cropper
                    image={currentImage ?? undefined}
                    crop={crop}
                    zoom={cropZoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setCropZoom}
                />
            ) : (
                <img 
                    src={currentImage ?? undefined} 
                    alt="Generated result" 
                    className="w-full h-full object-contain transition-all duration-100 ease-out"
                    style={{ 
                        transform: `rotate(${tempRotation}deg)`,
                        filter: `brightness(${tempBrightness}%)`,
                        willChange: 'transform, filter',
                    }}
                />
            )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 rounded-b-lg flex flex-col gap-2">
           {activeTool === 'brightness' && (
             <div className="flex items-center gap-2 px-2">
                <span className="text-xs text-white">Brightness</span>
                 <input type="range" min="50" max="150" value={tempBrightness} onChange={(e) => setTempBrightness(Number(e.target.value))} className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm" />
             </div>
           )}
            <div className="flex justify-around items-center">
                <button onClick={() => setActiveTool('crop')} className={`p-2 rounded-full ${activeTool === 'crop' ? 'bg-brand-primary' : 'hover:bg-base-300'}`} title="Crop"><CropIcon className="w-5 h-5 text-white" /></button>
                <button onClick={handleRotate} className="p-2 rounded-full hover:bg-base-300" title="Rotate"><RotateCcwIcon className="w-5 h-5 text-white" /></button>
                <button onClick={() => setActiveTool('brightness')} className={`p-2 rounded-full ${activeTool === 'brightness' ? 'bg-brand-primary' : 'hover:bg-base-300'}`} title="Brightness"><BrightnessIcon className="w-5 h-5 text-white" /></button>
                <div className="w-px h-6 bg-gray-600" />
                <button onClick={handleCancelEditMode} className="p-2 rounded-full hover:bg-red-500/50" title="Cancel"><XIcon className="w-6 h-6 text-red-400" /></button>
                <button onClick={handleApplyEdits} disabled={isProcessingEdit} className="p-2 rounded-full hover:bg-green-500/50 disabled:cursor-not-allowed" title="Apply Edits">
                    {isProcessingEdit ? <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin" /> : <CheckIcon className="w-6 h-6 text-green-400" />}
                </button>
            </div>
        </div>
    </div>
  );

  const renderImageViewer = () => (
    <div className="w-full md:w-1/2 relative group">
        <div
            ref={imageContainerRef}
            className={`w-full aspect-square rounded-lg shadow-lg overflow-hidden transition-colors border ${scale > 1 ? 'cursor-grabbing border-brand-primary' : 'cursor-zoom-in border-transparent'}`}
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onWheel={handleWheel}
        >
            <img src={currentImage!} alt="Generated result" className="w-full h-full object-contain transition-transform duration-100 ease-out"
                style={{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`, willChange: 'transform', cursor: 'inherit' }}
            />
        </div>
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button onClick={handleEnterEditMode} className="bg-gray-800/60 text-white p-2 rounded-full transition-all hover:bg-gray-700 transform hover:scale-110 shadow-lg" aria-label="Edit Image" title="Edit Image"><EditIcon className="w-5 h-5" /></button>
            <button onClick={handleAdd} className="bg-brand-primary/80 text-white p-2 rounded-full transition-all hover:bg-brand-secondary transform hover:scale-110 shadow-lg" aria-label={t.saveResultTooltip} title={t.saveResultTooltip}><ReuseIcon className="w-5 h-5" /></button>
            <button onClick={handleDownload} className="bg-green-600/80 text-white p-2 rounded-full transition-all hover:bg-green-500 transform hover:scale-110 shadow-lg" aria-label={t.downloadImageTooltip} title={t.downloadImageTooltip}><DownloadIcon className="w-5 h-5" /></button>
            {navigator.share && (<button onClick={handleShare} className="bg-blue-500/80 text-white p-2 rounded-full transition-all hover:bg-blue-400 transform hover:scale-110 shadow-lg" aria-label={t.shareImageTooltip} title={t.shareImageTooltip}><ShareIcon className="w-5 h-5" /></button>)}
        </div>
         <div className={`absolute top-3 left-3 flex flex-col space-y-2 transition-opacity z-10 ${scale > 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
             <button onClick={handleZoomIn} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110 shadow-lg" title={t.zoomInTooltip}><ZoomInIcon className="w-5 h-5" /></button>
             <button onClick={handleZoomOut} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110 shadow-lg" title={t.zoomOutTooltip}><ZoomOutIcon className="w-5 h-5" /></button>
             {scale > 1 && (<button onClick={handleResetZoom} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110 shadow-lg" title={t.resetZoomTooltip}><ResetZoomIcon className="w-5 h-5" /></button>)}
         </div>
    </div>
  );

  return (
    <div className="w-full space-y-4 p-4 bg-base-200/50 rounded-lg animate-fade-in">
      <h2 className="text-xl font-semibold text-center">{t.resultTitle}</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {currentImage && (isEditing ? renderImageEditor() : renderImageViewer())}
        {result.videoUrl && (
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden bg-black">
                <video src={result.videoUrl} controls autoPlay loop muted playsInline className="w-full h-full object-contain">{t.videoUnsupported}</video>
            </div>
            <div className="flex justify-end">
                <button onClick={handleVideoDownload} className="bg-green-600 text-white px-4 py-2 rounded-lg transition-all hover:bg-green-500 transform hover:scale-105 flex items-center gap-2" aria-label={t.downloadVideoButton} title={t.downloadVideoButton}>
                    <DownloadIcon className="w-5 h-5" /><span>{t.downloadVideoButton}</span>
                </button>
            </div>
          </div>
        )}
        {result.text && (
          <div className={`w-full ${result.image || result.videoUrl ? 'md:w-1/2' : ''}`}>
            <div className="p-4 bg-base-100 rounded-lg h-full max-h-[50vh] overflow-y-auto">
              <p className="text-content whitespace-pre-wrap">{result.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;