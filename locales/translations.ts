

// Fix: Provide a full implementation for the translations module.
// This resolves module import errors across the application and fixes
// downstream type errors in components that consume the translation object.
import { ArtisticStyle, FontStyle } from '../types';

export interface PromptExample {
  title: string;
  description: string;
  prompt: string;
}

export interface WhatsNewFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Translation {
  appName: string;
  createdBy: string;
  mainDescription: string;
  uploaderTitle: string;
  uploaderSubtitle: string;
  uploaderDropMessage: string;
  uploaderLimit: string;
  addImage: (count: number) => string;
  galleryTitle: string;
  removeImageTooltip: string;
  promptTitleLabel: string;
  promptTitlePlaceholder: string;
  promptPlaceholderVideo: string;
  promptPlaceholderDefault: string;
  promptPlaceholderImage: (example: string) => string;
  videoWarningMessage: string;
  aspectRatioSquare: string;
  aspectRatioLandscape: string;
  aspectRatioPortrait: string;
  inspiringPromptsButton: string;
  adHelperTitle: string;
  adHelperStudio: string;
  adHelperLifestyle: string;
  adHelperNature: string;
  adHelperLuxurious: string;
  adHelperProductMockup: string;
  modeLabel: string;
  modeImage: string;
  modeVideo: string;
  styleLabel: string;
  aspectRatioLabel: string;
  addTextToImageLabel: string;
  addTextPlaceholder: string;
  fontStyleLabel: string;
  processingButton: string;
  generateImageButton: string;
  generateVideoButton: string;
  artisticStyles: Record<ArtisticStyle, string>;
  fontStyles: Record<FontStyle, string>;
  resultTitle: string;
  unsupportedShare: string;
  brightness: string;
  saturation: string;
  contrast: string;
  hue: string;
  brushSizeLabel: string;
  clearMaskButton: string;
  inpaintPromptLabel: string;
  inpaintToolTooltip: string;
  cropTooltip: string;
  rotateTooltip: string;
  adjustmentsTooltip: string;
  cancelTooltip: string;
  regenerateButton: string;
  applyChangesTooltip: string;
  zoomInTooltip: string;
  zoomOutTooltip: string;
  resetZoomTooltip: string;
  editTooltip: string;
  saveResultTooltip: string;
  downloadImageTooltip: string;
  shareImageTooltip: string;
  videoUnsupported: string;
  downloadVideoButton: string;
  imageLoadingMessages: string[];
  videoLoadingMessages: string[];
  historyTitle: string;
  clearHistoryButton: string;
  reuseImageTooltip: string;
  promptExamplesTitle: string;
  promptSearchPlaceholder: (category: string) => string;
  selectPromptButton: string;
  promptExamplesNotFound: string;
  promptExamplesNotFoundHint: string;
  promptCategories: Record<string, string>;
  promptExamples: PromptExample[];
  whatsNewTitle: string;
  whatsNewDate: string;
  whatsNewFeatures: WhatsNewFeature[];
  whatsNewCloseButton: string;
  watermarkSettings: string;
  uploadWatermark: string;
  removeWatermark: string;
  applyWatermark: string;
  watermarkDesc: string;
  watermarkDisclaimer: string;
  // Fix: Add missing translation keys for ApiKeyModal to resolve type errors.
  apiKeyModalTitle: string;
  apiKeyModalDescription: string;
  apiKeyModalSteps: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  apiKeyModalNote: string;
  error: {
    default: string;
    promptOrImage: string;
    fileProcessing: string;
    maxImages: string;
    historyReuse: string;
    invalidKey: string;
    rateLimit: string;
    network: string;
    safety: string;
    emptyResponse: string;
    invalidArgument: string;
    apiError: (message: string) => string;
    videoFinishedNoLink: string;
    maskEmpty: string;
    errorWatermarkUpload: string;
  };
  service: {
    combineInstructionWithPrompt: (prompt: string) => string;
    combineInstructionNoPrompt: string;
    editSingleImageWithPrompt: (prompt: string) => string;
    aspectRatioInstruction: (ratio: string) => string;
    addTextInstruction: (text: string, font: string) => string;
    inpaintInstruction: (prompt: string) => string;
    styleInstruction: (style: string) => string;
    styleInstructionNoPrompt: (style: string) => string;
  };
}

const cafePrompt = "A realistic young Asian as attached, sitting in an aesthetic café with warm lighting and wooden interior. He wears as attached, chunky Jordan 18 Royal White OG sneakers. Beside him sits a cute stylized 3D chibi character with large expressive eyes, slightly big ears, and a simple innocent face, wearing the same outfit. They both hold takeaway coffee cups and make a cheerful toast together. The scene combines realistic photography style for the man with high-quality 3D cartoon rendering for the chibi character, creating a cozy and warm atmosphere.";

const en: Translation = {
  appName: 'AI Image & Video Studio',
  createdBy: 'Created with ❤️ by Gemini',
  mainDescription: 'Create amazing images and videos with AI. Start by uploading an image, writing a prompt, or both!',
  uploaderTitle: 'Upload Your Images',
  uploaderSubtitle: 'Drag & drop or click to select files. (Max 10)',
  uploaderDropMessage: 'Drop your files to upload!',
  uploaderLimit: 'Supports JPEG, PNG, WEBP.',
  addImage: (count) => `Add More Images (${count}/10)`,
  galleryTitle: 'Uploaded Images',
  removeImageTooltip: 'Remove image',
  promptTitleLabel: 'Title (Optional)',
  promptTitlePlaceholder: 'e.g., A Robot in the City',
  promptPlaceholderVideo: 'e.g., A cinematic shot of a car driving on a rainy street at night',
  promptPlaceholderDefault: 'Enter your prompt here...',
  promptPlaceholderImage: (example) => `e.g., ${example}`,
  videoWarningMessage: 'Video generation can take several minutes and may use more resources. Do you want to continue?',
  aspectRatioSquare: 'Square',
  aspectRatioLandscape: 'Landscape',
  aspectRatioPortrait: 'Portrait',
  inspiringPromptsButton: 'Get Inspired by Prompts',
  adHelperTitle: '✨ Ad Helper (for uploaded products)',
  adHelperStudio: 'Studio',
  adHelperLifestyle: 'Lifestyle',
  adHelperNature: 'Nature',
  adHelperLuxurious: 'Luxurious',
  adHelperProductMockup: 'Mockup',
  modeLabel: 'Mode',
  modeImage: 'Image',
  modeVideo: 'Video',
  styleLabel: 'Style',
  aspectRatioLabel: 'Aspect Ratio',
  addTextToImageLabel: 'Add Text to Image (Optional)',
  addTextPlaceholder: 'e.g., Summer Sale!',
  fontStyleLabel: 'Font',
  processingButton: 'Processing...',
  generateImageButton: 'Generate Image',
  generateVideoButton: 'Generate Video',
  artisticStyles: {
    Default: 'Default',
    Photorealistic: 'Photorealistic',
    Anime: 'Anime',
    Impressionist: 'Impressionist',
    Cartoon: 'Cartoon',
    Surreal: 'Surreal',
    Cyberpunk: 'Cyberpunk',
    Vintage: 'Vintage',
    Fantasy: 'Fantasy',
    'Sci-Fi': 'Sci-Fi',
    Abstract: 'Abstract'
  },
  fontStyles: {
    Default: 'Default',
    Serif: 'Serif',
    'Sans-serif': 'Sans-serif',
    Script: 'Script',
    Display: 'Display',
    Handwriting: 'Handwriting',
    Futuristic: 'Futuristic'
  },
  resultTitle: 'Result',
  unsupportedShare: 'Sharing is not supported on this browser.',
  brightness: 'Brightness',
  saturation: 'Saturation',
  contrast: 'Contrast',
  hue: 'Hue',
  brushSizeLabel: 'Brush Size',
  clearMaskButton: 'Clear',
  inpaintPromptLabel: 'Describe what to change in the masked area:',
  inpaintToolTooltip: 'Inpaint (Mask & Replace)',
  cropTooltip: 'Crop',
  rotateTooltip: 'Rotate',
  adjustmentsTooltip: 'Adjustments',
  cancelTooltip: 'Cancel',
  regenerateButton: 'Regenerate',
  applyChangesTooltip: 'Apply',
  zoomInTooltip: 'Zoom In',
  zoomOutTooltip: 'Zoom Out',
  resetZoomTooltip: 'Reset Zoom',
  editTooltip: 'Edit',
  saveResultTooltip: 'Save to History',
  downloadImageTooltip: 'Download',
  shareImageTooltip: 'Share',
  videoUnsupported: 'Your browser does not support the video tag.',
  downloadVideoButton: 'Download Video',
  imageLoadingMessages: [
    'Brewing pixels...',
    'Warming up the AI...',
    'Generating masterpiece...',
    'This might take a moment...',
    'Unleashing creativity...',
  ],
  videoLoadingMessages: [
    'Rendering video frames...',
    'This is the slow part, hang tight!',
    'Composing the video, might take a few minutes...',
    'Almost there...',
    'Finalizing video...',
  ],
  historyTitle: 'History',
  clearHistoryButton: 'Clear History',
  reuseImageTooltip: 'Reuse this image',
  promptExamplesTitle: 'Inspiring Prompts',
  promptSearchPlaceholder: (category) => `Search in ${category}...`,
  selectPromptButton: 'Use Prompt',
  promptExamplesNotFound: 'No prompts found.',
  promptExamplesNotFoundHint: 'Try a different category or search term.',
  promptCategories: {
    popular: 'Popular',
    '3d': '3D',
    photo: 'Photo',
    fantasy: 'Fantasy',
    art: 'Art',
    character: 'Character',
    scape: 'Scape',
    cute: 'Cute',
    concept: 'Concept',
  },
  promptExamples: [
    { title: '3D Robot', description: 'A cute, small 3D robot character.', prompt: 'tiny cute 3D robot, high detail, sharp focus, 8k, photorealistic' },
    { title: 'Anime Character', description: 'A vibrant anime-style character portrait.', prompt: '1girl, anime style, key visual, vibrant, intricate, highly detailed, digital painting, artstation' },
    { title: 'Realistic Portrait', description: 'A photorealistic portrait of a person.', prompt: 'photograph of a woman with long hair, 85mm lens, f/1.8, sharp focus, dramatic lighting' },
    { title: 'Fantasy Landscape', description: 'A breathtaking fantasy landscape with glowing elements.', prompt: 'enchanted forest, fantasy, volumetric lighting, glowing mushrooms, river, epic scale, matte painting' },
    { title: 'Surreal Art', description: 'An abstract and surreal piece of digital art.', prompt: 'surrealism, a clock melting on a tree branch, dreamlike, oil on canvas, style of Salvador Dali' },
    { title: 'Cyberpunk City', description: 'A neon-lit cyberpunk city at night.', prompt: 'cyberpunk city street, neon signs, rainy, reflections on the ground, cinematic, Blade Runner style' },
    { title: 'Café with AI buddy', description: 'A realistic person and a cute 3D character having coffee together.', prompt: cafePrompt },
  ],
  whatsNewTitle: "What's New",
  whatsNewDate: 'September 8, 2025',
  whatsNewFeatures: [
    { icon: 'VideoIcon', title: 'Veo Video Generation', description: 'You can now generate short videos from a text prompt or an initial image. Just toggle the mode to "Video"!' },
    { icon: 'PaintBrushIcon', title: 'In-painting with Masks', description: 'The new "Edit" mode includes an in-painting tool. Simply draw a mask over an area and describe what you want to change.' },
    { icon: 'EditIcon', title: 'Advanced Image Editing', description: 'Crop, rotate, and adjust brightness, contrast, and more right within the app after generating an image.' },
    { icon: 'SparklesIcon', title: 'Prompt Inspiration', description: 'Stuck for ideas? Click the "Get Inspired" button for a collection of creative prompts to get you started.' },
  ],
  whatsNewCloseButton: "Let's Go!",
  watermarkSettings: "Watermark Settings",
  uploadWatermark: "Upload Watermark",
  removeWatermark: "Remove",
  applyWatermark: "Apply Watermark",
  watermarkDesc: "Upload a PNG to use as a watermark.",
  watermarkDisclaimer: "Watermarking is only available for image generation.",
  // Fix: Add missing translations for ApiKeyModal.
  apiKeyModalTitle: 'Setup Your API Key',
  apiKeyModalDescription: 'To use this application, you need a Google AI API key. Follow these steps:',
  apiKeyModalSteps: {
    step1: 'Go to',
    step2: 'Click "Create API key in new project".',
    step3: 'Copy your generated API key.',
    step4: 'Create a file named `.env.local` in the project root.',
    step5: 'In the `.env.local` file, add `API_KEY=\'YOUR_API_KEY\'`, replacing `YOUR_API_KEY` with your copied key.'
  },
  apiKeyModalNote: 'Note: Your API key is for personal use. Keep it secret and do not commit it to version control.',
  error: {
    default: 'An unknown error occurred. Please try again.',
    promptOrImage: 'Please provide a prompt or upload an image.',
    fileProcessing: 'An error occurred while processing the file.',
    maxImages: 'You can upload a maximum of 10 images.',
    historyReuse: 'Failed to reuse image from history.',
    invalidKey: 'Your API key is not valid. Please check and try again.',
    rateLimit: 'You have exceeded your API quota. Please try again later.',
    network: 'A network error occurred. Please check your connection.',
    safety: 'The prompt was blocked due to safety policies.',
    emptyResponse: 'The AI returned an empty response. Try a different prompt.',
    invalidArgument: 'There was an invalid argument in the request. Please check your prompt and settings.',
    apiError: (message) => `An API error occurred: ${message}`,
    videoFinishedNoLink: 'Video generation finished, but no download link was provided.',
    maskEmpty: 'Please draw a mask on the image before regenerating.',
    errorWatermarkUpload: "Failed to upload watermark. Please select a valid image file.",
  },
  service: {
    combineInstructionWithPrompt: (prompt) => `Combine the uploaded images based on this instruction: "${prompt}".`,
    combineInstructionNoPrompt: 'Combine the uploaded images seamlessly and creatively.',
    editSingleImageWithPrompt: (prompt) => `Edit the uploaded image with the following instruction: "${prompt}".`,
    aspectRatioInstruction: (ratio) => ` The final image must have an aspect ratio of ${ratio}.`,
    addTextInstruction: (text, font) => ` Add the text "${text}" to the image. Use a ${font} font style.`,
    inpaintInstruction: (prompt) => `In the provided image, the white area of the mask indicates the region to be inpainted. Replace that area with: ${prompt}`,
    styleInstruction: (style) => `The style of the image should be: ${style}.`,
    styleInstructionNoPrompt: (style) => `Change the style of the image to: ${style}.`,
  },
};

const th: Translation = {
  appName: 'AI สตูดิโอรูปภาพและวิดีโอ',
  createdBy: 'สร้างสรรค์ด้วย ❤️ โดย Gemini',
  mainDescription: 'สร้างรูปภาพและวิดีโอสุดทึ่งด้วย AI เริ่มต้นด้วยการอัปโหลดรูปภาพ เขียนคำสั่ง หรือทั้งสองอย่าง!',
  uploaderTitle: 'อัปโหลดรูปภาพของคุณ',
  uploaderSubtitle: 'ลากและวาง หรือคลิกเพื่อเลือกไฟล์ (สูงสุด 10 ไฟล์)',
  uploaderDropMessage: 'วางไฟล์ของคุณเพื่ออัปโหลด!',
  uploaderLimit: 'รองรับไฟล์ JPEG, PNG, WEBP',
  addImage: (count) => `เพิ่มรูปภาพ (${count}/10)`,
  galleryTitle: 'รูปภาพที่อัปโหลด',
  removeImageTooltip: 'ลบรูปภาพ',
  promptTitleLabel: 'หัวข้อ (ไม่บังคับ)',
  promptTitlePlaceholder: 'เช่น หุ่นยนต์ในเมืองใหญ่',
  promptPlaceholderVideo: 'เช่น ช็อตภาพยนตร์รถกำลังขับบนถนนที่ฝนตกในเวลากลางคืน',
  promptPlaceholderDefault: 'ป้อนคำสั่งของคุณที่นี่...',
  promptPlaceholderImage: (example) => `เช่น ${example}`,
  videoWarningMessage: 'การสร้างวิดีโออาจใช้เวลาหลายนาทีและอาจใช้ทรัพยากรมากกว่า ต้องการดำเนินการต่อหรือไม่?',
  aspectRatioSquare: 'จัตุรัส',
  aspectRatioLandscape: 'แนวนอน',
  aspectRatioPortrait: 'แนวตั้ง',
  inspiringPromptsButton: 'ค้นหาแรงบันดาลใจจากคำสั่ง',
  adHelperTitle: '✨ ตัวช่วยสร้างโฆษณา (สำหรับสินค้าที่อัปโหลด)',
  adHelperStudio: 'สตูดิโอ',
  adHelperLifestyle: 'ไลฟ์สไตล์',
  adHelperNature: 'ธรรมชาติ',
  adHelperLuxurious: 'หรูหรา',
  adHelperProductMockup: 'รูปสินค้าตัวอย่าง',
  modeLabel: 'โหมด',
  modeImage: 'รูปภาพ',
  modeVideo: 'วิดีโอ',
  styleLabel: 'สไตล์',
  aspectRatioLabel: 'อัตราส่วนภาพ',
  addTextToImageLabel: 'เพิ่มข้อความลงในรูปภาพ (optional)',
  addTextPlaceholder: 'เช่น ลดราคาท้าลมร้อน!',
  fontStyleLabel: 'ฟอนต์',
  processingButton: 'กำลังประมวลผล...',
  generateImageButton: 'สร้างรูปภาพ',
  generateVideoButton: 'สร้างวิดีโอ',
  artisticStyles: {
    Default: 'ค่าเริ่มต้น',
    Photorealistic: 'เสมือนจริง',
    Anime: 'อนิเมะ',
    Impressionist: 'อิมเพรสชันนิสต์',
    Cartoon: 'การ์ตูน',
    Surreal: 'เหนือจริง',
    Cyberpunk: 'ไซเบอร์พังก์',
    Vintage: 'วินเทจ',
    Fantasy: 'แฟนตาซี',
    'Sci-Fi': 'ไซไฟ',
    Abstract: 'นามธรรม'
  },
  fontStyles: {
    Default: 'ค่าเริ่มต้น',
    Serif: 'เซริฟ',
    'Sans-serif': 'ซานส์เซริฟ',
    Script: 'ตัวเขียน',
    Display: 'ตัวใหญ่',
    Handwriting: 'ลายมือ',
    Futuristic: 'อนาคต'
  },
  resultTitle: 'ผลลัพธ์',
  unsupportedShare: 'เบราว์เซอร์นี้ไม่รองรับการแชร์',
  brightness: 'ความสว่าง',
  saturation: 'ความอิ่มตัว',
  contrast: 'ความต่างสี',
  hue: 'เฉดสี',
  brushSizeLabel: 'ขนาดพู่กัน',
  clearMaskButton: 'ล้าง',
  inpaintPromptLabel: 'อธิบายสิ่งที่จะเปลี่ยนแปลงในพื้นที่ที่มาสก์:',
  inpaintToolTooltip: 'Inpaint (มาสก์และแทนที่)',
  cropTooltip: 'ครอบตัด',
  rotateTooltip: 'หมุน',
  adjustmentsTooltip: 'ปรับแต่ง',
  cancelTooltip: 'ยกเลิก',
  regenerateButton: 'สร้างใหม่',
  applyChangesTooltip: 'ปรับใช้',
  zoomInTooltip: 'ซูมเข้า',
  zoomOutTooltip: 'ซูมออก',
  resetZoomTooltip: 'รีเซ็ตการซูม',
  editTooltip: 'แก้ไข',
  saveResultTooltip: 'บันทึกลงประวัติ',
  downloadImageTooltip: 'ดาวน์โหลด',
  shareImageTooltip: 'แชร์',
  videoUnsupported: 'เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ',
  downloadVideoButton: 'ดาวน์โหลดวิดีโอ',
  imageLoadingMessages: [
    'กำลังปรุงแต่งพิกเซล...',
    'กำลังวอร์มเครื่อง AI...',
    'กำลังสร้างผลงานชิ้นเอก...',
    'อาจใช้เวลาสักครู่...',
    'ปลดปล่อยความคิดสร้างสรรค์...',
  ],
  videoLoadingMessages: [
    'กำลังเรนเดอร์เฟรมวิดีโอ...',
    'ส่วนนี้จะช้าหน่อย โปรดรอสักครู่!',
    'กำลังประกอบวิดีโอ อาจใช้เวลาสองสามนาที...',
    'ใกล้เสร็จแล้ว...',
    'กำลังสรุปผลวิดีโอ...',
  ],
  historyTitle: 'ประวัติ',
  clearHistoryButton: 'ล้างประวัติ',
  reuseImageTooltip: 'ใช้รูปภาพนี้อีกครั้ง',
  promptExamplesTitle: 'คำสั่งสร้างแรงบันดาลใจ',
  promptSearchPlaceholder: (category) => `ค้นหาใน ${category}...`,
  selectPromptButton: 'ใช้คำสั่งนี้',
  promptExamplesNotFound: 'ไม่พบคำสั่ง',
  promptExamplesNotFoundHint: 'ลองเปลี่ยนหมวดหมู่หรือคำค้นหา',
  promptCategories: {
    popular: 'ยอดนิยม',
    '3d': '3D',
    photo: 'ภาพถ่าย',
    fantasy: 'แฟนตาซี',
    art: 'ศิลปะ',
    character: 'ตัวละคร',
    scape: 'ทิวทัศน์',
    cute: 'น่ารัก',
    concept: 'คอนเซ็ปต์',
  },
  promptExamples: [
    { title: 'หุ่นยนต์ 3 มิติ', description: 'ตัวละครหุ่นยนต์ 3 มิติขนาดเล็กน่ารัก', prompt: 'หุ่นยนต์ 3 มิติตัวเล็กน่ารัก, รายละเอียดสูง, โฟกัสคมชัด, 8k, ภาพเสมือนจริง' },
    { title: 'ตัวละครอนิเมะ', description: 'ภาพตัวละครสไตล์อนิเมะที่มีสีสันสดใส', prompt: 'เด็กผู้หญิง 1 คน, สไตล์อนิเมะ, ภาพวิชวลหลัก, สีสันสดใส, ซับซ้อน, รายละเอียดสูง, ภาพวาดดิจิทัล, artstation' },
    { title: 'ภาพบุคคลเสมือนจริง', description: 'ภาพถ่ายบุคคลที่สมจริง', prompt: 'ภาพถ่ายผู้หญิงผมยาว, เลนส์ 85mm, f/1.8, โฟกัสคมชัด, แสง δραμαติก' },
    { title: 'ทิวทัศน์แฟนตาซี', description: 'ทิวทัศน์แฟนตาซีที่น่าทึ่งพร้อมองค์ประกอบที่เรืองแสง', prompt: 'ป่าต้องมนต์, แฟนตาซี, แสงปริมาตร, เห็ดเรืองแสง, แม่น้ำ, สเกลยิ่งใหญ่, ภาพวาด matte' },
    { title: 'ศิลปะเหนือจริง', description: 'ผลงานศิลปะดิจิทัลแนวเหนือจริงและนามธรรม', prompt: 'ศิลปะเหนือจริง, นาฬิกาละลายบนกิ่งไม้, เหมือนฝัน, สีน้ำมันบนผ้าใบ, สไตล์ของ Salvador Dali' },
    { title: 'เมืองไซเบอร์พังก์', description: 'เมืองไซเบอร์พังก์ที่สว่างไสวด้วยแสงนีออนในเวลากลางคืน', prompt: 'ถนนในเมืองไซเบอร์พังก์, ป้ายนีออน, ฝนตก, แสงสะท้อนบนพื้น, สไตล์ภาพยนตร์, สไตล์ Blade Runner' },
    { title: 'cafe กับน้องai', description: 'คนจริงนั่งดื่มกาแฟกับตัวละคร 3D สุดน่ารัก', prompt: cafePrompt },
  ],
  whatsNewTitle: "มีอะไรใหม่",
  whatsNewDate: '8 กันยายน 2025',
  whatsNewFeatures: [
    { icon: 'VideoIcon', title: 'การสร้างวิดีโอด้วย Veo', description: 'ตอนนี้คุณสามารถสร้างวิดีโอสั้น ๆ จากคำสั่งข้อความหรือรูปภาพเริ่มต้นได้แล้ว เพียงแค่สลับโหมดเป็น "วิดีโอ"!' },
    { icon: 'PaintBrushIcon', title: 'In-painting ด้วยมาสก์', description: 'โหมด "แก้ไข" ใหม่มีเครื่องมือ in-painting เพียงแค่วาดมาสก์ทับพื้นที่และอธิบายสิ่งที่คุณต้องการเปลี่ยนแปลง' },
    { icon: 'EditIcon', title: 'การแก้ไขรูปภาพขั้นสูง', description: 'ครอบตัด, หมุน, และปรับความสว่าง, คอนทราสต์, และอื่น ๆ ได้ทันทีในแอปหลังจากสร้างรูปภาพ' },
    { icon: 'SparklesIcon', title: 'แรงบันดาลใจจากคำสั่ง', description: 'คิดไอเดียไม่ออก? คลิกปุ่ม "ค้นหาแรงบันดาลใจ" เพื่อดูชุดคำสั่งสร้างสรรค์ที่จะช่วยให้คุณเริ่มต้นได้' },
  ],
  whatsNewCloseButton: "ไปกันเลย!",
  watermarkSettings: "ตั้งค่าลายน้ำ",
  uploadWatermark: "อัปโหลดลายน้ำ",
  removeWatermark: "ลบ",
  applyWatermark: "ใช้ลายน้ำ",
  watermarkDesc: "อัปโหลดไฟล์ PNG เพื่อใช้เป็นลายน้ำ",
  watermarkDisclaimer: "การใส่ลายน้ำใช้ได้กับการสร้างรูปภาพเท่านั้น",
  // Fix: Add missing translations for ApiKeyModal.
  apiKeyModalTitle: 'ตั้งค่า API Key ของคุณ',
  apiKeyModalDescription: 'ในการใช้งานแอปพลิเคชันนี้ คุณต้องมี Google AI API key ทำตามขั้นตอนต่อไปนี้:',
  apiKeyModalSteps: {
    step1: 'ไปที่',
    step2: 'คลิก "สร้าง API key ในโปรเจกต์ใหม่"',
    step3: 'คัดลอก API key ที่สร้างขึ้นใหม่',
    step4: 'สร้างไฟล์ชื่อ `.env.local` ในไดเรกทอรีรากของโปรเจกต์',
    step5: 'ในไฟล์ `.env.local` เพิ่ม `API_KEY=\'YOUR_API_KEY\'` โดยแทนที่ `YOUR_API_KEY` ด้วยคีย์ที่คุณคัดลอกมา'
  },
  apiKeyModalNote: 'หมายเหตุ: API key ของคุณมีไว้สำหรับใช้งานส่วนตัว โปรดเก็บเป็นความลับและอย่าคอมมิตเข้าสู่ version control',
  error: {
    default: 'เกิดข้อผิดพลาดที่ไม่รู้จัก โปรดลองอีกครั้ง',
    promptOrImage: 'กรุณาป้อนคำสั่งหรืออัปโหลดรูปภาพ',
    fileProcessing: 'เกิดข้อผิดพลาดขณะประมวลผลไฟล์',
    maxImages: 'คุณสามารถอัปโหลดรูปภาพได้สูงสุด 10 รูป',
    historyReuse: 'ไม่สามารถใช้รูปภาพซ้ำจากประวัติได้',
    invalidKey: 'API key ของคุณไม่ถูกต้อง โปรดตรวจสอบและลองอีกครั้ง',
    rateLimit: 'คุณใช้โควต้า API เกินกำหนด โปรดลองอีกครั้งในภายหลัง',
    network: 'เกิดข้อผิดพลาดเกี่ยวกับเครือข่าย โปรดตรวจสอบการเชื่อมต่อของคุณ',
    safety: 'คำสั่งถูกบล็อกเนื่องจากนโยบายความปลอดภัย',
    emptyResponse: 'AI ไม่ได้ตอบกลับ โปรดลองคำสั่งอื่น',
    invalidArgument: 'มีอาร์กิวเมนต์ที่ไม่ถูกต้องในคำขอ โปรดตรวจสอบคำสั่งและการตั้งค่าของคุณ',
    apiError: (message) => `เกิดข้อผิดพลาดจาก API: ${message}`,
    videoFinishedNoLink: 'การสร้างวิดีโอเสร็จสิ้น แต่ไม่มีลิงก์สำหรับดาวน์โหลด',
    maskEmpty: 'กรุณาวาดมาสก์บนรูปภาพก่อนสร้างใหม่',
    errorWatermarkUpload: "ไม่สามารถอัปโหลดลายน้ำได้ กรุณาเลือกไฟล์รูปภาพที่ถูกต้อง",
  },
  service: {
    combineInstructionWithPrompt: (prompt) => `รวมรูปภาพที่อัปโหลดตามคำสั่งนี้: "${prompt}"`,
    combineInstructionNoPrompt: 'รวมรูปภาพที่อัปโหลดเข้าด้วยกันอย่างราบรื่นและสร้างสรรค์',
    editSingleImageWithPrompt: (prompt) => `แก้ไขรูปภาพที่อัปโหลดด้วยคำสั่งต่อไปนี้: "${prompt}"`,
    aspectRatioInstruction: (ratio) => ` รูปภาพสุดท้ายต้องมีอัตราส่วน ${ratio}`,
    addTextInstruction: (text, font) => ` เพิ่มข้อความ "${text}" ลงในรูปภาพ ใช้ฟอนต์สไตล์ ${font}`,
    inpaintInstruction: (prompt) => `ในรูปภาพที่ให้มา พื้นที่สีขาวของมาสก์คือบริเวณที่จะทำการ inpaint แทนที่บริเวณนั้นด้วย: ${prompt}`,
    styleInstruction: (style) => `สไตล์ของรูปภาพควรเป็น: ${style}`,
    styleInstructionNoPrompt: (style) => `เปลี่ยนสไตล์ของรูปภาพเป็น: ${style}`,
  },
};

const cn: Translation = {
  appName: 'AI 图像与视频工作室',
  createdBy: '由 Gemini ❤️ 创作',
  mainDescription: '使用 AI 创作令人惊叹的图像和视频。通过上传图像、编写提示或两者兼而有之来开始！',
  uploaderTitle: '上传您的图片',
  uploaderSubtitle: '拖放或点击以选择文件（最多 10 个）',
  uploaderDropMessage: '在此处放下文件即可上传！',
  uploaderLimit: '支持 JPEG、PNG、WEBP 格式。',
  addImage: (count) => `添加更多图片 (${count}/10)`,
  galleryTitle: '已上传的图片',
  removeImageTooltip: '移除图片',
  promptTitleLabel: '标题（可选）',
  promptTitlePlaceholder: '例如：城市中的机器人',
  promptPlaceholderVideo: '例如：雨夜街道上汽车行驶的电影镜头',
  promptPlaceholderDefault: '在此输入您的提示...',
  promptPlaceholderImage: (example) => `例如：${example}`,
  videoWarningMessage: '视频生成可能需要几分钟，并且可能会消耗更多资源。您想继续吗？',
  aspectRatioSquare: '方形',
  aspectRatioLandscape: '横向',
  aspectRatioPortrait: '纵向',
  inspiringPromptsButton: '从提示中获取灵感',
  adHelperTitle: '✨ 广告助手（适用于上传的产品）',
  adHelperStudio: '工作室',
  adHelperLifestyle: '生活方式',
  adHelperNature: '自然',
  adHelperLuxurious: '奢华',
  adHelperProductMockup: '产品样机',
  modeLabel: '模式',
  modeImage: '图像',
  modeVideo: '视频',
  styleLabel: '风格',
  aspectRatioLabel: '宽高比',
  addTextToImageLabel: '向图像添加文本 (可选)',
  addTextPlaceholder: '例如：夏日大甩卖！',
  fontStyleLabel: '字体',
  processingButton: '处理中...',
  generateImageButton: '生成图像',
  generateVideoButton: '生成视频',
  artisticStyles: {
    Default: '默认',
    Photorealistic: '写实',
    Anime: '动漫',
    Impressionist: '印象派',
    Cartoon: '卡通',
    Surreal: '超现实',
    Cyberpunk: '赛博朋克',
    Vintage: '复古',
    Fantasy: '幻想',
    'Sci-Fi': '科幻',
    Abstract: '抽象'
  },
  fontStyles: {
    Default: '默认',
    Serif: '衬线体',
    'Sans-serif': '无衬线体',
    Script: '手写体',
    Display: '展示体',
    Handwriting: '手写',
    Futuristic: '未来感'
  },
  resultTitle: '结果',
  unsupportedShare: '此浏览器不支持共享。',
  brightness: '亮度',
  saturation: '饱和度',
  contrast: '对比度',
  hue: '色相',
  brushSizeLabel: '画笔大小',
  clearMaskButton: '清除',
  inpaintPromptLabel: '描述要在蒙版区域中更改的内容：',
  inpaintToolTooltip: '修复（蒙版和替换）',
  cropTooltip: '裁剪',
  rotateTooltip: '旋转',
  adjustmentsTooltip: '调整',
  cancelTooltip: '取消',
  regenerateButton: '重新生成',
  applyChangesTooltip: '应用',
  zoomInTooltip: '放大',
  zoomOutTooltip: '缩小',
  resetZoomTooltip: '重置缩放',
  editTooltip: '编辑',
  saveResultTooltip: '保存到历史记录',
  downloadImageTooltip: '下载',
  shareImageTooltip: '分享',
  videoUnsupported: '您的浏览器不支持视频标签。',
  downloadVideoButton: '下载视频',
  imageLoadingMessages: [
    '正在酝酿像素...',
    '正在预热 AI...',
    '正在生成杰作...',
    '这可能需要一些时间...',
    '释放创造力...',
  ],
  videoLoadingMessages: [
    '正在渲染视频帧...',
    '这是最慢的部分，请耐心等待！',
    '正在合成视频，可能需要几分钟...',
    '快好了...',
    '正在完成视频...',
  ],
  historyTitle: '历史记录',
  clearHistoryButton: '清除历史记录',
  reuseImageTooltip: '重复使用此图像',
  promptExamplesTitle: '灵感提示',
  promptSearchPlaceholder: (category) => `在 ${category} 中搜索...`,
  selectPromptButton: '使用提示',
  promptExamplesNotFound: '未找到提示。',
  promptExamplesNotFoundHint: '尝试不同的类别或搜索词。',
  promptCategories: {
    popular: '热门',
    '3d': '3D',
    photo: '照片',
    fantasy: '幻想',
    art: '艺术',
    character: '角色',
    scape: '风景',
    cute: '可爱',
    concept: '概念',
  },
  promptExamples: [
    { title: '3D 机器人', description: '一个可爱的小型 3D 机器人角色。', prompt: '小巧可爱的 3D 机器人，高细节，锐利对焦，8k，照片级真实感' },
    { title: '动漫角色', description: '一幅充满活力的动漫风格角色肖像。', prompt: '1个女孩，动漫风格，关键视觉，充满活力，复杂，高度详细，数字绘画，artstation' },
    { title: '写实肖像', description: '一幅逼真的人物肖像照片。', prompt: '长发女人的照片，85mm 镜头，f/1.8，锐利对焦，戏剧性灯光' },
    { title: '幻想景观', description: '一幅带有发光元素的令人惊叹的幻想景观。', prompt: '魔法森林，幻想，体积光，发光蘑菇，河流，史诗规模，哑光绘画' },
    { title: '超现实艺术', description: '一幅抽象和超现实的数字艺术作品。', prompt: '超现实主义，时钟在树枝上融化，梦幻般，布面油画，萨尔瓦多·达利风格' },
    { title: '赛博朋克城市', description: '一个霓虹灯闪烁的赛博朋克城市夜晚。', prompt: '赛博朋克城市街道，霓虹灯标志，雨天，地面反射，电影感，银翼杀手风格' },
    { title: '与AI伙伴的咖啡馆', description: '一个真人和一个可爱的3D角色一起喝咖啡。', prompt: cafePrompt },
  ],
  whatsNewTitle: "最新功能",
  whatsNewDate: '2025 年 9 月 8 日',
  whatsNewFeatures: [
    { icon: 'VideoIcon', title: 'Veo 视频生成', description: '您现在可以根据文本提示或初始图像生成短视频。只需将模式切换到“视频”即可！' },
    { icon: 'PaintBrushIcon', title: '使用蒙版进行修复', description: '新的“编辑”模式包括一个修复工具。只需在一个区域上绘制蒙版，然后描述您想要更改的内容。' },
    { icon: 'EditIcon', title: '高级图像编辑', description: '在生成图像后，直接在应用程序内裁剪、旋转和调整亮度、对比度等。' },
    { icon: 'SparklesIcon', title: '提示灵感', description: '没有灵感？点击“获取灵感”按钮，获取一系列创意提示，帮助您开始创作。' },
  ],
  whatsNewCloseButton: "开始吧！",
  watermarkSettings: "水印设置",
  uploadWatermark: "上传水印",
  removeWatermark: "移除",
  applyWatermark: "应用水印",
  watermarkDesc: "上传 PNG 文件作为水印使用。",
  watermarkDisclaimer: "水印功能仅适用于图像生成。",
  // Fix: Add missing translations for ApiKeyModal.
  apiKeyModalTitle: '设置您的 API 密钥',
  apiKeyModalDescription: '要使用此应用程序，您需要一个 Google AI API 密钥。请按照以下步骤操作：',
  apiKeyModalSteps: {
    step1: '前往',
    step2: '点击“在新项目中创建 API 密钥”。',
    step3: '复制您生成的 API 密钥。',
    step4: '在项目根目录中创建一个名为 `.env.local` 的文件。',
    step5: '在 `.env.local` 文件中，添加 `API_KEY=\'YOUR_API_KEY\'`，并将 `YOUR_API_KEY` 替换为您复制的密钥。'
  },
  apiKeyModalNote: '注意：您的 API 密钥仅供个人使用。请妥善保管，不要将其提交到版本控制中。',
  error: {
    default: '发生未知错误。请重试。',
    promptOrImage: '请输入提示或上传图像。',
    fileProcessing: '处理文件时发生错误。',
    maxImages: '您最多可以上传 10 张图片。',
    historyReuse: '无法从历史记录中重用图像。',
    invalidKey: '您的 API 密钥无效。请检查后重试。',
    rateLimit: '您已超出 API 配额。请稍后重试。',
    network: '发生网络错误。请检查您的连接。',
    safety: '由于安全政策，该提示被阻止。',
    emptyResponse: 'AI 返回了空响应。请尝试不同的提示。',
    invalidArgument: '请求中存在无效参数。请检查您的提示和设置。',
    apiError: (message) => `发生 API 错误：${message}`,
    videoFinishedNoLink: '视频生成完成，但未提供下载链接。',
    maskEmpty: '请在重新生成前在图像上绘制蒙版。',
    errorWatermarkUpload: "水印上传失败。请选择有效的图像文件。",
  },
  service: {
    combineInstructionWithPrompt: (prompt) => `根据此说明组合上传的图像：“${prompt}”。`,
    combineInstructionNoPrompt: '无缝且创造性地组合上传的图像。',
    editSingleImageWithPrompt: (prompt) => `使用以下说明编辑上传的图像：“${prompt}”。`,
    aspectRatioInstruction: (ratio) => ` 最终图像的宽高比必须为 ${ratio}。`,
    addTextInstruction: (text, font) => ` 将文本“${text}”添加到图像中。使用 ${font} 字体样式。`,
    inpaintInstruction: (prompt) => `在提供的图像中，蒙版的白色区域表示要修复的区域。将该区域替换为：${prompt}`,
    styleInstruction: (style) => `图像的风格应为：${style}。`,
    styleInstructionNoPrompt: (style) => `将图像的风格更改为：${style}。`,
  },
};

export const translations = { en, th, cn };