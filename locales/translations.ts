// Fix: Provide a full implementation for the translations module.
// This resolves module import errors across the application and fixes
// downstream type errors in components that consume the translation object.
import { ArtisticStyle, FontStyle, VideoCharacterGender } from '../types';

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
  videoAdHelperTitle: string;
  videoAdHelperCharacterLabel: string;
  videoAdHelperCharacterMale: string;
  videoAdHelperCharacterFemale: string;
  videoAspectRatioLabel: string;
  videoResolutionLabel: string;
  videoScriptLabel: string;
  videoScriptPlaceholder: string;
  videoAdHelperReview: string;
  videoAdHelperUnboxing: string;
  videoAdHelperLifestyle: string;
  videoAdHelperShowcase: string;
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
  upscale2xButton: string;
  upscale3xButton: string;
  upscaleTooltip: string;
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
    keyNotSet: string;
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
    upscaleInstruction: (factor: string) => string;
    videoCharacter: Record<VideoCharacterGender, string>;
    videoPromptReview: (character: string, ratio: string) => string;
    videoPromptUnboxing: (character: string, ratio: string) => string;
    videoPromptLifestyle: (character: string, ratio: string) => string;
    videoPromptShowcase: (ratio: string) => string;
    generateFullVideoPrompt: (basePrompt: string, aspectRatio: string, resolution: string, script: string) => string;
    adHelperPrompts: {
      studio: string;
      lifestyle: string;
      nature: string;
      luxurious: string;
      productMockup: string;
    };
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
  videoAdHelperTitle: '✨ Video Generation Tools',
  videoAdHelperCharacterLabel: 'Character',
  videoAdHelperCharacterMale: 'Man',
  videoAdHelperCharacterFemale: 'Woman',
  videoAspectRatioLabel: 'Aspect Ratio',
  videoResolutionLabel: 'Resolution',
  videoScriptLabel: 'Voiceover Script (Optional)',
  videoScriptPlaceholder: 'Enter the dialogue or voiceover for the video...',
  videoAdHelperReview: 'Review',
  videoAdHelperUnboxing: 'Unboxing',
  videoAdHelperLifestyle: 'Lifestyle',
  videoAdHelperShowcase: 'Showcase',
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
  upscale2xButton: 'Upscale 2x',
  upscale3xButton: 'Upscale 3x',
  upscaleTooltip: 'Enhance image resolution',
  saveResultTooltip: 'Save to History',
  downloadImageTooltip: 'Download',
  shareImageTooltip: 'Share',
  videoUnsupported: 'Your browser does not support the video tag.',
  downloadVideoButton: 'Download Video',
  imageLoadingMessages: [
    'Brewing pixels...',
    'Warming up the AI...',
    'Upscaling to a higher resolution...',
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
    { title: 'Cute 3D Robot', description: 'A highly detailed macro shot of a cute 3D robot on a workbench, focusing on photorealistic textures and cinematic lighting.', prompt: 'A tiny, adorable 3D robot with a polished white and orange chassis, big expressive glowing blue eyes, sitting on a workbench cluttered with microchips and wires. The scene is macro photography, with a shallow depth of field, sharp focus on the robot, cinematic lighting, and rendered in stunning 8K for photorealistic detail.' },
    { title: 'Anime Knight Character', description: 'A key visual-style digital painting of a female anime knight with intricate armor, set against a dramatic sunset landscape.', prompt: 'A beautiful anime girl with long, flowing silver hair and piercing emerald eyes, wearing an ornate fantasy knight armor with intricate gold engravings. She stands on a cliff overlooking a sunset. The style is a key visual for an anime, with vibrant colors, dynamic composition, and highly detailed digital painting, trending on ArtStation.' },
    { title: 'Realistic Portrait', description: 'An ultra-realistic, golden hour portrait of a woman, shot with a shallow depth of field to create a professional and emotive photograph.', prompt: 'Ultra-realistic photograph of a smiling woman with freckles and long, wavy auburn hair. She is captured in the golden hour light, creating soft shadows and a warm glow on her skin. Shot with a Sony a7 IV, 85mm lens at f/1.8, the focus is razor-sharp on her eyes, with a beautifully blurred background. The lighting is dramatic yet natural.' },
    { title: 'Enchanted Forest Landscape', description: 'An epic matte painting of a magical forest at twilight, featuring a glowing river, giant bioluminescent mushrooms, and volumetric light rays.', prompt: 'An epic, breathtaking matte painting of an enchanted forest at twilight. A crystal-clear river flows through the scene, reflecting the giant, bioluminescent mushrooms that cast an ethereal blue and purple glow. Ancient, moss-covered trees twist towards the sky. Volumetric light rays pierce through the dense canopy, creating a magical and mystical atmosphere. The scale is immense and awe-inspiring.' },
    { title: 'Surrealist Art', description: 'A surrealist painting combining a melting piano in a desert with a green sky, capturing a dreamlike and uncanny atmosphere in the style of Dalí.', prompt: 'A surrealist masterpiece in the style of Salvador Dalí and René Magritte. A grand piano with keys made of melting ice stands in a vast, empty desert under a green sky with two moons. A flock of bowler hats flies in formation like birds. The painting has a dreamlike, uncanny quality, rendered as a hyper-realistic oil on canvas.' },
    { title: 'Cyberpunk City in the Rain', description: 'A cinematic, rainy night in a crowded cyberpunk city, filled with neon signs, flying vehicles, and Blade Runner-inspired dystopian aesthetics.', prompt: 'A cinematic wide shot of a crowded cyberpunk city street at night, drenched in a perpetual downpour. Towering holographic advertisements and vibrant neon signs in Japanese and English reflect off the wet asphalt. Flying vehicles stream between monolithic skyscrapers. The atmosphere is gritty, dystopian, and heavily inspired by Blade Runner, with a cool blue and magenta color palette.' },
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
    keyNotSet: 'The API_KEY is not configured. Please ensure it is set up in your environment variables.',
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
    editSingleImageWithPrompt: (prompt) => `Using the uploaded image as a reference for style, composition, and subject matter, create a new image based on the following description: "${prompt}". The goal is to be inspired by the original, not to replicate or directly alter the person in it.`,
    aspectRatioInstruction: (ratio) => ` The final image must have an aspect ratio of ${ratio}.`,
    addTextInstruction: (text, font) => ` Add the text "${text}" to the image. Use a ${font} font style.`,
    inpaintInstruction: (prompt) => `In the provided image, the white area of the mask indicates the region to be inpainted. Replace that area with: ${prompt}`,
    styleInstruction: (style) => `The style of the image should be: ${style}.`,
    styleInstructionNoPrompt: (style) => `Change the style of the image to: ${style}.`,
    upscaleInstruction: (factor) => `Upscale the provided image by a factor of ${factor}. Enhance details, sharpness, and clarity without adding or changing any elements. Maintain the original art style precisely.`,
    videoCharacter: {
        male: 'a man',
        female: 'a woman'
    },
    videoPromptReview: (character, ratio) => `Cinematic, high-quality video of a happy ${character} enthusiastically reviewing the uploaded product. The setting is a bright, modern studio. The ${character} holds the product, points to its features, and gives a thumbs-up. Close-up shots of the product are included.`,
    videoPromptUnboxing: (character, ratio) => `An unboxing video. A ${character}'s hands open the product packaging elegantly. The camera focuses on the product reveal. The background is a clean, minimalist table. Satisfying ASMR sounds of unwrapping.`,
    videoPromptLifestyle: (character, ratio) => `Lifestyle video showing a ${character} using the uploaded product in a daily life scene. For example, if it's a coffee mug, show them enjoying coffee on a sunny balcony. If it's a cosmetic, show them applying it in a beautiful bathroom. The mood is natural and relatable.`,
    videoPromptShowcase: (ratio) => `A dynamic, professional showcase of the uploaded product. Slow-motion shots, rotating views of the product against a dramatic, dark background. Light sweeps across the product to highlight its details. No people are visible.`,
    generateFullVideoPrompt: (basePrompt, aspectRatio, resolution, script) => {
        let fullPrompt = basePrompt;
        fullPrompt += ` The final video must have an aspect ratio of ${aspectRatio}.`;
        fullPrompt += ` The video should be rendered in high-quality ${resolution}.`;
        if (script.trim()) {
            fullPrompt += ` The video must include a clear voiceover speaking the following words: "${script.trim()}"`;
        }
        return fullPrompt;
    },
    adHelperPrompts: {
      studio: `Place the uploaded product on a clean white geometric pedestal in a softly lit studio. The background is a simple pastel color like cream or light blue. Create soft shadows under the product to add depth. Make the image look elegant, minimal, and modern. Professional product photography style, 8k resolution.`,
      lifestyle: `Create a realistic image where the uploaded product is being used in daily life. For instance, if it's sunscreen, place it on a towel by a sunny swimming pool. If it's a coffee mug, have someone holding it in a cozy cafe. Emphasize a natural and relatable look. Beautiful lighting as if shot during the Golden Hour. Lifestyle photography style.`,
      nature: `Arrange the uploaded product amidst beautiful natural elements like lush green leaves, fresh flowers, or on a moss-covered rock. Sunlight filters through the leaves, creating patterns on the product. Evoke a sense of freshness, organic connection, and nature. Ideal for health or beauty products.`,
      luxurious: `Present the uploaded product in a luxurious and stunning scene, such as on a dark silk background with thin smoke or fog swirling around. A spotlight shines directly on the product to create sharp contrast, making it look prominent, classy, and mysterious. Luxurious product advertising photography style.`,
      productMockup: `Ultra-realistic advertising style, a giant golden tube of "Pantene Pro-V 3 Minute Miracle Daily Moisture Renewal Conditioner" standing majestically in the middle of a serene lake surrounded by pine forests and snow-capped mountains in the background, the tube is overgrown with green vines and leaves at its base, two realistic bears standing near the foreground on both sides, rocks and grass on the ground, white flowers blooming around, a hummingbird flying near the top left, other birds soaring across a bright blue sky with scattered clouds, soft sunlight illuminating the scene, magical fantasy atmosphere, hyper-detailed textures, 4K, vertical aspect ratio 4:5.`
    },
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
  videoAdHelperTitle: '✨ เครื่องมือสร้างวิดีโอ',
  videoAdHelperCharacterLabel: 'ตัวละคร',
  videoAdHelperCharacterMale: 'ผู้ชาย',
  videoAdHelperCharacterFemale: 'ผู้หญิง',
  videoAspectRatioLabel: 'อัตราส่วนวิดีโอ',
  videoResolutionLabel: 'ความละเอียด',
  videoScriptLabel: 'สคริปต์เสียงพากย์ (ถ้ามี)',
  videoScriptPlaceholder: 'ป้อนบทสนทนาหรือเสียงพากย์สำหรับวิดีโอ...',
  videoAdHelperReview: 'รีวิวสินค้า',
  videoAdHelperUnboxing: 'แกะกล่อง',
  videoAdHelperLifestyle: 'ไลฟ์สไตล์',
  videoAdHelperShowcase: 'โชว์เคส',
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
  upscale2xButton: 'ขยาย 2x',
  upscale3xButton: 'ขยาย 3x',
  upscaleTooltip: 'เพิ่มความละเอียดภาพ',
  saveResultTooltip: 'บันทึกลงประวัติ',
  downloadImageTooltip: 'ดาวน์โหลด',
  shareImageTooltip: 'แชร์',
  videoUnsupported: 'เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ',
  downloadVideoButton: 'ดาวน์โหลดวิดีโอ',
  imageLoadingMessages: [
    'กำลังปรุงแต่งพิกเซล...',
    'กำลังวอร์มเครื่อง AI...',
    'กำลังขยายภาพให้มีความละเอียดสูงขึ้น...',
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
    { title: 'หุ่นยนต์ 3 มิติสุดน่ารัก', description: 'ภาพถ่ายมาโครที่มีรายละเอียดสูงของหุ่นยนต์ 3 มิติสุดน่ารักบนโต๊ะทำงาน เน้นพื้นผิวที่สมจริงและแสงสไตล์ภาพยนตร์', prompt: 'หุ่นยนต์ 3 มิติขนาดเล็กน่ารักน่าเอ็นดู มีโครงสีขาวส้มขัดเงา ดวงตาเรืองแสงสีฟ้าขนาดใหญ่ที่แสดงอารมณ์ได้ นั่งอยู่บนโต๊ะทำงานที่เต็มไปด้วยไมโครชิปและสายไฟ ฉากนี้เป็นภาพถ่ายมาโคร มีระยะชัดลึกที่ตื้น โฟกัสคมชัดที่ตัวหุ่นยนต์ แสงสไตล์ภาพยนตร์ และเรนเดอร์ในคุณภาพ 8K ที่น่าทึ่งเพื่อให้ได้รายละเอียดที่สมจริง' },
    { title: 'ตัวละครอัศวินอนิเมะ', description: 'ภาพวาดดิจิทัลสไตล์ Key Visual ของอัศวินหญิงอนิเมะในชุดเกราะที่ซับซ้อน ตั้งอยู่บนพื้นหลังทิวทัศน์พระอาทิตย์ตกที่น่าทึ่ง', prompt: 'สาวอนิเมะสวยผมยาวสีเงินสลวยและดวงตาสีมรกตที่เฉียบคม สวมชุดเกราะอัศวินแฟนตาซีหรูหราพร้อมการแกะสลักสีทองที่ซับซ้อน เธอยืนอยู่บนหน้าผาที่มองเห็นพระอาทิตย์ตก สไตล์เป็น Key Visual สำหรับอนิเมะ มีสีสันสดใส องค์ประกอบแบบไดนามิก และภาพวาดดิจิทัลที่มีรายละเอียดสูง กำลังเป็นที่นิยมใน ArtStation' },
    { title: 'ภาพถ่ายบุคคลสมจริง', description: 'ภาพถ่ายบุคคลของหญิงสาวในช่วงเวลา Golden Hour ที่สมจริงอย่างยิ่ง ถ่ายด้วยระยะชัดลึกที่ตื้นเพื่อสร้างภาพถ่ายที่เป็นมืออาชีพและสื่ออารมณ์', prompt: 'ภาพถ่ายที่สมจริงอย่างยิ่งของหญิงสาวที่ยิ้มแย้มมีกระและผมยาวหยักศกสีน้ำตาลแดง เธอถูกถ่ายในแสงช่วง Golden Hour ทำให้เกิดเงาที่นุ่มนวลและแสงสีทองที่อบอุ่นบนผิวของเธอ ถ่ายด้วยกล้อง Sony a7 IV เลนส์ 85mm ที่ f/1.8 โฟกัสคมกริบที่ดวงตาของเธอ พร้อมพื้นหลังที่เบลออย่างสวยงาม แสงดูน่าทึ่งแต่เป็นธรรมชาติ' },
    { title: 'ทิวทัศน์ป่ามนตรา', description: 'ภาพวาด Matte Painting สุดอลังการของป่ามหัศจรรย์ในยามพลบค่ำ มีแม่น้ำเรืองแสง เห็ดยักษ์เรืองแสง และลำแสงปริมาตร', prompt: 'ภาพวาด Matte Painting ที่ยิ่งใหญ่และน่าทึ่งของป่าต้องมนต์ในยามพลบค่ำ แม่น้ำใสราวคริสตัลไหลผ่านฉาก สะท้อนภาพเห็ดยักษ์เรืองแสงที่เปล่งแสงสีฟ้าและสีม่วงราวกับมีชีวิต ต้นไม้โบราณที่ปกคลุมด้วยมอสบิดตัวสูงเสียดฟ้า ลำแสงปริมาตรส่องทะลุผ่านเรือนยอดไม้ที่หนาแน่น สร้างบรรยากาศที่มหัศจรรย์และลึกลับ สเกลภาพดูยิ่งใหญ่และน่าเกรงขาม' },
    { title: 'ศิลปะเหนือจริง', description: 'ภาพวาดแนวเหนือจริงที่ผสมผสานเปียโนที่กำลังละลายในทะเลทรายกับท้องฟ้าสีเขียว ถ่ายทอดบรรยากาศที่เหมือนฝันและแปลกประหลาดในสไตล์ของดาลี', prompt: 'ผลงานชิ้นเอกแนวเหนือจริงในสไตล์ของ Salvador Dalí และ René Magritte เปียโนแกรนด์ที่มีคีย์บอร์ดทำจากน้ำแข็งละลายตั้งอยู่ในทะเลทรายอันกว้างใหญ่ว่างเปล่าใต้ท้องฟ้าสีเขียวที่มีดวงจันทร์สองดวง ฝูงหมวกทรงกลมบินเป็นรูปขบวนเหมือนนก ภาพวาดมีคุณภาพเหมือนฝันและแปลกประหลาด เรนเดอร์เป็นภาพสีน้ำมันบนผ้าใบที่สมจริงอย่างยิ่ง' },
    { title: 'เมืองไซเบอร์พังก์ในสายฝน', description: 'ภาพมุมกว้างสไตล์ภาพยนตร์ของเมืองไซเบอร์พังก์ที่แออัดในคืนที่ฝนตก เต็มไปด้วยป้ายนีออน ยานพาหนะบินได้ และสุนทรียศาสตร์แบบดิสโทเปียที่ได้รับแรงบันดาลใจจาก Blade Runner', prompt: 'ภาพมุมกว้างสไตล์ภาพยนตร์ของถนนในเมืองไซเบอร์พังก์ที่แออัดในเวลากลางคืน เปียกโชกไปด้วยสายฝนที่ไม่หยุดตก โฆษณาโฮโลแกรมสูงตระหง่านและป้ายนีออนสีสันสดใสในภาษาญี่ปุ่นและอังกฤษสะท้อนบนยางมะตอยที่เปียกชื้น ยานพาหนะบินได้แล่นผ่านระหว่างตึกระฟ้าขนาดมหึมา บรรยากาศดูดิบเถื่อน เป็นดิสโทเปีย และได้รับแรงบันดาลใจอย่างมากจาก Blade Runner พร้อมโทนสีฟ้าและม่วงแดงที่เยือกเย็น' },
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
    keyNotSet: 'API_KEY ยังไม่ได้ตั้งค่า กรุณาตรวจสอบว่าได้ตั้งค่าไว้ใน environment variables แล้ว',
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
    editSingleImageWithPrompt: (prompt) => `ใช้รูปภาพที่อัปโหลดเป็นข้อมูลอ้างอิงสำหรับสไตล์ องค์ประกอบ และวัตถุ เพื่อสร้างรูปภาพใหม่ตามคำอธิบายต่อไปนี้: "${prompt}" เป้าหมายคือการได้รับแรงบันดาลใจจากภาพต้นฉบับ ไม่ใช่การทำซ้ำหรือเปลี่ยนแปลงบุคคลในภาพโดยตรง`,
    aspectRatioInstruction: (ratio) => ` รูปภาพสุดท้ายต้องมีอัตราส่วน ${ratio}`,
    addTextInstruction: (text, font) => ` เพิ่มข้อความ "${text}" ลงในรูปภาพ ใช้ฟอนต์สไตล์ ${font}`,
    inpaintInstruction: (prompt) => `ในรูปภาพที่ให้มา พื้นที่สีขาวของมาสก์คือบริเวณที่จะทำการ inpaint แทนที่บริเวณนั้นด้วย: ${prompt}`,
    styleInstruction: (style) => `สไตล์ของรูปภาพควรเป็น: ${style}`,
    styleInstructionNoPrompt: (style) => `เปลี่ยนสไตล์ของรูปภาพเป็น: ${style}`,
    upscaleInstruction: (factor) => `ขยายขนาดรูปภาพที่ให้มา ${factor} เท่า เพิ่มรายละเอียด ความคมชัด โดยไม่เพิ่มหรือเปลี่ยนแปลงองค์ประกอบใดๆ คงสไตล์ศิลปะดั้งเดิมไว้ทุกประการ`,
    videoCharacter: {
        male: 'ผู้ชาย',
        female: 'ผู้หญิง'
    },
    videoPromptReview: (character, ratio) => `วิดีโอคุณภาพสูงสไตล์ภาพยนตร์ของ${character}ที่กำลังรีวิวสินค้าที่อัปโหลดอย่างกระตือรือร้น ในฉากสตูดิโอที่สว่างและทันสมัย ${character}กำลังถือสินค้า ชี้ไปที่คุณสมบัติต่างๆ และยกนิ้วให้ มีช็อตโคลสอัพของสินค้าประกอบ`,
    videoPromptUnboxing: (character, ratio) => `วิดีโอแกะกล่อง มือของ${character}กำลังเปิดกล่องสินค้าอย่างสวยงาม กล้องโฟกัสไปที่การเปิดตัวสินค้า พื้นหลังเป็นโต๊ะที่เรียบง่ายสะอาดตา มีเสียง ASMR ของการแกะห่อที่น่าพึงพอใจ`,
    videoPromptLifestyle: (character, ratio) => `วิดีโอไลฟ์สไตล์ที่แสดง${character}กำลังใช้สินค้าที่อัปโหลดในฉากชีวิตประจำวัน เช่น ถ้าเป็นแก้วกาแฟ ให้แสดงพวกเขากำลังดื่มกาแฟที่ระเบียงในวันแดดจ้า ถ้าเป็นเครื่องสำอาง ให้แสดงพวกเขากำลังทาในห้องน้ำที่สวยงาม บรรยากาศเป็นธรรมชาติและเข้าถึงง่าย`,
    videoPromptShowcase: (ratio) => `วิดีโอโชว์สินค้าแบบมืออาชีพและไดนามิก มีช็อตสโลว์โมชั่น มุมมองหมุนรอบสินค้าบนพื้นหลังสีเข้มที่น่าทึ่ง มีแสงกวาดผ่านสินค้าเพื่อเน้นรายละเอียด ไม่เห็นคนในวิดีโอ`,
    generateFullVideoPrompt: (basePrompt, aspectRatio, resolution, script) => {
        let fullPrompt = basePrompt;
        fullPrompt += ` วิดีโอสุดท้ายต้องมีอัตราส่วนภาพ ${aspectRatio}`;
        fullPrompt += ` วิดีโอควรรเรนเดอร์ด้วยความละเอียดสูง ${resolution}`;
        if (script.trim()) {
            fullPrompt += ` วิดีโอต้องมีเสียงพากย์ที่ชัดเจนพูดคำต่อไปนี้: "${script.trim()}"`;
        }
        return fullPrompt;
    },
    adHelperPrompts: {
      studio: `วางสินค้าที่อัปโหลดบนแท่นโชว์สินค้าทรงเรขาคณิตสีขาวสะอาดตาในสตูดิโอที่มีแสงสว่างนุ่มนวล พื้นหลังเป็นสีพาสเทลเรียบๆ เช่น สีครีมหรือสีฟ้าอ่อน สร้างเงาที่นุ่มนวลใต้สินค้าเพื่อเพิ่มความลึก ทำให้ภาพดูหรูหรา มินิมอล และทันสมัย สไตล์ภาพถ่ายสินค้ามืออาชีพ ความละเอียด 8k`,
      lifestyle: `สร้างภาพเสมือนจริงที่สินค้าที่อัปโหลดกำลังถูกใช้งานในชีวิตประวัน เช่น หากเป็นครีมกันแดด ให้วางอยู่บนผ้าเช็ดตัวริมสระว่ายน้ำที่มีแดดสดใส หรือหากเป็นแก้วกาแฟ ให้มีคนกำลังถืออยู่ในร้านกาแฟบรรยากาศอบอุ่น เน้นให้ภาพดูเป็นธรรมชาติและเข้าถึงง่าย แสงสวยงามเหมือนถ่ายตอน Golden Hour สไตล์ภาพถ่ายไลฟ์สไตล์`,
      nature: `จัดวางสินค้าที่อัปโหลดท่ามกลางองค์ประกอบจากธรรมชาติที่สวยงาม เช่น ใบไม้เขียวชอุ่ม ดอกไม้สด หรือบนก้อนหินที่มีมอสเกาะอยู่ แสงแดดส่องลอดผ่านใบไม้ลงมาสร้างลวดลายบนสินค้า ให้ความรู้สึกสดชื่น ออร์แกนิก และเชื่อมโยงกับธรรมชาติ เหมาะสำหรับสินค้าเพื่อสุขภาพหรือความงาม`,
      luxurious: `นำเสนอสินค้าที่อัปโหลดในฉากที่ดูหรูหราและน่าทึ่ง เช่น บนพื้นหลังผ้าไหมสีเข้ม มีควันหรือหมอกบางๆ ลอยอยู่รอบๆ แสงสปอตไลท์ส่องลงมาที่ตัวสินค้าโดยตรงเพื่อสร้างคอนทราสต์ที่ชัดเจน ทำให้สินค้าดูโดดเด่น มีระดับ และน่าค้นหา สไตล์ภาพถ่ายโฆษณาสินค้าหรู`,
      productMockup: `Ultra-realistic advertising style, a giant golden tube of "Pantene Pro-V 3 Minute Miracle Daily Moisture Renewal Conditioner" standing majestically in the middle of a serene lake surrounded by pine forests and snow-capped mountains in the background, the tube is overgrown with green vines and leaves at its base, two realistic bears standing near the foreground on both sides, rocks and grass on the ground, white flowers blooming around, a hummingbird flying near the top left, other birds soaring across a bright blue sky with scattered clouds, soft sunlight illuminating the scene, magical fantasy atmosphere, hyper-detailed textures, 4K, vertical aspect ratio 4:5.`
    },
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
  videoAdHelperTitle: '✨ 视频生成工具',
  videoAdHelperCharacterLabel: '角色',
  videoAdHelperCharacterMale: '男性',
  videoAdHelperCharacterFemale: '女性',
  videoAspectRatioLabel: '视频宽高比',
  videoResolutionLabel: '分辨率',
  videoScriptLabel: '画外音脚本（可选）',
  videoScriptPlaceholder: '输入视频的对话或画外音...',
  videoAdHelperReview: '产品评测',
  videoAdHelperUnboxing: '开箱',
  videoAdHelperLifestyle: '生活方式',
  videoAdHelperShowcase: '产品展示',
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
  upscale2xButton: '放大 2 倍',
  upscale3xButton: '放大 3 倍',
  upscaleTooltip: '提高图像分辨率',
  saveResultTooltip: '保存到历史记录',
  downloadImageTooltip: '下载',
  shareImageTooltip: '分享',
  videoUnsupported: '您的浏览器不支持视频标签。',
  downloadVideoButton: '下载视频',
  imageLoadingMessages: [
    '正在酝酿像素...',
    '正在预热 AI...',
    '正在放大到更高分辨率...',
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
    { title: '可爱的3D机器人', description: '一张高细节的微距照片，拍摄了一个可爱的工作台上的3D机器人，注重逼真的纹理和电影般的灯光效果。', prompt: '一个微小、可爱的3D机器人，拥有抛光的白色和橙色底盘，大而富有表现力的蓝色发光眼睛，坐落在一个堆满微芯片和电线的凌乱工作台上。场景采用微距摄影，景深较浅，焦点清晰地对准机器人，采用电影般的灯光，并以惊人的8K分辨率渲染，呈现出照片般的真实细节。' },
    { title: '动漫骑士角色', description: '一张关键视觉风格的数字绘画，描绘了一位穿着复杂盔甲的女性动漫骑士，背景是戏剧性的日落景观。', prompt: '一位美丽的动漫女孩，拥有飘逸的银色长发和锐利的翠绿色眼睛，穿着华丽的奇幻骑士盔甲，上面有复杂的金色雕刻。她站在悬崖上，俯瞰着日落。风格是动漫的关键视觉图，色彩鲜艳，构图动态，并且是高度精细的数字绘画，在ArtStation上很受欢迎。' },
    { title: '写实肖像照', description: '一张极其逼真的黄金时刻人像照片，采用浅景深拍摄，营造出专业且富有情感的摄影作品。', prompt: '一张极其逼真的照片，拍摄了一位微笑的女士，她有雀斑和长长的赤褐色波浪卷发。她在黄金时刻的光线下被捕捉，皮肤上形成了柔和的阴影和温暖的光晕。使用索尼a7 IV相机，85mm镜头，f/1.8光圈拍摄，焦点锐利地对准她的眼睛，背景模糊优美。灯光既具戏剧性又自然。' },
    { title: '魔法森林景观', description: '一幅史诗级的数字绘景作品，描绘了黄昏时分的魔法森林，有发光的河流、巨大的生物发光蘑菇和体积光束。', prompt: '一幅史诗般、令人叹为观止的数字绘景，描绘了黄昏时分的魔法森林。一条清澈如水晶的河流穿过场景，倒映着巨大的生物发光蘑菇，投射出 ethereal 的蓝色和紫色光芒。古老、长满苔藓的树木扭曲着伸向天空。体积光束穿透茂密的树冠，营造出一种神奇而神秘的氛围。规模宏大，令人敬畏。' },
    { title: '超现实主义艺术', description: '一幅超现实主义画作，将融化的钢琴置于沙漠之中，配以绿色的天空，捕捉了达利风格的梦幻和怪诞氛围。', prompt: '一幅萨尔瓦多·达利和雷内·马格利特风格的超现实主义杰作。一架琴键由融化的冰块制成的三角钢琴，矗立在广阔、空旷的沙漠中，绿色的天空下有两轮月亮。一群圆顶礼帽像鸟儿一样编队飞行。这幅画具有梦幻般的、怪诞的特质，以超写实的布面油画形式呈现。' },
    { title: '雨中赛博朋克城市', description: '一个电影般的宽镜头，拍摄了雨夜中拥挤的赛博朋克城市，充满了霓虹灯、飞行器和受《银翼杀手》启发的反乌托邦美学。', prompt: '一个电影般的宽镜头，拍摄了夜晚拥挤的赛博朋克城市街道，被连绵不断的倾盆大雨浸透。高耸的全息广告和鲜艳的日语及英语霓虹灯标志在湿漉漉的柏油路上反射。飞行器在巨大的摩天大楼之间穿梭。气氛坚韧、反乌托邦，深受《银翼杀手》的启发，采用冷色调的蓝色和品红色调。' },
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
    keyNotSet: 'API_KEY 未配置。请确保它已在您的环境变量中设置。',
    invalidKey: '您的 API 密钥无效。请检查后重试。',
    rateLimit: '您已超出 API 配额。请稍后重试。',
    network: '发生网络错误。请检查您的连接。',
    safety: '由于安全政策，该提示被阻止。',
    emptyResponse: 'AI 返回了空响应。请尝试其他提示。',
    invalidArgument: '请求中存在无效参数。请检查您的提示和设置。',
    apiError: (message) => `发生 API 错误：${message}`,
    videoFinishedNoLink: '视频生成完成，但未提供下载链接。',
    maskEmpty: '请先在图像上绘制蒙版再重新生成。',
    errorWatermarkUpload: '上传水印失败。请选择有效的图像文件。',
  },
  service: {
    combineInstructionWithPrompt: (prompt) => `根据此说明合并上传的图像：“${prompt}”。`,
    combineInstructionNoPrompt: '无缝且创造性地合并上传的图像。',
    editSingleImageWithPrompt: (prompt) => `以上传的图片为风格、构图和主题的参考，根据以下描述创作一幅新图片：“${prompt}”。目标是从原作中获得灵感，而不是复制或直接修改其中的人物。`,
    aspectRatioInstruction: (ratio) => ` 最终图像的宽高比必须为 ${ratio}。`,
    addTextInstruction: (text, font) => ` 将文本“${text}”添加到图像中。使用 ${font} 字体样式。`,
    inpaintInstruction: (prompt) => `在提供的图像中，蒙版的白色区域表示要修复的区域。请将该区域替换为：${prompt}`,
    styleInstruction: (style) => `图像的风格应为：${style}。`,
    styleInstructionNoPrompt: (style) => `将图像的风格更改为：${style}。`,
    upscaleInstruction: (factor) => `将提供的图像放大 ${factor}。在不添加或更改任何元素的情况下，增强细节、清晰度和锐度。精确保持原始艺术风格。`,
    videoCharacter: {
        male: '一名男性',
        female: '一名女性'
    },
    videoPromptReview: (character, ratio) => `电影级高品质视频，展示一位快乐的${character}热情地评测上传的产品。场景是一个明亮的现代化工作室。${character}手持产品，指向其功能，并竖起大拇指。视频中包含产品的特写镜头。`,
    videoPromptUnboxing: (character, ratio) => `一个开箱视频。${character}的双手优雅地打开产品包装。镜头聚焦于产品揭晓的瞬间。背景是一张干净、简约的桌子。伴有令人舒适的开箱 ASMR 声音。`,
    videoPromptLifestyle: (character, ratio) => `生活方式视频，展示${character}在日常生活场景中使用上传的产品。例如，如果是一个咖啡杯，展示他们在阳光明媚的阳台上享用咖啡。如果是一款化妆品，展示他们在漂亮的浴室里使用。氛围自然、亲切。`,
    videoPromptShowcase: (ratio) => `一个动感、专业的上传产品展示视频。慢动作镜头，产品在引人注目的深色背景下旋转展示。光线扫过产品，突出其细节。视频中无人出现。`,
    generateFullVideoPrompt: (basePrompt, aspectRatio, resolution, script) => {
        let fullPrompt = basePrompt;
        fullPrompt += ` 最终视频的宽高比必须为 ${aspectRatio}。`;
        fullPrompt += ` 视频应以高质量 ${resolution} 渲染。`;
        if (script.trim()) {
            fullPrompt += ` 视频必须包含清晰的画外音，说出以下文字：“${script.trim()}”`;
        }
        return fullPrompt;
    },
    adHelperPrompts: {
      studio: '将上传的产品放置在光线柔和的工作室中的干净白色几何展台上。背景是柔和的纯色，如奶油色或淡蓝色。在产品下方创造柔和的阴影以增加深度。使图像看起来优雅、简约、现代。专业的商业产品摄影风格，8k分辨率。',
      lifestyle: '创建一个逼真的场景，展示上传的产品在日常生活中的使用情况。例如，如果是防晒霜，就把它放在阳光明媚的游泳池边的毛巾上；如果是一个咖啡杯，就让一个人在温馨的咖啡馆里拿着它。强调图像的自然和亲和力。光线优美，如同在黄金时刻拍摄。生活方式摄影风格。',
      nature: '将上传的产品置于美丽的自然元素之中，例如翠绿的叶子、鲜艳的花朵，或长满苔藓的岩石上。阳光透过树叶洒下，在产品上形成斑驳的光影。给人一种清新、有机的感觉，并与自然相连。适合健康或美容产品。',
      luxurious: '在一个奢华而引人注目的场景中展示上传的产品，例如在深色丝绸背景上，周围飘着薄薄的烟雾。聚光灯直接照射在产品上，形成强烈的对比，使产品脱颖而出，显得高贵而神秘。奢华产品广告摄影风格。',
      productMockup: '超现实广告风格，一个巨大的金色“潘婷Pro-V 3分钟奇迹日常水分更新护发素”管状物雄伟地矗立在宁静的湖中央，背景是松树林和雪山。管状物底部长满了绿色的藤蔓和叶子，前景两侧站着两只逼真的熊，地上有岩石和草地，周围盛开着白色的花朵，左上角有一只蜂鸟在飞翔，其他鸟儿在明亮的蓝天和零散的云朵中翱翔，柔和的阳光照亮了整个场景，神奇的幻想氛围，超精细的纹理，4K，垂直宽高比4:5。'
    },
  },
};

export const translations = { en, th, cn };