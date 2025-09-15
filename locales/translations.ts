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

export interface HowToUseSection {
    title: string;
    content: string;
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
  promptArsenalLink: string;
  poseHelperTitle: string;
  poseHelperCloseUp: string;
  poseHelperFullBody: string;
  poseHelperLowAngle: string;
  poseHelperHighAngle: string;
  poseHelperProfile: string;
  poseHelperEyeLevel: string;
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
  apiKeyStatusLabel: string;
  apiKeyStatusConnected: string;
  apiKeyStatusNotSet: string;
  apiKeyEnterHere: string;
  apiKeySaveButton: string;
  apiKeyRemoveButton: string;
  apiKeyTestButton: string;
  apiKeyTestingButton: string;
  apiKeyTestSuccess: string;
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
  floatingMenu: {
    howToUse: string;
    facebookPage: string;
  };
  howToUseModal: {
    title: string;
    closeButton: string;
    sections: HowToUseSection[];
  };
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
    poseHelperPrompts: {
      closeUp: string;
      fullBody: string;
      lowAngle: string;
      highAngle: string;
      profile: string;
      eyeLevel: string;
    };
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
  createdBy: 'Created with ❤️ by Candelaz Kengza. Support with a coffee donation at FB: Candelaz Kengza',
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
  inspiringPromptsButton: 'Let Me Find Ideas',
  promptArsenalLink: 'AI Prompt Arsenal',
  poseHelperTitle: '✨ Pose & Angle Helper',
  poseHelperCloseUp: 'Close-up',
  poseHelperFullBody: 'Full Body',
  poseHelperLowAngle: 'Low Angle',
  poseHelperHighAngle: 'High Angle',
  poseHelperProfile: 'Profile',
  poseHelperEyeLevel: 'Eye Level',
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
    '3D': '3D',
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
    camera: 'Camera Angles',
    lens: 'Lens Types',
    combining: 'Combining Prompts',
    editing: 'Image Editing',
  },
  promptExamples: [
    { title: 'Cute 3D Robot', description: 'A highly detailed macro shot of a cute 3D robot on a workbench, focusing on photorealistic textures and cinematic lighting.', prompt: 'A tiny, adorable 3D robot with a polished white and orange chassis, big expressive glowing blue eyes, sitting on a workbench cluttered with microchips and wires. The scene is macro photography, with a shallow depth of field, sharp focus on the robot, cinematic lighting, and rendered in stunning 8K for photorealistic detail.' },
    { title: 'Anime Knight Character', description: 'A key visual-style digital painting of a female anime knight with intricate armor, set against a dramatic sunset landscape.', prompt: 'A beautiful anime girl with long, flowing silver hair and piercing emerald eyes, wearing an ornate fantasy knight armor with intricate gold engravings. She stands on a cliff overlooking a sunset. The style is a key visual for an anime, with vibrant colors, dynamic composition, and highly detailed digital painting, trending on ArtStation.' },
    { title: 'Realistic Portrait', description: 'An ultra-realistic, golden hour portrait of a woman, shot with a shallow depth of field to create a professional and emotive photograph.', prompt: 'Ultra-realistic photograph of a smiling woman with freckles and long, wavy auburn hair. She is captured in the golden hour light, creating soft shadows and a warm glow on her skin. Shot with a Sony a7 IV, 85mm lens at f/1.8, the focus is razor-sharp on her eyes, with a beautifully blurred background. The lighting is dramatic yet natural.' },
    { title: 'Enchanted Forest Landscape', description: 'An epic matte painting of a magical forest at twilight, featuring a glowing river, giant bioluminescent mushrooms, and volumetric light rays.', prompt: 'An epic, breathtaking matte painting of an enchanted forest at twilight. A crystal-clear river flows through the scene, reflecting the giant, bioluminescent mushrooms that cast an ethereal blue and purple glow. Ancient, moss-covered trees twist towards the sky. Volumetric light rays pierce through the dense canopy, creating a magical and mystical atmosphere. The scale is immense and awe-inspiring.' },
    { title: 'Surrealist Art', description: 'A surrealist painting combining a melting piano in a desert with a green sky, capturing a dreamlike and uncanny atmosphere in the style of Dalí.', prompt: 'A surrealist masterpiece in the style of Salvador Dalí and René Magritte. A grand piano with keys made of melting ice stands in a vast, empty desert under a green sky with two moons. A flock of bowler hats flies in formation like birds. The painting has a dreamlike, uncanny quality, rendered as a hyper-realistic oil on canvas.' },
    { title: 'Cyberpunk City in the Rain', description: 'A cinematic, rainy night in a crowded cyberpunk city, filled with neon signs, flying vehicles, and Blade Runner-inspired dystopian aesthetics.', prompt: 'A cinematic wide shot of a crowded cyberpunk city street at night, drenched in a perpetual downpour. Towering holographic advertisements and vibrant neon signs in Japanese and English reflect off the wet asphalt. Flying vehicles stream between monolithic skyscrapers. The atmosphere is gritty, dystopian, and heavily inspired by Blade Runner, with a cool blue and magenta color palette.' },
    { title: 'Café with AI buddy', description: 'A realistic person and a cute 3D character having coffee together.', prompt: cafePrompt },
    { title: 'Close-up / Headshot', description: "Clearly focuses on the subject's face and emotions. Ideal for portraits that aim to convey feelings.", prompt: 'A close-up portrait of...' },
    { title: 'Full-body / Wide shot', description: "Shows the entire subject along with their surroundings, giving a full view of the scene and the subject's posture.", prompt: 'A full-body portrait of...' },
    { title: 'Low-angle shot', description: 'Shot from a low angle looking up, making the subject appear taller, more powerful, and imposing.', prompt: 'A low-angle shot of...' },
    { title: 'High-angle shot', description: 'Shot from a high angle looking down, making the subject appear smaller, gentler, or vulnerable.', prompt: 'A high-angle shot of...' },
    { title: 'Profile shot', description: 'Shot from the side of the subject, emphasizing the facial profile and contours.', prompt: 'A profile shot of...' },
    { title: 'Eye-level shot', description: 'The most natural perspective, as if viewing with normal eyes, making it easy for the audience to connect with the subject.', prompt: 'An eye-level shot of...' },
    { title: '85mm Portrait Lens', description: 'Creates a beautiful shallow depth of field (bokeh) effect, making the subject stand out. Perfect for portraits.', prompt: '..., shot with an 85mm portrait lens, f/1.8' },
    { title: '50mm Lens (Normal)', description: 'Provides a perspective very close to the human eye, making images look natural and realistic.', prompt: '..., shot with a 50mm lens, f/2.8' },
    { title: 'Macro Lens', description: 'For extreme close-up photography to emphasize tiny details invisible to the naked eye, like insects or water droplets.', prompt: 'A macro lens shot of...' },
    { title: 'Combine Prompts for Precision', description: 'Want the most detailed and specific image? Combine all your instructions into one powerful prompt!', prompt: 'A realistic close-up portrait of a young woman with sharp, beautiful eyes and a gentle smile, amidst the golden evening light. Shot with an 85mm portrait lens for a soft bokeh effect, emphasizing her flawless skin. Vertical orientation.' },
    { title: 'Add Accessories', description: "Enhance your subject's look by adding small, elegant accessories.", prompt: 'Add a small, beautiful necklace to the person in the picture.' },
    { title: 'Change the Background', description: 'Swap out the background of your image to create a completely new mood or setting.', prompt: 'Change the blurry background to a minimalist studio with soft lighting.' },
    { title: 'Adjust Lighting & Shadows', description: 'Modify the light and shadows to give your image a softer, more professional look.', prompt: 'Soften the shadows on the face to make them look smoother.' },
    { title: 'Pokémon Trainer', description: "Transform yourself into a Pokémon trainer! This prompt lets you specify your favorite Pokémon, your outfit, and a dramatic background for a personalized adventure.", prompt: "Create image of me as pokemon trainer with a pokemon [celebi] on my shoulder. Make me wearing a red and blue pokemon trainer cap. Make me wearing cool futuristic yellow hoodie and blue jeans and white sneaker. Make me holding a pokeball. Background put me in green jungle with low lighting. Style realistic." },
    { title: 'Anime Action Figure', description: "Create a hyper-realistic studio photograph of yourself as a premium anime-style action figure, complete with dynamic posing, detailed outfits, and a collector's gallery background.", prompt: "An ultra-realistic studio photograph of a premium Anime-styled action figure. Featuring full-body of a fit Southeast Asian male with salt-and-pepper hair and a neat beard, with the exact face from the uploaded photo, dressed in Demon Slayer Tanjiro Kamados's outfit. The figure is posed dinamically heroic holding his sword, smiling sinisterly, standing on a thick polished square chrome base engraved with 'Demon Slayer'. Behind him stands a towering (Daki) figure with meticulous sculpted details, larger and more imposing. The entire figure and base are fully visible within the frame, placed on top of a clear glass display showcase. The background is filled with rows of anime figures inside brightly illuminated glass display shelves, creating the atmosphere of a premium anime collectible gallery. Bright clean studio lighting, sharp focus, seamless reflections, glossy finish. Vertical 8K framing." },
    { title: 'iPhone 17 Launch Day', description: 'Generate an image of a happy customer holding the new orange iPhone 17 Pro Max on its launch day inside a modern, brightly lit store.', prompt: "Using the person in the reference image, show him holding an orange iPhone 17 Pro Max in his hand. He is smiling happily, has a small goatee, and black hair. The setting is a bright, modern store with a 'Day One' sign and product shelves in the background." }
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
  apiKeyStatusLabel: "API Key Status",
  apiKeyStatusConnected: "Connected",
  apiKeyStatusNotSet: "Set API Key",
  apiKeyEnterHere: "Enter your Google AI API Key",
  apiKeySaveButton: "Save Key",
  apiKeyRemoveButton: "Disconnect Key",
  apiKeyTestButton: "Test Connection",
  apiKeyTestingButton: "Testing...",
  apiKeyTestSuccess: "Connection successful!",
  apiKeyModalTitle: 'Set Your Google AI API Key',
  apiKeyModalDescription: "To use this app, you need a Google AI API Key. It's stored only in your browser.",
  apiKeyModalSteps: {
    step1: 'Go to',
    step2: 'Click "Get API Key".',
    step3: 'Click "Create API key".',
    step4: 'Copy your new key.',
    step5: 'Paste it in the field above and click "Save".'
  },
  apiKeyModalNote: 'Note: Your API key is stored in your browser\'s local storage and is never sent anywhere except to Google\'s servers for authentication.',
  floatingMenu: {
    howToUse: 'How to Use',
    facebookPage: 'Facebook Page'
  },
  howToUseModal: {
    title: 'How to Use the App',
    closeButton: 'Got it!',
    sections: [
        { title: '1. Set Your API Key', content: 'Before you start, click the "Set API Key" button in the header. Follow the instructions to get your free key from Google AI Studio and save it. The app will remember it for you.' },
        { title: '2. Choose Your Mode: Image or Video', content: 'Use the toggle to switch between generating images or videos. Note that video generation takes longer and is more resource-intensive.' },
        { title: '3. Generate from Text', content: 'Simply type a description of what you want to create in the prompt box. Use the helpers for Poses, Styles, and Ads to get ideas. Then click "Generate Image" or "Generate Video".' },
        { title: '4. Generate from an Image', content: 'Upload one or more images. You can then write a prompt to edit them (e.g., "change the background to a beach") or combine them (if you upload multiple). The AI will use your images as a reference.' },
        { title: '5. Edit Your Results', content: 'After an image is generated, click the "Edit" button. You can crop, rotate, adjust colors, or use the in-painting tool. To in-paint, select the brush, draw a mask over the area to change, and type a prompt describing the change.' },
        { title: '6. Upscale & Save', content: 'Use the "Upscale" buttons to increase your image\'s resolution. Use the "Download" button to save it to your device or "Save to History" to add it to the gallery below.' }
    ]
  },
  error: {
    default: 'An unknown error occurred. Please try again.',
    promptOrImage: 'Please provide a prompt or upload an image.',
    fileProcessing: 'An error occurred while processing the file.',
    maxImages: 'You can upload a maximum of 10 images.',
    historyReuse: 'Failed to reuse image from history.',
    keyNotSet: 'API Key not found. Please open the API settings and enter your key.',
    invalidKey: 'Your API key is not valid. Please check it and try again.',
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
    poseHelperPrompts: {
      closeUp: 'A close-up portrait of ',
      fullBody: 'A full-body shot of ',
      lowAngle: 'A low-angle shot of ',
      highAngle: 'A high-angle shot of ',
      profile: 'A profile shot of ',
      eyeLevel: 'An eye-level shot of ',
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
  createdBy: 'สร้างสรรค์ด้วย ❤️ โดย Candelaz Kengza สนับสนุน Donate Coffee ได้ที่ FB Candelaz Kengza',
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
  inspiringPromptsButton: 'ให้ฉันค้นหาไอเดีย',
  promptArsenalLink: 'คลังแสง Prompt AI',
  poseHelperTitle: '✨ ตัวช่วยจัดท่าทางและมุมกล้อง',
  poseHelperCloseUp: 'โคลสอัพ',
  poseHelperFullBody: 'เต็มตัว',
  poseHelperLowAngle: 'มุมต่ำ',
  poseHelperHighAngle: 'มุมสูง',
  poseHelperProfile: 'ด้านข้าง',
  poseHelperEyeLevel: 'ระดับสายตา',
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
    '3D': '3D',
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
    camera: 'มุมกล้อง',
    lens: 'ประเภทเลนส์',
    combining: 'ผสมคำสั่ง',
    editing: 'แก้ไขรูปภาพ',
  },
  promptExamples: [
    { title: 'หุ่นยนต์ 3 มิติสุดน่ารัก', description: 'ภาพถ่ายมาโครที่มีรายละเอียดสูงของหุ่นยนต์ 3 มิติสุดน่ารักบนโต๊ะทำงาน เน้นพื้นผิวที่สมจริงและแสงสไตล์ภาพยนตร์', prompt: 'A tiny, adorable 3D robot with a polished white and orange chassis, big expressive glowing blue eyes, sitting on a workbench cluttered with microchips and wires. The scene is macro photography, with a shallow depth of field, sharp focus on the robot, cinematic lighting, and rendered in stunning 8K for photorealistic detail.' },
    { title: 'ตัวละครอัศวินอนิเมะ', description: 'ภาพวาดดิจิทัลสไตล์ Key Visual ของอัศวินหญิงอนิเมะในชุดเกราะที่ซับซ้อน ตั้งอยู่บนพื้นหลังทิวทัศน์พระอาทิตย์ตกที่น่าทึ่ง', prompt: 'A beautiful anime girl with long, flowing silver hair and piercing emerald eyes, wearing an ornate fantasy knight armor with intricate gold engravings. She stands on a cliff overlooking a sunset. The style is a key visual for an anime, with vibrant colors, dynamic composition, and highly detailed digital painting, trending on ArtStation.' },
    { title: 'ภาพถ่ายบุคคลสมจริง', description: 'ภาพถ่ายบุคคลของหญิงสาวในช่วงเวลา Golden Hour ที่สมจริงอย่างยิ่ง ถ่ายด้วยระยะชัดลึกที่ตื้นเพื่อสร้างภาพถ่ายที่เป็นมืออาชีพและสื่ออารมณ์', prompt: 'Ultra-realistic photograph of a smiling woman with freckles and long, wavy auburn hair. She is captured in the golden hour light, creating soft shadows and a warm glow on her skin. Shot with a Sony a7 IV, 85mm lens at f/1.8, the focus is razor-sharp on her eyes, with a beautifully blurred background. The lighting is dramatic yet natural.' },
    { title: 'ทิวทัศน์ป่ามนตรา', description: 'ภาพวาด Matte Painting สุดอลังการของป่ามหัศจรรย์ในยามพลบค่ำ มีแม่น้ำเรืองแสง เห็ดยักษ์เรืองแสง และลำแสงปริมาตร', prompt: 'An epic, breathtaking matte painting of an enchanted forest at twilight. A crystal-clear river flows through the scene, reflecting the giant, bioluminescent mushrooms that cast an ethereal blue and purple glow. Ancient, moss-covered trees twist towards the sky. Volumetric light rays pierce through the dense canopy, creating a magical and mystical atmosphere. The scale is immense and awe-inspiring.' },
    { title: 'ศิลปะเหนือจริง', description: 'ภาพวาดแนวเหนือจริงที่ผสมผสานเปียโนที่กำลังละลายในทะเลทรายกับท้องฟ้าสีเขียว ถ่ายทอดบรรยากาศที่เหมือนฝันและแปลกประหลาดในสไตล์ของดาลี', prompt: 'A surrealist masterpiece in the style of Salvador Dalí and René Magritte. A grand piano with keys made of melting ice stands in a vast, empty desert under a green sky with two moons. A flock of bowler hats flies in formation like birds. The painting has a dreamlike, uncanny quality, rendered as a hyper-realistic oil on canvas.' },
    { title: 'เมืองไซเบอร์พังก์ในสายฝน', description: 'ภาพมุมกว้างสไตล์ภาพยนตร์ของเมืองไซเบอร์พังก์ที่แออัดในคืนที่ฝนตก เต็มไปด้วยป้ายนีออน ยานพาหนะบินได้ และสุนทรียศาสตร์แบบดิสโทเปียที่ได้รับแรงบันดาลใจจาก Blade Runner', prompt: 'A cinematic wide shot of a crowded cyberpunk city street at night, drenched in a perpetual downpour. Towering holographic advertisements and vibrant neon signs in Japanese and English reflect off the wet asphalt. Flying vehicles stream between monolithic skyscrapers. The atmosphere is gritty, dystopian, and heavily inspired by Blade Runner, with a cool blue and magenta color palette.' },
    { title: 'cafe กับน้องai', description: 'คนจริงนั่งดื่มกาแฟกับตัวละคร 3D สุดน่ารัก', prompt: cafePrompt },
    { title: 'ถ่ายหน้าชัด (Close-up / Headshot)', description: 'เน้นใบหน้าและอารมณ์ของตัวแบบอย่างชัดเจน เหมาะสำหรับการถ่ายภาพบุคคลที่ต้องการสื่ออารมณ์', prompt: 'A close-up portrait of...' },
    { title: 'ถ่ายเต็มตัว (Full-body / Wide shot)', description: 'แสดงตัวแบบทั้งตัวพร้อมกับสภาพแวดล้อมรอบข้าง ทำให้เห็นภาพรวมของฉากและท่าทางของตัวแบบ', prompt: 'A full-body portrait of...' },
    { title: 'มุมต่ำ (Low-angle shot)', description: 'ถ่ายจากมุมต่ำขึ้นไป ทำให้ตัวแบบดูสูงใหญ่ มีพลัง และน่าเกรงขาม', prompt: 'A low-angle shot of...' },
    { title: 'มุมสูง (High-angle shot)', description: 'ถ่ายจากมุมสูงลงมา ทำให้ตัวแบบดูเล็กลง อ่อนโยน หรือดูอ่อนแอ', prompt: 'A high-angle shot of...' },
    { title: 'มุมด้านข้าง (Profile shot)', description: 'ถ่ายจากด้านข้างของตัวแบบ เน้นให้เห็นโครงหน้าและรูปทรงที่ชัดเจน', prompt: 'A profile shot of...' },
    { title: 'ระดับสายตา (Eye-level shot)', description: 'มุมมองที่เป็นธรรมชาติที่สุด เหมือนมองด้วยสายตาปกติ ทำให้ผู้ชมรู้สึกเชื่อมโยงกับตัวแบบได้ง่าย', prompt: 'An eye-level shot of...' },
    { title: 'เลนส์ถ่ายบุคคล (85mm Portrait Lens)', description: 'สร้างเอฟเฟกต์หน้าชัดหลังเบลอ (โบเก้) ที่สวยงาม ทำให้ตัวแบบโดดเด่น เหมาะสำหรับภาพบุคคล', prompt: '..., shot with an 85mm portrait lens, f/1.8' },
    { title: 'เลนส์นอร์มอล (50mm Lens)', description: 'ให้มุมมองที่ใกล้เคียงกับสายตามนุษย์มากที่สุด ทำให้ภาพดูเป็นธรรมชาติและสมจริง', prompt: '..., shot with a 50mm lens, f/2.8' },
    { title: 'เลนส์มาโคร (Macro Lens)', description: 'สำหรับถ่ายภาพระยะใกล้มาก ๆ เพื่อเน้นรายละเอียดเล็ก ๆ ที่มองไม่เห็นด้วยตาเปล่า เช่น แมลงหรือหยดน้ำ', prompt: 'A macro lens shot of...' },
    { title: 'ผสมคำสั่งให้เป๊ะปัง', description: 'อยากได้รูปที่ละเอียดและตรงใจที่สุด? ก็รวบคำสั่งทุกอย่างมาไว้ด้วยกันเลย!', prompt: 'ขอรูปโคลสอัพที่สมจริงของหญิงสาวคนหนึ่ง ตาสวยคม มีแววตาดูดี กำลังยิ้มเบาๆ ท่ามกลางแสงสีทองยามเย็น ถ่ายด้วยเลนส์ 85 มม. สำหรับภาพบุคคล เพื่อให้ได้เอฟเฟกต์โบเก้ที่นุ่มนวลและเน้นผิวที่ดูดีของเธอ ขอเป็นภาพแนวตั้งนะ' },
    { title: 'เติมเครื่องประดับ', description: 'เพิ่มเครื่องประดับเล็กๆ น้อยๆ เพื่อเพิ่มความสวยงามให้กับบุคคลในภาพ', prompt: 'ช่วยเติมสร้อยคอเล็ก ๆ สวย ๆ ให้คนในรูปหน่อย' },
    { title: 'เปลี่ยนฉากหลัง', description: 'เปลี่ยนพื้นหลังของภาพเพื่อสร้างบรรยากาศใหม่ๆ', prompt: 'เปลี่ยนฉากหลังเบลอ ๆ ให้เป็นสตูดิโอแสงนุ่ม ๆ มินิมอล ๆ หน่อย' },
    { title: 'ปรับแสงเงา', description: 'แก้ไขแสงและเงาเพื่อให้ภาพดูนุ่มนวลและเป็นมืออาชีพมากขึ้น', prompt: 'ช่วยลดเงาบนใบหน้าให้ดูนุ่มนวลขึ้น' },
    { title: "โปเกมอนเทรนเนอร์", description: "แปลงร่างคุณเป็นโปเกมอนเทรนเนอร์! คำสั่งนี้ให้คุณระบุโปเกมอนตัวโปรด ชุดของคุณ และพื้นหลังสุดอลังการเพื่อการผจญภัยในแบบของคุณ", prompt: "สร้างภาพของฉันในฐานะโปเกมอนเทรนเนอร์พร้อมกับโปเกมอน [เซเลบี] บนบ่าของฉัน ให้ฉันสวมหมวกโปเกมอนเทรนเนอร์สีแดงและน้ำเงิน ให้ฉันสวมเสื้อฮู้ดสีเหลืองล้ำยุคสุดเท่กับกางเกงยีนส์สีน้ำเงินและรองเท้าผ้าใบสีขาว ให้ฉันกำลังถือโปเกบอล พื้นหลังเป็นป่าสีเขียวที่มีแสงน้อย สไตล์สมจริง" },
    { title: 'ฟิกเกอร์อนิเมะ', description: 'สร้างภาพถ่ายสตูดิโอที่สมจริงสุดๆ ของตัวคุณในรูปแบบฟิกเกอร์อนิเมะระดับพรีเมียม พร้อมท่าโพสสุดเท่ ชุดเสื้อผ้าที่มีรายละเอียดสูง และพื้นหลังเป็นแกลเลอรี่ของสะสม', prompt: "ภาพถ่ายสตูดิโอที่สมจริงสุดๆ ของฟิกเกอร์อนิเมะระดับพรีเมียม นำเสนอชายเอเชียตะวันออกเฉียงใต้หุ่นดี ผมสีดอกเลาและเคราที่ตกแต่งอย่างเรียบร้อย โดยใช้ใบหน้าที่แน่นอนจากรูปภาพที่อัปโหลด แต่งกายในชุดของคามาโดะ ทันจิโร่จากดาบพิฆาตอสูร ฟิกเกอร์โพสท่าฮีโร่แบบไดนามิกถือดาบ ยิ้มอย่างชั่วร้าย ยืนบนฐานโครเมียมสี่เหลี่ยมหนาขัดเงาที่สลักคำว่า 'Demon Slayer' ด้านหลังมีฟิกเกอร์ (ดาคิ) สูงตระหง่านพร้อมรายละเอียดที่แกะสลักอย่างพิถีพิถัน ใหญ่และน่าเกรงขามกว่า ทั้งฟิกเกอร์และฐานสามารถมองเห็นได้เต็มตัวภายในเฟรม วางอยู่บนตู้โชว์กระจกใส พื้นหลังเต็มไปด้วยแถวของฟิกเกอร์อนิเมะในตู้โชว์กระจกที่มีแสงสว่างจ้า สร้างบรรยากาศของแกลเลอรี่ของสะสมอนิเมะระดับพรีเมียม แสงสตูดิโอที่สว่างสะอาด โฟกัสคมชัด การสะท้อนที่ไร้รอยต่อ ผิวเคลือบมันเงา เฟรมแนวตั้ง 8K" },
    { title: 'Iphone 17', description: 'สร้างภาพบุคคลที่กำลังถือ iPhone 17 ใหม่ในร้านค้า', prompt: "ใช้คนในรูปต้นแบบกำลังถือ iPhone 17 promax สีส้มอยู่ในมือของเขา เขากำลังยิ้มอย่างมีความสุข มีเคราแพะเล็กน้อย ผมสีดำ ในร้านค้าที่ดูสว่างและทันสมัย พร้อมกับป้าย 'Day One' และชั้นวางสินค้าด้านหลัง" }
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
  apiKeyStatusLabel: "สถานะ API Key",
  apiKeyStatusConnected: "เชื่อมต่อแล้ว",
  apiKeyStatusNotSet: "ตั้งค่า API Key",
  apiKeyEnterHere: "ป้อน Google AI API Key ของคุณ",
  apiKeySaveButton: "บันทึกคีย์",
  apiKeyRemoveButton: "ยกเลิกการเชื่อมต่อ",
  apiKeyTestButton: "ทดสอบการเชื่อมต่อ",
  apiKeyTestingButton: "กำลังทดสอบ...",
  apiKeyTestSuccess: "การเชื่อมต่อสำเร็จ!",
  apiKeyModalTitle: 'ตั้งค่า Google AI API Key ของคุณ',
  apiKeyModalDescription: "ในการใช้งานแอปนี้ คุณต้องมี Google AI API Key ซึ่งจะถูกเก็บไว้ในเบราว์เซอร์ของคุณเท่านั้น",
  apiKeyModalSteps: {
    step1: 'ไปที่',
    step2: 'คลิก "Get API Key"',
    step3: 'คลิก "Create API key"',
    step4: 'คัดลอกคีย์ใหม่ของคุณ',
    step5: 'วางคีย์ในช่องด้านบนแล้วคลิก "บันทึก"'
  },
  apiKeyModalNote: 'หมายเหตุ: API key ของคุณจะถูกเก็บไว้ใน local storage ของเบราว์เซอร์ และจะไม่ถูกส่งไปที่ใดนอกจากเซิร์ฟเวอร์ของ Google เพื่อการยืนยันตัวตน',
  floatingMenu: {
    howToUse: 'วิธีใช้งาน',
    facebookPage: 'เพจ Facebook'
  },
  howToUseModal: {
    title: 'วิธีใช้งานแอปพลิเคชัน',
    closeButton: 'เข้าใจแล้ว!',
    sections: [
        { title: '1. ตั้งค่า API Key ของคุณ', content: 'ก่อนเริ่มใช้งาน คลิกปุ่ม "Set API Key" ที่ส่วนหัว ทำตามคำแนะนำเพื่อรับคีย์ฟรีจาก Google AI Studio และบันทึกคีย์นั้น แอปจะจดจำคีย์ไว้ให้คุณ' },
        { title: '2. เลือกโหมด: รูปภาพ หรือ วิดีโอ', content: 'ใช้ปุ่มสลับเพื่อเลือกระหว่างการสร้างรูปภาพหรือวิดีโอ โปรดทราบว่าการสร้างวิดีโอใช้เวลานานและใช้ทรัพยากรมากกว่า' },
        { title: '3. สร้างจากข้อความ', content: 'เพียงพิมพ์คำอธิบายสิ่งที่คุณต้องการสร้างในช่อง prompt ใช้ตัวช่วยสำหรับท่าทาง สไตล์ และโฆษณาเพื่อหาไอเดีย จากนั้นคลิก "Generate Image" หรือ "Generate Video"' },
        { title: '4. สร้างจากรูปภาพ', content: 'อัปโหลดรูปภาพหนึ่งรูปหรือมากกว่า จากนั้นคุณสามารถเขียน prompt เพื่อแก้ไข (เช่น "เปลี่ยนพื้นหลังเป็นชายหาด") หรือรวมรูปภาพ (หากอัปโหลดหลายรูป) AI จะใช้รูปภาพของคุณเป็นข้อมูลอ้างอิง' },
        { title: '5. แก้ไขผลลัพธ์ของคุณ', content: 'หลังจากสร้างรูปภาพแล้ว คลิกปุ่ม "Edit" คุณสามารถครอบตัด หมุน ปรับสี หรือใช้เครื่องมือ in-painting หากต้องการใช้ in-painting ให้เลือกแปรง วาดมาสก์ทับบริเวณที่ต้องการเปลี่ยนแปลง แล้วพิมพ์ prompt อธิบายการเปลี่ยนแปลง' },
        { title: '6. ขยายขนาดและบันทึก', content: 'ใช้ปุ่ม "Upscale" เพื่อเพิ่มความละเอียดของรูปภาพของคุณ ใช้ปุ่ม "Download" เพื่อบันทึกลงในอุปกรณ์ของคุณ หรือ "Save to History" เพื่อเพิ่มลงในแกลเลอรีด้านล่าง' }
    ]
  },
  error: {
    default: 'เกิดข้อผิดพลาดที่ไม่รู้จัก โปรดลองอีกครั้ง',
    promptOrImage: 'กรุณาป้อนคำสั่งหรืออัปโหลดรูปภาพ',
    fileProcessing: 'เกิดข้อผิดพลาดขณะประมวลผลไฟล์',
    maxImages: 'คุณสามารถอัปโหลดรูปภาพได้สูงสุด 10 รูป',
    historyReuse: 'ไม่สามารถใช้รูปภาพซ้ำจากประวัติได้',
    keyNotSet: 'ไม่พบ API Key กรุณาเปิดการตั้งค่า API แล้วป้อนคีย์ของคุณ',
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
    poseHelperPrompts: {
      closeUp: 'ภาพโคลสอัพของ ',
      fullBody: 'ภาพเต็มตัวของ ',
      lowAngle: 'ภาพมุมต่ำของ ',
      highAngle: 'ภาพมุมสูงของ ',
      profile: 'ภาพด้านข้างของ ',
      eyeLevel: 'ภาพระดับสายตาของ ',
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
  createdBy: '由 Candelaz Kengza ❤️ 创作。在 FB 上通过捐赠咖啡来支持：Candelaz Kengza',
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
  inspiringPromptsButton: '给我找点子',
  promptArsenalLink: 'AI 提示词库',
  poseHelperTitle: '✨ 姿势与角度助手',
  poseHelperCloseUp: '特写',
  poseHelperFullBody: '全身',
  poseHelperLowAngle: '低角度',
  poseHelperHighAngle: '高角度',
  poseHelperProfile: '侧面',
  poseHelperEyeLevel: '平视',
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
    '3D': '3D',
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
    camera: '摄像机角度',
    lens: '镜头类型',
    combining: '组合提示',
    editing: '图像编辑',
  },
  promptExamples: [
    { title: '可爱的3D机器人', description: '一张高细节的微距照片，拍摄了一个可爱的工作台上的3D机器人，注重逼真的纹理和电影般的灯光效果。', prompt: 'A tiny, adorable 3D robot with a polished white and orange chassis, big expressive glowing blue eyes, sitting on a workbench cluttered with microchips and wires. The scene is macro photography, with a shallow depth of field, sharp focus on the robot, cinematic lighting, and rendered in stunning 8K for photorealistic detail.' },
    { title: '动漫骑士角色', description: '一张关键视觉风格的数字绘画，描绘了一位穿着复杂盔甲的女性动漫骑士，背景是戏剧性的日落景观。', prompt: 'A beautiful anime girl with long, flowing silver hair and piercing emerald eyes, wearing an ornate fantasy knight armor with intricate gold engravings. She stands on a cliff overlooking a sunset. The style is a key visual for an anime, with vibrant colors, dynamic composition, and highly detailed digital painting, trending on ArtStation.' },
    { title: '写实肖像照', description: '一张极其逼真的黄金时刻人像照片，采用浅景深拍摄，营造出专业且富有情感的摄影作品。', prompt: 'Ultra-realistic photograph of a smiling woman with freckles and long, wavy auburn hair. She is captured in the golden hour light, creating soft shadows and a warm glow on her skin. Shot with a Sony a7 IV, 85mm lens at f/1.8, the focus is razor-sharp on her eyes, with a beautifully blurred background. The lighting is dramatic yet natural.' },
    { title: '魔法森林景观', description: '一幅史诗级的数字绘景作品，描绘了黄昏时分的魔法森林，有发光的河流、巨大的生物发光蘑菇和体积光束。', prompt: 'An epic, breathtaking matte painting of an enchanted forest at twilight. A crystal-clear river flows through the scene, reflecting the giant, bioluminescent mushrooms that cast an ethereal blue and purple glow. Ancient, moss-covered trees twist towards the sky. Volumetric light rays pierce through the dense canopy, creating a magical and mystical atmosphere. The scale is immense and awe-inspiring.' },
    { title: '超现实主义艺术', description: '一幅超现实主义画作，将融化的钢琴置于沙漠之中，配以绿色的天空，捕捉了达利风格的梦幻和怪诞氛围。', prompt: 'A surrealist masterpiece in the style of Salvador Dalí and René Magritte. A grand piano with keys made of melting ice stands in a vast, empty desert under a green sky with two moons. A flock of bowler hats flies in formation like birds. The painting has a dreamlike, uncanny quality, rendered as a hyper-realistic oil on canvas.' },
    { title: '雨中赛博朋克城市', description: '一个电影般的宽镜头，拍摄了雨夜中拥挤的赛博朋克城市，充满了霓虹灯、飞行器和受《银翼杀手》启发的反乌托邦美学。', prompt: 'A cinematic wide shot of a crowded cyberpunk city street at night, drenched in a perpetual downpour. Towering holographic advertisements and vibrant neon signs in Japanese and English reflect off the wet asphalt. Flying vehicles stream between monolithic skyscrapers. The atmosphere is gritty, dystopian, and heavily inspired by Blade Runner, with a cool blue and magenta color palette.' },
    { title: '与AI伙伴的咖啡馆', description: '一个真人和一个可爱的3D角色一起喝咖啡。', prompt: cafePrompt },
    { title: '特写/头像 (Close-up / Headshot)', description: '清晰地聚焦于主体的面部和情感。非常适合旨在传达情感的人像摄影。', prompt: 'A close-up portrait of...' },
    { title: '全身照/广角镜头 (Full-body / Wide shot)', description: '显示整个主体及其周围环境，从而可以全面了解场景和主体的姿势。', prompt: 'A full-body portrait of...' },
    { title: '低角度拍摄 (Low-angle shot)', description: '从低角度向上拍摄，使主体显得更高大、更有力、更具威慑力。', prompt: 'A low-angle shot of...' },
    { title: '高角度拍摄 (High-angle shot)', description: '从高角度向下拍摄，使主体显得更小、更温柔或更脆弱。', prompt: 'A high-angle shot of...' },
    { title: '侧面照 (Profile shot)', description: '从主体的侧面拍摄，强调面部轮廓和曲线。', prompt: 'A profile shot of...' },
    { title: '平视拍摄 (Eye-level shot)', description: '最自然的视角，如同用正常的眼睛观看，使观众容易与主体建立联系。', prompt: 'An eye-level shot of...' },
    { title: '85毫米人像镜头 (85mm Portrait Lens)', description: '创造出美丽的浅景深（散景）效果，使主体脱颖而出。非常适合人像摄影。', prompt: '..., shot with an 85mm portrait lens, f/1.8' },
    { title: '50毫米标准镜头 (50mm Lens)', description: '提供与人眼非常接近的视角，使图像看起来自然逼真。', prompt: '..., shot with a 50mm lens, f/2.8' },
    { title: '微距镜头 (Macro Lens)', description: '用于极近距离摄影，以强调肉眼看不见的微小细节，如昆虫或水滴。', prompt: 'A macro lens shot of...' },
    { title: '组合提示以获得精确效果', description: '想要最详细、最具体的图像吗？将您所有的指令组合成一个强大的提示！', prompt: '一张逼真的年轻女子特写肖像，她有着锐利美丽的眼睛和温柔的微笑，沐浴在傍晚的金色光线中。使用 85 毫米人像镜头拍摄，以获得柔和的散景效果，并突显她无瑕的肌肤。垂直方向。' },
    { title: '添加配饰', description: '通过添加小巧而优雅的配饰来提升您主体的外观。', prompt: '给照片中的人加上一条小巧漂亮的项链。' },
    { title: '更换背景', description: '替换图像的背景，营造全新的氛围或场景。', prompt: '将模糊的背景换成一个光线柔和的极简主义工作室。' },
    { title: '调整光影', description: '修改光线和阴影，让您的图像看起来更柔和、更专业。', prompt: '柔化脸上的阴影，让它们看起来更平滑。' },
    { title: "宝可梦训练师", description: "将您自己变成宝可梦训练师！此提示可让您指定您最喜欢的宝可梦、您的服装以及戏剧性的背景，以打造个性化的冒险之旅。", prompt: "创建一张我作为宝可梦训练师的图片，肩膀上站着一只宝可梦[时拉比]。让我戴着一顶红色和蓝色的宝可梦训练师帽子。让我穿着酷炫的未来派黄色连帽衫、蓝色牛仔裤和白色运动鞋。让我手里拿着一个精灵球。背景是光线昏暗的绿色丛林。风格写实。" },
    { title: '动漫手办', description: '创建一张您自己的超写实工作室照片，化身为高级动漫风格的可动人偶，配有动态姿势、精细服装和收藏家画廊背景。', prompt: "一张超写实的工作室照片，展示一个高级动漫风格的可动人偶。主角为一个身材健硕的东南亚男性，花白头发，胡须整齐，面部与上传照片完全一致，身穿《鬼灭之刃》灶门炭治郎的服装。人偶动态地摆出英雄姿势，手持剑，邪魅地微笑，站在一个厚实的抛光方形铬合金底座上，底座上刻有“Demon Slayer”。他身后站着一个高大的（堕姬）人偶，雕刻细节一丝不苟，更大更具气势。整个人偶和底座在画面中完全可见，放置在一个透明的玻璃展示柜上。背景是成排的动漫手办，陈列在明亮的玻璃展示架中，营造出高级动漫收藏品画廊的氛围。明亮干净的工作室灯光，焦点锐利，无缝反射，光泽饰面。垂直 8K 构图。" },
    { title: 'iPhone 17 发布日', description: '生成一张快乐的顾客在现代明亮的商店里，在发布日当天手持全新橙色 iPhone 17 Pro Max 的图片。', prompt: "使用参考图片中的人物，展示他手中拿着一部橙色的 iPhone 17 Pro Max。他开心地笑着，留着小山羊胡，黑色的头发。场景是一家明亮而现代的商店，背景有‘Day One’的标志和商品货架。" }
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
  apiKeyStatusLabel: "API 密钥状态",
  apiKeyStatusConnected: "已连接",
  apiKeyStatusNotSet: "设置 API 密钥",
  apiKeyEnterHere: "输入您的 Google AI API 密钥",
  apiKeySaveButton: "保存密钥",
  apiKeyRemoveButton: "断开连接",
  apiKeyTestButton: "测试连接",
  apiKeyTestingButton: "测试中...",
  apiKeyTestSuccess: "连接成功！",
  apiKeyModalTitle: '设置您的 Google AI API 密钥',
  apiKeyModalDescription: "要使用此应用程序，您需要一个 Google AI API 密钥。它仅存储在您的浏览器中。",
  apiKeyModalSteps: {
    step1: '前往',
    step2: '点击“获取 API 密钥”。',
    step3: '点击“创建 API 密钥”。',
    step4: '复制您的新密钥。',
    step5: '将其粘贴到上方的输入框中，然后点击“保存”。'
  },
  apiKeyModalNote: '注意：您的 API 密钥存储在您浏览器的本地存储中，除了用于身份验证外，绝不会发送到 Google 服务器以外的任何地方。',
  floatingMenu: {
    howToUse: '如何使用',
    facebookPage: 'Facebook 页面'
  },
  howToUseModal: {
    title: '如何使用本应用',
    closeButton: '好的！',
    sections: [
        { title: '1. 设置您的 API 密钥', content: '开始前，请点击标题栏中的“设置 API 密钥”按钮。按照说明从 Google AI Studio 获取您的免费密钥并保存。应用程序会为您记住它。' },
        { title: '2. 选择您的模式：图像或视频', content: '使用切换按钮在生成图像或视频之间切换。请注意，视频生成时间更长，消耗资源更多。' },
        { title: '3. 从文本生成', content: '只需在提示框中输入您想要创建的内容的描述。使用姿势、风格和广告助手获取灵感。然后点击“生成图像”或“生成视频”。' },
        { title: '4. 从图像生成', content: '上传一张或多张图像。然后您可以编写提示来编辑它们（例如，“将背景更改为海滩”）或将它们组合（如果您上传了多张）。AI 将使用您的图像作为参考。' },
        { title: '5. 编辑您的结果', content: '生成图像后，点击“编辑”按钮。您可以裁剪、旋转、调整颜色或使用修复工具。要进行修复，请选择画笔，在要更改的区域上绘制蒙版，然后输入描述更改的提示。' },
        { title: '6. 放大和保存', content: '使用“放大”按钮来提高图像的分辨率。使用“下载”按钮将其保存到您的设备，或使用“保存到历史记录”将其添加到下方的图库中。' }
    ]
  },
  error: {
    default: '发生未知错误。请重试。',
    promptOrImage: '请输入提示或上传图像。',
    fileProcessing: '处理文件时发生错误。',
    maxImages: '您最多可以上传 10 张图片。',
    historyReuse: '无法从历史记录中重用图像。',
    keyNotSet: '未找到 API 密钥。请打开 API 设置并输入您的密钥。',
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
    poseHelperPrompts: {
      closeUp: '一张特写肖像，主体是 ',
      fullBody: '一张全身照，主体是 ',
      lowAngle: '一张低角度拍摄的照片，主体是 ',
      highAngle: '一张高角度拍摄的照片，主体是 ',
      profile: '一张侧面照，主体是 ',
      eyeLevel: '一张平视角度的照片，主体是 ',
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