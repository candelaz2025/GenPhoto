

import React, { useState, useRef, MouseEvent, WheelEvent, useEffect, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { Result } from '../types';
import { 
    ReuseIcon, DownloadIcon, ShareIcon, ZoomInIcon, ZoomOutIcon, ResetZoomIcon, 
    EditIcon, CropIcon, RotateCcwIcon, BrightnessIcon, CheckIcon, XIcon, PaintBrushIcon,
    UpscaleIcon
} from './IconComponents';
import { Translation } from '../locales/translations';

interface ResultDisplayProps {
  result: Result | null;
  onAddToHistory: (result: Result) => void;
  t: Translation;
  onRegenerate: (originalImage: string, maskImage: string, inpaintPrompt: string) => Promise<Result>;
  onUpscale: (currentImage: string, factor: number) => Promise<void>;
  isLoading: boolean;
}

/**
 * Creates an image from a data URL, crops it, rotates it, and adjusts color properties.
 * @param {string} imageSrc - The source data URL of the image.
 * @param {Area} crop - The pixel area to crop.
 * @param {number} rotation - The rotation angle in degrees.
 * @param {number} brightness - The brightness value (100 is normal).
 * @param {number} saturation - The saturation value (100 is normal).
 * @param {number} contrast - The contrast value (100 is normal).
 * @param {number} hue - The hue rotation value in degrees (0 is normal).
 * @returns {Promise<string>} A promise that resolves with the new data URL.
 */
const getEditedImage = async (
  imageSrc: string,
  crop: Area | null,
  rotation = 0,
  brightness = 100,
  saturation = 100,
  contrast = 100,
  hue = 0
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

  ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) hue-rotate(${hue}deg)`;

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

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onAddToHistory, t, onRegenerate, onUpscale, isLoading }) => {
  // Pan/Zoom state for viewing
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const imageDisplayContainerRef = useRef<HTMLDivElement>(null);
  
  // State for the displayed image (original or edited)
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Editing state
  const [isEditing, setIsEditing] = useState(false);
  const [activeTool, setActiveTool] = useState<'crop' | 'adjust' | 'mask' | null>(null);
  const [tempRotation, setTempRotation] = useState(0);
  const [tempBrightness, setTempBrightness] = useState(100);
  const [tempSaturation, setTempSaturation] = useState(100);
  const [tempContrast, setTempContrast] = useState(100);
  const [tempHue, setTempHue] = useState(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropZoom, setCropZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isProcessingEdit, setIsProcessingEdit] = useState(false);

  // In-painting/Masking state
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(40);
  const [inpaintPrompt, setInpaintPrompt] = useState("");
  const [maskError, setMaskError] = useState<string | null>(null);
  const [isMaskEmpty, setIsMaskEmpty] = useState(true);

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
        tempBrightness,
        tempSaturation,
        tempContrast,
        tempHue
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
    setTempSaturation(100);
    setTempContrast(100);
    setTempHue(0);
    setCroppedAreaPixels(null);
    setCrop({ x: 0, y: 0 });
    setCropZoom(1);
    setInpaintPrompt("");
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
  
  const handleDownload = async () => {
    if (!currentImage) return;
    
    // iOS handles downloads differently. Opening the image in a new tab
    // is the most reliable way to allow users to save it to their photo album.
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    try {
        const response = await fetch(currentImage);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        if (isIOS) {
            // On iOS, we open the blob URL in a new tab. The user can then
            // use the share sheet or long-press to save the image.
            window.open(url, '_blank');
            // We cannot revoke the URL immediately as the new tab needs it.
            // Browser will handle cleanup when the tab is closed.
        } else {
            // For other OS (Android, Desktop), creating a link with a download
            // attribute works as expected.
            const link = document.createElement('a');
            link.href = url;
            const fileExtension = blob.type.split('/')[1] || 'png';
            link.download = `gemini-art-${Date.now()}.${fileExtension}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            // We can revoke the URL right away as the download has been initiated.
            window.URL.revokeObjectURL(url);
        }
    } catch (error) {
        console.error('Download failed, falling back to opening data URI.', error);
        // Fallback for any error: open the original data URI in a new tab.
        // This is less efficient but a good fallback.
        window.open(currentImage, '_blank');
    }
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

  // In-painting Logic
  const getCoords = (e: MouseEvent<HTMLCanvasElement>): { x: number; y: number } => {
    const canvas = maskCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    const ctx = maskCanvasRef.current?.getContext('2d');
    if (!ctx) return;
    setIsDrawing(true);
    setIsMaskEmpty(false);
    const { x, y } = getCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const ctx = maskCanvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCoords(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  const stopDrawing = () => {
    const ctx = maskCanvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.closePath();
    setIsDrawing(false);
  };

  const clearMask = () => {
    const canvas = maskCanvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
        const rect = canvas.getBoundingClientRect();
        // Use rect dimensions for clearing because context is scaled
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, rect.width, rect.height);
        setIsMaskEmpty(true);
    }
  };

  const handleRegenerate = async () => {
    if (isMaskEmpty) {
        setMaskError(t.error.maskEmpty);
        setTimeout(() => setMaskError(null), 3000);
        return;
    }
    if (!inpaintPrompt.trim()) {
        setMaskError(t.error.promptOrImage);
        setTimeout(() => setMaskError(null), 3000);
        return;
    }

    const maskDataUrl = maskCanvasRef.current?.toDataURL('image/png');
    if (!currentImage || !maskDataUrl) return;

    setIsProcessingEdit(true);
    try {
        const newResult = await onRegenerate(currentImage, maskDataUrl, inpaintPrompt);
        if (newResult?.image) {
          setCurrentImage(newResult.image);
        }
        setIsEditing(false); // Exit edit mode on success
    } catch (e) {
        console.error("Regeneration failed", e);
        // Error is displayed globally by App.tsx
    } finally {
        setIsProcessingEdit(false);
    }
  };
  
  // Effect to set up canvas
  useEffect(() => {
    const canvas = maskCanvasRef.current;
    const container = imageDisplayContainerRef.current;
    if (activeTool === 'mask' && canvas && container) {
        const dpr = window.devicePixelRatio || 1;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.scale(dpr, dpr);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, rect.width, rect.height);
            setIsMaskEmpty(true);
        }
    }
  }, [activeTool, brushSize]);


  if (!result) return null;
  
  const renderImageEditor = () => (
    <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div ref={imageDisplayContainerRef} className="w-full aspect-square rounded-lg shadow-lg overflow-hidden bg-base-100 relative">
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
              <>
                <img 
                    src={currentImage ?? undefined} 
                    alt="Generated result" 
                    className="w-full h-full object-contain transition-all duration-100 ease-out"
                    style={{ 
                        transform: `rotate(${tempRotation}deg)`,
                        filter: `brightness(${tempBrightness}%) saturate(${tempSaturation}%) contrast(${tempContrast}%) hue-rotate(${tempHue}deg)`,
                        willChange: 'transform, filter',
                    }}
                />
                {activeTool === 'mask' && (
                  <canvas
                    ref={maskCanvasRef}
                    className="absolute inset-0 w-full h-full opacity-70 cursor-crosshair"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                )}
              </>
            )}
        </div>
        <div className="bg-base-300/50 p-3 rounded-lg flex flex-col gap-4">
           {activeTool === 'adjust' && (
             <div className="flex flex-col gap-2 px-2 animate-fade-in">
                <div className="flex items-center gap-2">
                    <label className="text-xs text-white w-16">{t.brightness}</label>
                    <input type="range" min="50" max="150" value={tempBrightness} onChange={(e) => setTempBrightness(Number(e.target.value))} className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm" />
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-xs text-white w-16">{t.saturation}</label>
                    <input type="range" min="0" max="200" value={tempSaturation} onChange={(e) => setTempSaturation(Number(e.target.value))} className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm" />
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-xs text-white w-16">{t.contrast}</label>
                    <input type="range" min="50" max="150" value={tempContrast} onChange={(e) => setTempContrast(Number(e.target.value))} className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm" />
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-xs text-white w-16">{t.hue}</label>
                    <input type="range" min="-180" max="180" value={tempHue} onChange={(e) => setTempHue(Number(e.target.value))} className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer range-sm" />
                </div>
             </div>
           )}
           {activeTool === 'mask' && (
            <div className="flex flex-col gap-3 animate-fade-in">
                <div className="flex items-center gap-3">
                    <label className="text-sm font-medium whitespace-nowrap">{t.brushSizeLabel}</label>
                    <input type="range" min="10" max="100" value={brushSize} onChange={e => setBrushSize(Number(e.target.value))} className="w-full" />
                    <button onClick={clearMask} className="text-sm px-3 py-1 bg-base-100 rounded-md hover:bg-base-200">{t.clearMaskButton}</button>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">{t.inpaintPromptLabel}</label>
                    <textarea value={inpaintPrompt} onChange={e => setInpaintPrompt(e.target.value)} placeholder={t.promptPlaceholderDefault} rows={2} className="w-full p-2 bg-base-100 rounded-md text-sm focus:ring-brand-primary focus:outline-none focus:ring-2" />
                </div>
                {maskError && <p className="text-red-400 text-xs text-center">{maskError}</p>}
            </div>
           )}
            <div className="flex justify-around items-center border-t border-base-300 pt-3">
                <button onClick={() => setActiveTool('mask')} className={`p-2 rounded-full ${activeTool === 'mask' ? 'bg-brand-primary' : 'hover:bg-base-300'}`} title={t.inpaintToolTooltip}><PaintBrushIcon className="w-5 h-5 text-white" /></button>
                <button onClick={() => setActiveTool('crop')} className={`p-2 rounded-full ${activeTool === 'crop' ? 'bg-brand-primary' : 'hover:bg-base-300'}`} title={t.cropTooltip}><CropIcon className="w-5 h-5 text-white" /></button>
                <button onClick={handleRotate} className="p-2 rounded-full hover:bg-base-300" title={t.rotateTooltip}><RotateCcwIcon className="w-5 h-5 text-white" /></button>
                <button onClick={() => setActiveTool('adjust')} className={`p-2 rounded-full ${activeTool === 'adjust' ? 'bg-brand-primary' : 'hover:bg-base-300'}`} title={t.adjustmentsTooltip}><BrightnessIcon className="w-5 h-5 text-white" /></button>
                <div className="w-px h-6 bg-gray-600" />
                <button onClick={handleCancelEditMode} className="p-2 rounded-full hover:bg-red-500/50" title={t.cancelTooltip}><XIcon className="w-6 h-6 text-red-400" /></button>
                <button onClick={activeTool === 'mask' ? handleRegenerate : handleApplyEdits} disabled={isProcessingEdit} className="p-2 rounded-full hover:bg-green-500/50 disabled:cursor-not-allowed" title={activeTool === 'mask' ? t.regenerateButton : t.applyChangesTooltip}>
                    {isProcessingEdit ? <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin" /> : <CheckIcon className="w-6 h-6 text-green-400" />}
                </button>
            </div>
        </div>
    </div>
  );

  const renderImageViewer = () => (
    <div className="w-full md:w-1/2 relative group">
        <div
            ref={imageDisplayContainerRef}
            className={`w-full aspect-square rounded-lg shadow-lg overflow-hidden transition-colors border ${scale > 1 ? 'cursor-grabbing border-brand-primary' : 'cursor-zoom-in border-transparent'}`}
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onWheel={handleWheel}
        >
            <img src={currentImage!} alt="Generated result" className="w-full h-full object-contain transition-transform duration-100 ease-out"
                style={{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`, willChange: 'transform', cursor: 'inherit' }}
            />
            <div className={`absolute top-3 left-3 flex flex-col space-y-2 transition-opacity z-10 ${scale > 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <button onClick={handleZoomIn} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110 shadow-lg" title={t.zoomInTooltip}><ZoomInIcon className="w-5 h-5" /></button>
                <button onClick={handleZoomOut} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110 shadow-lg" title={t.zoomOutTooltip}><ZoomOutIcon className="w-5 h-5" /></button>
                {scale > 1 && (<button onClick={handleResetZoom} className="bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transform hover:scale-110 shadow-lg" title={t.resetZoomTooltip}><ResetZoomIcon className="w-5 h-5" /></button>)}
            </div>
        </div>
        
        {/* Always-visible action bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 w-full pt-4">
            <button onClick={handleEnterEditMode} disabled={isLoading} className="flex flex-col items-center p-2 rounded-lg hover:bg-base-300 transition-colors text-content disabled:opacity-50 disabled:cursor-not-allowed">
                <EditIcon className="w-6 h-6" />
                <span className="text-xs mt-1">{t.editTooltip}</span>
            </button>
             <button onClick={() => onUpscale(currentImage!, 2)} disabled={isLoading} className="flex flex-col items-center p-2 rounded-lg hover:bg-base-300 transition-colors text-content disabled:opacity-50 disabled:cursor-not-allowed" title={t.upscaleTooltip}>
                <UpscaleIcon className="w-6 h-6" />
                <span className="text-xs mt-1">{t.upscale2xButton}</span>
            </button>
            <button onClick={() => onUpscale(currentImage!, 3)} disabled={isLoading} className="flex flex-col items-center p-2 rounded-lg hover:bg-base-300 transition-colors text-content disabled:opacity-50 disabled:cursor-not-allowed" title={t.upscaleTooltip}>
                <UpscaleIcon className="w-6 h-6" />
                <span className="text-xs mt-1">{t.upscale3xButton}</span>
            </button>
            <button onClick={handleAdd} disabled={isLoading} className="flex flex-col items-center p-2 rounded-lg hover:bg-base-300 transition-colors text-content disabled:opacity-50 disabled:cursor-not-allowed">
                <ReuseIcon className="w-6 h-6" />
                <span className="text-xs mt-1">{t.saveResultTooltip}</span>
            </button>
            <button onClick={handleDownload} disabled={isLoading} className="flex flex-col items-center p-2 rounded-lg hover:bg-base-300 transition-colors text-content disabled:opacity-50 disabled:cursor-not-allowed">
                <DownloadIcon className="w-6 h-6" />
                <span className="text-xs mt-1">{t.downloadImageTooltip}</span>
            </button>
            {navigator.share && (
                <button onClick={handleShare} disabled={isLoading} className="flex flex-col items-center p-2 rounded-lg hover:bg-base-300 transition-colors text-content disabled:opacity-50 disabled:cursor-not-allowed">
                    <ShareIcon className="w-6 h-6" />
                    <span className="text-xs mt-1">{t.shareImageTooltip}</span>
                </button>
            )}
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