import { ArtisticStyle } from "../types";

// Type definition for a single prompt example
export interface PromptExample {
    title: string;
    description: string;
    prompt: string;
}

// Type for the entire translation structure
export interface Translation {
    // Header & Footer
    appName: string;
    visitorCount: (count: string) => string;
    createdBy: string;

    // API Key Section
    apiKeyLabel: string;
    apiKeyPlaceholder: string;
    saveButton: string;
    saveSuccess: string;
    apiKeyInfo: string;
    getApiKeyLink: string;
    apiKeyNote: string;
    getApiKeyButton: string;

    // Main App Section
    mainDescription: string;
    addImage: (count: number) => string;

    // Prompt Controls
    inspiringPromptsButton: string;
    adHelperTitle: string;
    adHelperStudio: string;
    adHelperLifestyle: string;
    adHelperNature: string;
    adHelperLuxurious: string;
    modeLabel: string;
    modeImage: string;
    modeVideo: string;
    styleLabel: string;
    aspectRatioLabel: string;
    aspectRatioSquare: string;
    aspectRatioLandscape: string;
    aspectRatioPortrait: string;
    styleSuggestion: (style: string) => string;
    promptPlaceholderImage: (example: string) => string;
    promptPlaceholderVideo: string;
    promptPlaceholderDefault: string;
    apiNotConfigured: string;
    generateImageButton: string;
    generateVideoButton: string;
    processingButton: string;

    // Results
    resultTitle: string;
    saveResultTooltip: string;
    downloadImageTooltip: string;
    shareImageTooltip: string;
    zoomInTooltip: string;
    zoomOutTooltip: string;
    resetZoomTooltip: string;
    unsupportedShare: string;
    downloadVideoButton: string;
    videoUnsupported: string;

    // History
    historyTitle: string;
    clearHistoryButton: string;
    reuseImageTooltip: string;

    // Image Uploader
    uploaderTitle: string;
    uploaderSubtitle: string;
    uploaderLimit: string;

    // Image Gallery
    galleryTitle: string;
    removeImageTooltip: string;

    // Loader
    imageLoadingMessages: string[];
    videoLoadingMessages: string[];

    // API Key Modal
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

    // Prompt Examples Modal
    promptExamplesTitle: string;
    promptSearchPlaceholder: (category: string) => string;
    promptExamplesNotFound: string;
    promptExamplesNotFoundHint: string;
    selectPromptButton: string;
    
    // Artistic Styles & Categories are linked
    artisticStyles: Record<ArtisticStyle, string>;
    promptCategories: Record<string, string>;
    promptExamples: PromptExample[];
    
    // Error Messages (from service)
    error: {
        default: string;
        apiKey: string;
        promptOrImage: string;
        maxImages: string;
        fileProcessing: string;
        historyReuse: string;
        invalidKey: string;
        rateLimit: string;
        network: string;
        safety: string;
        emptyResponse: string;
        invalidArgument: string;
        videoFinishedNoLink: string;
        apiError: (message: string) => string;
    };

    // Service-internal prompts
    service: {
        styleInstruction: (style: string) => string;
        styleInstructionNoPrompt: (style: string) => string;
        aspectRatioInstruction: (aspectRatio: string) => string;
        generatePromptInstruction: string;
    }
}

export const translations: Record<'th' | 'en' | 'cn', Translation> = {
    th: {
        appName: "Image Gen Nano Banana",
        visitorCount: (count) => `ผู้เข้าชม: ${count}`,
        createdBy: "สร้างโดย Candelaz Kengza",
        apiKeyLabel: "Google AI API Key",
        apiKeyPlaceholder: "ใส่ API Key ของคุณที่นี่...",
        saveButton: "บันทึก",
        saveSuccess: "บันทึก API Key เรียบร้อยแล้ว!",
        apiKeyInfo: "แอปพลิเคชันนี้ต้องใช้ Gemini API Key จาก",
        getApiKeyLink: "Google AI Studio",
        apiKeyNote: "ของคุณเอง คีย์จะถูกบันทึกไว้ในเบราว์เซอร์ของคุณเท่านั้น",
        getApiKeyButton: "วิธีรับ API Key?",
        mainDescription: "อัปโหลดรูปภาพและใช้ AI ช่วยแก้ไข เพิ่ม หรือลบวัตถุ เปลี่ยนสไตล์ และอื่นๆ อีกมากมาย!",
        addImage: (count) => `เพิ่มรูปภาพ (${count}/10)`,
        inspiringPromptsButton: "ดูตัวอย่าง Prompt ที่สร้างแรงบันดาลใจ",
        adHelperTitle: "ตัวช่วยสร้างรูปโฆษณาสินค้า",
        adHelperStudio: "แนวสตูดิโอ",
        adHelperLifestyle: "แนวไลฟ์สไตล์",
        adHelperNature: "แนวธรรมชาติ",
        adHelperLuxurious: "แนวหรูหรา",
        modeLabel: "โหมด",
        modeImage: "รูปภาพ",
        modeVideo: "วิดีโอ",
        styleLabel: "สไตล์ภาพ",
        aspectRatioLabel: "อัตราส่วนภาพ",
        aspectRatioSquare: "สี่เหลี่ยม",
        aspectRatioLandscape: "แนวนอน",
        aspectRatioPortrait: "แนวตั้ง",
        styleSuggestion: (style) => `คำแนะนำสำหรับสไตล์ ${style}:`,
        promptPlaceholderImage: (example) => `ลองพิมพ์: "${example}"`,
        promptPlaceholderVideo: "อธิบายวิดีโอที่ต้องการสร้าง เช่น 'แมวอวกาศกำลังขับยานอวกาศ'",
        promptPlaceholderDefault: "เพิ่มคำอธิบาย เช่น 'เพิ่มหมวกวันเกิดให้แมว'...",
        apiNotConfigured: "กรุณาใส่ API Key ของคุณในช่องด้านบนเพื่อเปิดใช้งาน",
        generateImageButton: "สร้างรูปภาพ",
        generateVideoButton: "สร้างวิดีโอ",
        processingButton: "กำลังประมวลผล...",
        resultTitle: "ผลลัพธ์ที่ได้",
        saveResultTooltip: "บันทึกผลลัพธ์นี้",
        downloadImageTooltip: "ดาวน์โหลดรูปภาพ",
        shareImageTooltip: "แชร์รูปภาพ",
        zoomInTooltip: "ซูมเข้า",
        zoomOutTooltip: "ซูมออก",
        resetZoomTooltip: "รีเซ็ต",
        unsupportedShare: "เบราว์เซอร์ของคุณไม่รองรับการแชร์ หรือไม่มีรูปภาพให้แชร์",
        downloadVideoButton: "ดาวน์โหลดวิดีโอ",
        videoUnsupported: "เบราว์เซอร์ของคุณไม่รองรับวิดีโอแท็ก",
        historyTitle: "ประวัติการสร้าง",
        clearHistoryButton: "ล้างประวัติ",
        reuseImageTooltip: "นำรูปภาพนี้มาใช้ใหม่",
        uploaderTitle: "ลากและวางรูปภาพที่นี่",
        uploaderSubtitle: "หรือคลิกเพื่อเลือกไฟล์",
        uploaderLimit: "(สูงสุด 10 ภาพ, PNG, JPG, WEBP)",
        galleryTitle: "รูปภาพอ้างอิงของคุณ",
        removeImageTooltip: "ลบรูปภาพ",
        imageLoadingMessages: [
            "กำลังเริ่มต้น AI สร้างสรรค์...", "กำลังวิเคราะห์รูปภาพอ้างอิง...", "กำลังประมวลผลด้วยวงจรศิลปะ...", "กำลังวาดภาพด้วยแสงดิจิทัล...", "กำลังเก็บรายละเอียดสุดท้าย...",
        ],
        videoLoadingMessages: [
            "กำลังเตรียมพร้อมสร้างวิดีโอ...", "กำลังวิเคราะห์เฟรมแรก...", "AI กำลังเรนเดอร์ภาพเคลื่อนไหว...", "ขั้นตอนนี้อาจใช้เวลานานหลายนาที...", "กำลังประกอบวิดีโอขั้นสุดท้าย...", "ขอบคุณที่อดทนรอ!",
        ],
        apiKeyModalTitle: "วิธีรับ Gemini API Key",
        apiKeyModalDescription: "ทำตามขั้นตอนง่ายๆ ดังนี้เพื่อรับ API Key ของคุณ:",
        apiKeyModalSteps: {
            step1: 'ไปที่',
            step2: 'คลิกที่ปุ่ม "Create API key".',
            step3: "เลือกโปรเจกต์ Google Cloud ของคุณ หรือสร้างโปรเจกต์ใหม่.",
            step4: "คัดลอก API key ที่ปรากฏขึ้นมา.",
            step5: 'นำคีย์มาวางในช่องใส่ API Key ในแอปพลิเคชันนี้ แล้วกด "บันทึก".',
        },
        apiKeyModalNote: "หมายเหตุ: API key ของคุณจะถูกบันทึกไว้ในเบราว์เซอร์ของคุณเท่านั้นและจะไม่ถูกส่งไปที่อื่น.",
        promptExamplesTitle: "ตัวอย่าง Prompt",
        promptSearchPlaceholder: (category) => `ค้นหาในหมวดหมู่ "${category}"...`,
        promptExamplesNotFound: "ไม่พบ Prompt ที่ตรงกัน",
        promptExamplesNotFoundHint: "ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น",
        selectPromptButton: "เลือก Prompt นี้",
        artisticStyles: {
            Default: 'ค่าเริ่มต้น', Photorealistic: 'สมจริง', Anime: 'อนิเมะ', Impressionist: 'อิมเพรสชันนิสม์',
            Cartoon: 'การ์ตูน', Surreal: 'เหนือจริง', Cyberpunk: 'ไซเบอร์พังก์', Vintage: 'วินเทจ',
            Fantasy: 'แฟนตาซี', 'Sci-Fi': 'ไซไฟ', Abstract: 'นามธรรม',
        },
        promptCategories: {
            popular: "ยอดนิยม", "3d": "3D & เรนเดอร์", photo: "สมจริง & ภาพถ่าย",
            fantasy: "แฟนตาซี & ไซไฟ", art: "ศิลปะ & ภาพวาด", character: "ตัวละคร & ผู้คน",
            scape: "ทิวทัศน์ & สถาปัตยกรรม", cute: "น่ารัก & สติกเกอร์", concept: "แนวคิด & นามธรรม",
        },
        promptExamples: [
             {
                title: 'รูปบอลลูน 3D สไตล์ Pixar', description: 'เปลี่ยนใบหน้าในรูปภาพอ้างอิงให้กลายเป็นตัวการ์ตูนบอลลูน 3D สไตล์ Pixar ที่น่ารักและมีรายละเอียดสูง',
                prompt: `Using the reference face, generate a Pixar-style 3D balloon caricature with ultra-detailed sculpted skin, glossy shine, oversized cheeks, and a balloon knot at the bottom with a balloon string extending downward, while preserving the exact hairstyle and facial proportions from the reference. Maintain the closed-eye kissing expression with cinematic DOF and polished surreal toy-like aesthetics, using the same background and lighting as in the reference image.`,
            },
            {
                title: 'ฟิกเกอร์ 3D บนคอนโซลรถ', description: 'สร้างตุ๊กตาฟิกเกอร์ 3D ที่สมจริงเหมือนคนในภาพถ่าย วางอยู่บนคอนโซลรถยนต์พร้อมกล่องบรรจุภัณฑ์ขนาดเล็ก',
                prompt: `Create an ultra-high-resolution, hyper-realistic dashboard doll of the person in the attached photo. The doll must accurately replicate the person’s facial features, hairstyle, clothing, and pose exactly as in the original image. Place the doll on a car dashboard, fixed on a small round spring-mounted base that allows gentle bobble-head movement. Beside the doll, include a miniature packaging box. The car interior should be realistically detailed with blurred city street scenery visible outside the windshield.`,
            },
            {
                title: 'เซลฟี่กลุ่มกับทีม Marvel', description: 'สร้างภาพเซลฟี่กลุ่มที่สมจริง โดยมีบุคคลในภาพอ้างอิงกำลังถ่ายรูปกับเหล่าซูเปอร์ฮีโร่ Marvel',
                prompt: `A hyper-realistic group selfie using the uploaded image (maintaining the original face, clothes, and natural look). The person is holding a smartphone to take the selfie, surrounded by Marvel members: Iron Man, Captain America, Thor, Hulk, Black Widow, and Spider-Man—all smiling and posing casually like close friends. Full-body view of everyone, looking like a real selfie in a city setting, natural daylight, cinematic quality, vibrant colors, photorealistic style.`,
            },
            {
                title: 'โลกจิ๋วในร้านหนังสือ', description: 'สร้างภาพไดโอรามาขนาดจิ๋วของร้านหนังสือที่ดูอบอุ่นและมีเสน่ห์ พร้อมรายละเอียดเล็กๆ น้อยๆ ที่น่าทึ่ง',
                prompt: `A miniature diorama of a quaint bookstore, tiny books lining the shelves, a small armchair by a fireplace, cinematic lighting, hyperdetailed, 8k, photorealistic.`,
            },
            {
                title: 'ภาพถ่ายอาหารน่ารับประทาน', description: 'สร้างภาพถ่ายแพนเค้กที่ดูสมจริงและน่าอร่อยจนต้องน้ำลายสอ เหมาะสำหรับบล็อกอาหารหรือเมนู',
                prompt: `A hyperrealistic photo of a stack of fluffy pancakes dripping with maple syrup, topped with fresh berries and a dusting of powdered sugar. Shot with a macro lens, shallow depth of field, warm morning light.`,
            },
        ],
        error: {
            default: "เกิดข้อผิดพลาดที่ไม่คาดคิด",
            apiKey: "กรุณาใส่ API Key ของคุณก่อนใช้งาน",
            promptOrImage: "กรุณาใส่คำอธิบายหรืออัปโหลดรูปภาพอย่างน้อยหนึ่งภาพ",
            maxImages: "คุณสามารถอัปโหลดได้สูงสุด 10 ภาพ",
            fileProcessing: "เกิดข้อผิดพลาดในการประมวลผลไฟล์ภาพ",
            historyReuse: "ไม่สามารถนำรูปภาพจากประวัติกลับมาใช้ใหม่ได้",
            invalidKey: 'API Key ไม่ถูกต้องหรือไม่ได้รับอนุญาต โปรดตรวจสอบและบันทึกคีย์ของคุณอีกครั้ง',
            rateLimit: 'ใช้งานเกินขีดจำกัดแล้ว โปรดรอสักครู่แล้วลองอีกครั้งในภายหลัง',
            network: 'เกิดข้อผิดพลาดในการเชื่อมต่อเครือข่าย โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ',
            safety: 'คำสั่งหรือรูปภาพของคุณถูกบล็อกเนื่องจากนโยบายความปลอดภัย โปรดลองใช้คำสั่งอื่น',
            emptyResponse: 'AI ไม่ได้ส่งคืนผลลัพธ์ใดๆ โปรดลองปรับเปลี่ยนคำสั่งหรือรูปภาพของคุณ',
            invalidArgument: 'มีข้อผิดพลาดกับข้อมูลที่ส่งไป โปรดตรวจสอบคำสั่งและรูปภาพของคุณ',
            videoFinishedNoLink: "การสร้างวิดีโอเสร็จสิ้น แต่ไม่พบลิงก์สำหรับดาวน์โหลด",
            apiError: (message) => `เกิดข้อผิดพลาดจาก API: ${message}`,
        },
        service: {
            styleInstruction: (style) => `\n\nคำสั่งเพิ่มเติม: ช่วยสร้างภาพนี้ในสไตล์ ${style}`,
            styleInstructionNoPrompt: (style) => `สร้างสรรค์ภาพที่อัปโหลดขึ้นมาใหม่ในสไตล์ ${style}`,
            aspectRatioInstruction: (aspectRatio) => `\n\nImportant: Generate the image with a ${aspectRatio} aspect ratio.`,
            generatePromptInstruction: "วิเคราะห์รูปภาพเหล่านี้และช่วยสร้าง prompt ที่สร้างสรรค์สำหรับแก้ไขหรือต่อยอดรูปภาพนี้เป็นภาษาไทย โดยเน้นไปที่การจินตนาการถึงฉากหรือสไตล์ใหม่ๆ ที่น่าสนใจ",
        }
    },
    en: {
        appName: "Image Gen Nano Banana",
        visitorCount: (count) => `Visitors: ${count}`,
        createdBy: "Created by Candelaz Kengza",
        apiKeyLabel: "Google AI API Key",
        apiKeyPlaceholder: "Enter your API Key here...",
        saveButton: "Save",
        saveSuccess: "API Key saved successfully!",
        apiKeyInfo: "This application requires a Gemini API Key from",
        getApiKeyLink: "Google AI Studio",
        apiKeyNote: "Your key is saved only in your browser.",
        getApiKeyButton: "How to get an API Key?",
        mainDescription: "Upload images and use AI to edit, add, remove objects, change styles, and much more!",
        addImage: (count) => `Add Image (${count}/10)`,
        inspiringPromptsButton: "Inspiring Prompts",
        adHelperTitle: "Product Ad Image Helper",
        adHelperStudio: "Studio",
        adHelperLifestyle: "Lifestyle",
        adHelperNature: "Nature",
        adHelperLuxurious: "Luxurious",
        modeLabel: "Mode",
        modeImage: "Image",
        modeVideo: "Video",
        styleLabel: "Style",
        aspectRatioLabel: "Aspect Ratio",
        aspectRatioSquare: "Square",
        aspectRatioLandscape: "Landscape",
        aspectRatioPortrait: "Portrait",
        styleSuggestion: (style) => `Suggestions for ${style} style:`,
        promptPlaceholderImage: (example) => `Try: "${example}"`,
        promptPlaceholderVideo: "Describe the video to generate, e.g., 'An astronaut cat driving a spaceship'",
        promptPlaceholderDefault: "Add a description, e.g., 'Add a birthday hat to the cat'...",
        apiNotConfigured: "Please enter your API Key above to enable.",
        generateImageButton: "Generate Image",
        generateVideoButton: "Generate Video",
        processingButton: "Processing...",
        resultTitle: "Result",
        saveResultTooltip: "Save this result",
        downloadImageTooltip: "Download Image",
        shareImageTooltip: "Share Image",
        zoomInTooltip: "Zoom In",
        zoomOutTooltip: "Zoom Out",
        resetZoomTooltip: "Reset",
        unsupportedShare: "Your browser does not support sharing, or there is no image to share.",
        downloadVideoButton: "Download Video",
        videoUnsupported: "Your browser does not support the video tag.",
        historyTitle: "History",
        clearHistoryButton: "Clear History",
        reuseImageTooltip: "Reuse this image",
        uploaderTitle: "Drag and drop images here",
        uploaderSubtitle: "or click to select files",
        uploaderLimit: "(Max 10 images, PNG, JPG, WEBP)",
        galleryTitle: "Your Reference Images",
        removeImageTooltip: "Remove image",
        imageLoadingMessages: [
            "Initializing creative AI...", "Analyzing reference images...", "Processing through art circuits...", "Painting with digital light...", "Adding final touches...",
        ],
        videoLoadingMessages: [
            "Preparing for video generation...", "Analyzing the first frame...", "AI is rendering the animation...", "This step may take several minutes...", "Assembling the final video...", "Thanks for your patience!",
        ],
        apiKeyModalTitle: "How to get a Gemini API Key",
        apiKeyModalDescription: "Follow these simple steps to get your API Key:",
        apiKeyModalSteps: {
            step1: 'Go to',
            step2: 'Click the "Create API key" button.',
            step3: "Choose your Google Cloud project, or create a new one.",
            step4: "Copy the generated API key.",
            step5: 'Paste the key into the API Key field in this application and press "Save".',
        },
        apiKeyModalNote: "Note: Your API key is stored only in your browser and is not sent anywhere else.",
        promptExamplesTitle: "Prompt Examples",
        promptSearchPlaceholder: (category) => `Search in "${category}"...`,
        promptExamplesNotFound: "No matching prompts found",
        promptExamplesNotFoundHint: "Try changing your search term or selecting another category.",
        selectPromptButton: "Select this Prompt",
        artisticStyles: {
            Default: 'Default', Photorealistic: 'Photorealistic', Anime: 'Anime', Impressionist: 'Impressionist',
            Cartoon: 'Cartoon', Surreal: 'Surreal', Cyberpunk: 'Cyberpunk', Vintage: 'Vintage',
            Fantasy: 'Fantasy', 'Sci-Fi': 'Sci-Fi', Abstract: 'Abstract',
        },
        promptCategories: {
            popular: "Popular", "3d": "3D & Render", photo: "Realistic & Photo",
            fantasy: "Fantasy & Sci-Fi", art: "Art & Painting", character: "Character & People",
            scape: "Landscape & Architecture", cute: "Cute & Sticker", concept: "Concept & Abstract",
        },
        promptExamples: [
            {
                title: '3D Pixar-style Balloon', description: 'Transform a reference face into a cute, highly detailed Pixar-style 3D balloon character.',
                prompt: `Using the reference face, generate a Pixar-style 3D balloon caricature with ultra-detailed sculpted skin, glossy shine, oversized cheeks, and a balloon knot at the bottom with a balloon string extending downward, while preserving the exact hairstyle and facial proportions from the reference. Maintain the closed-eye kissing expression with cinematic DOF and polished surreal toy-like aesthetics, using the same background and lighting as in the reference image.`,
            },
            {
                title: '3D Figure on Car Dashboard', description: 'Create a realistic 3D figure of the person in the photo, placed on a car dashboard with a small packaging box.',
                prompt: `Create an ultra-high-resolution, hyper-realistic dashboard doll of the person in the attached photo. The doll must accurately replicate the person’s facial features, hairstyle, clothing, and pose exactly as in the original image. Place the doll on a car dashboard, fixed on a small round spring-mounted base that allows gentle bobble-head movement. Beside the doll, include a miniature packaging box. The car interior should be realistically detailed with blurred city street scenery visible outside the windshield.`,
            },
            {
                title: 'Group Selfie with Marvel Team', description: 'Create a realistic group selfie with the person from the reference image and Marvel superheroes.',
                prompt: `A hyper-realistic group selfie using the uploaded image (maintaining the original face, clothes, and natural look). The person is holding a smartphone to take the selfie, surrounded by Marvel members: Iron Man, Captain America, Thor, Hulk, Black Widow, and Spider-Man—all smiling and posing casually like close friends. Full-body view of everyone, looking like a real selfie in a city setting, natural daylight, cinematic quality, vibrant colors, photorealistic style.`,
            },
            {
                title: 'Miniature World in a Bookstore', description: 'Create a miniature diorama of a cozy and charming bookstore with amazing tiny details.',
                prompt: `A miniature diorama of a quaint bookstore, tiny books lining the shelves, a small armchair by a fireplace, cinematic lighting, hyperdetailed, 8k, photorealistic.`,
            },
            {
                title: 'Delicious Food Photography', description: 'Create a realistic and mouth-watering photo of pancakes, perfect for a food blog or menu.',
                prompt: `A hyperrealistic photo of a stack of fluffy pancakes dripping with maple syrup, topped with fresh berries and a dusting of powdered sugar. Shot with a macro lens, shallow depth of field, warm morning light.`,
            },
        ],
        error: {
            default: "An unexpected error occurred",
            apiKey: "Please enter your API Key before use",
            promptOrImage: "Please enter a description or upload at least one image",
            maxImages: "You can upload a maximum of 10 images",
            fileProcessing: "An error occurred while processing the image file",
            historyReuse: "Could not reuse the image from history",
            invalidKey: 'API Key is not valid or authorized. Please check and save your key again.',
            rateLimit: 'You have exceeded your quota. Please wait a moment and try again later.',
            network: 'A network connection error occurred. Please check your internet connection.',
            safety: 'Your prompt or image was blocked due to the safety policy. Please try a different prompt.',
            emptyResponse: 'The AI did not return any content. Please try modifying your prompt or image.',
            invalidArgument: 'There was an error with the data sent. Please check your prompt and images.',
            videoFinishedNoLink: "Video generation finished, but no download link was found.",
            apiError: (message) => `API Error: ${message}`,
        },
        service: {
            styleInstruction: (style) => `\n\nAdditional instruction: please generate this image in a ${style} style`,
            styleInstructionNoPrompt: (style) => `Recreate the uploaded image(s) in a ${style} style`,
            aspectRatioInstruction: (aspectRatio) => `\n\nImportant: Generate the image with a ${aspectRatio} aspect ratio.`,
            generatePromptInstruction: "Analyze these images and help generate a creative prompt in English for editing or extending them, focusing on imagining new and interesting scenes or styles.",
        }
    },
    cn: {
        appName: "图像生成器 Nano Banana",
        visitorCount: (count) => `访客: ${count}`,
        createdBy: "由 Candelaz Kengza 创建",
        apiKeyLabel: "Google AI API 密钥",
        apiKeyPlaceholder: "在此处输入您的 API 密钥...",
        saveButton: "保存",
        saveSuccess: "API 密钥已成功保存！",
        apiKeyInfo: "此应用程序需要来自",
        getApiKeyLink: "Google AI Studio",
        apiKeyNote: "的 Gemini API 密钥。您的密钥仅保存在您的浏览器中。",
        getApiKeyButton: "如何获取 API 密钥？",
        mainDescription: "上传图像并使用 AI 编辑、添加、删除对象、更改样式等等！",
        addImage: (count) => `添加图片 (${count}/10)`,
        inspiringPromptsButton: "灵感提示",
        adHelperTitle: "产品广告图助手",
        adHelperStudio: "工作室风格",
        adHelperLifestyle: "生活方式",
        adHelperNature: "自然风格",
        adHelperLuxurious: "奢华风格",
        modeLabel: "模式",
        modeImage: "图片",
        modeVideo: "视频",
        styleLabel: "风格",
        aspectRatioLabel: "宽高比",
        aspectRatioSquare: "方形",
        aspectRatioLandscape: "横向",
        aspectRatioPortrait: "纵向",
        styleSuggestion: (style) => `${style} 风格建议:`,
        promptPlaceholderImage: (example) => `试试: "${example}"`,
        promptPlaceholderVideo: "描述要生成的视频，例如“一只宇航员猫驾驶宇宙飞船”",
        promptPlaceholderDefault: "添加描述，例如“给猫加上生日帽”...",
        apiNotConfigured: "请在上方输入您的 API 密钥以启用。",
        generateImageButton: "生成图片",
        generateVideoButton: "生成视频",
        processingButton: "处理中...",
        resultTitle: "结果",
        saveResultTooltip: "保存此结果",
        downloadImageTooltip: "下载图片",
        shareImageTooltip: "分享图片",
        zoomInTooltip: "放大",
        zoomOutTooltip: "缩小",
        resetZoomTooltip: "重置",
        unsupportedShare: "您的浏览器不支持分享，或者没有可分享的图片。",
        downloadVideoButton: "下载视频",
        videoUnsupported: "您的浏览器不支持 video 标签。",
        historyTitle: "历史记录",
        clearHistoryButton: "清除历史记录",
        reuseImageTooltip: "重复使用此图片",
        uploaderTitle: "在此处拖放图片",
        uploaderSubtitle: "或点击选择文件",
        uploaderLimit: "（最多 10 张图片，PNG, JPG, WEBP）",
        galleryTitle: "您的参考图片",
        removeImageTooltip: "删除图片",
        imageLoadingMessages: [
            "正在初始化创意 AI...", "正在分析参考图片...", "正在通过艺术电路处理...", "正在用数字光绘画...", "正在添加最后润色...",
        ],
        videoLoadingMessages: [
            "准备生成视频...", "正在分析第一帧...", "AI 正在渲染动画...", "此步骤可能需要几分钟...", "正在组装最终视频...", "感谢您的耐心等待！",
        ],
        apiKeyModalTitle: "如何获取 Gemini API 密钥",
        apiKeyModalDescription: "请按照以下简单步骤获取您的 API 密钥：",
        apiKeyModalSteps: {
            step1: '前往',
            step2: '点击“创建 API 密钥”按钮。',
            step3: "选择您的 Google Cloud 项目，或创建一个新项目。",
            step4: "复制生成的 API 密钥。",
            step5: '将密钥粘贴到此应用程序的 API 密钥字段中，然后按“保存”。',
        },
        apiKeyModalNote: "注意：您的 API 密钥仅存储在您的浏览器中，不会发送到任何其他地方。",
        promptExamplesTitle: "提示示例",
        promptSearchPlaceholder: (category) => `在“${category}”中搜索...`,
        promptExamplesNotFound: "未找到匹配的提示",
        promptExamplesNotFoundHint: "尝试更改搜索词或选择其他类别。",
        selectPromptButton: "选择此提示",
        artisticStyles: {
            Default: '默认', Photorealistic: '写实', Anime: '动漫', Impressionist: '印象派',
            Cartoon: '卡通', Surreal: '超现实', Cyberpunk: '赛博朋克', Vintage: '复古',
            Fantasy: '奇幻', 'Sci-Fi': '科幻', Abstract: '抽象',
        },
        promptCategories: {
            popular: "热门", "3d": "3D 和渲染", photo: "写实和照片",
            fantasy: "奇幻和科幻", art: "艺术和绘画", character: "角色和人物",
            scape: "风景和建筑", cute: "可爱和贴纸", concept: "概念和抽象",
        },
        promptExamples: [
            {
                title: '3D 皮克斯风格气球', description: '将参考人脸变成一个可爱的、细节丰富的皮克斯风格 3D 气球角色。',
                prompt: `Using the reference face, generate a Pixar-style 3D balloon caricature with ultra-detailed sculpted skin, glossy shine, oversized cheeks, and a balloon knot at the bottom with a balloon string extending downward, while preserving the exact hairstyle and facial proportions from the reference. Maintain the closed-eye kissing expression with cinematic DOF and polished surreal toy-like aesthetics, using the same background and lighting as in the reference image.`,
            },
            {
                title: '汽车仪表盘上的 3D 人偶', description: '根据照片创建一个逼真的人形 3D 玩偶，放在汽车仪表盘上，旁边还有一个小包装盒。',
                prompt: `Create an ultra-high-resolution, hyper-realistic dashboard doll of the person in the attached photo. The doll must accurately replicate the person’s facial features, hairstyle, clothing, and pose exactly as in the original image. Place the doll on a car dashboard, fixed on a small round spring-mounted base that allows gentle bobble-head movement. Beside the doll, include a miniature packaging box. The car interior should be realistically detailed with blurred city street scenery visible outside the windshield.`,
            },
            {
                title: '与漫威团队的集体自拍', description: '创建一张逼真的集体自拍照，照片中有参考图片中的人物和漫威超级英雄。',
                prompt: `A hyper-realistic group selfie using the uploaded image (maintaining the original face, clothes, and natural look). The person is holding a smartphone to take the selfie, surrounded by Marvel members: Iron Man, Captain America, Thor, Hulk, Black Widow, and Spider-Man—all smiling and posing casually like close friends. Full-body view of everyone, looking like a real selfie in a city setting, natural daylight, cinematic quality, vibrant colors, photorealistic style.`,
            },
            {
                title: '书店里的微缩世界', description: '创建一个古雅迷人书店的微缩立体模型，细节惊人。',
                prompt: `A miniature diorama of a quaint bookstore, tiny books lining the shelves, a small armchair by a fireplace, cinematic lighting, hyperdetailed, 8k, photorealistic.`,
            },
            {
                title: '美味的食物摄影', description: '创建一张逼真诱人的煎饼照片，非常适合美食博客或菜单。',
                prompt: `A hyperrealistic photo of a stack of fluffy pancakes dripping with maple syrup, topped with fresh berries and a dusting of powdered sugar. Shot with a macro lens, shallow depth of field, warm morning light.`,
            },
        ],
        error: {
            default: "发生意外错误",
            apiKey: "使用前请输入您的 API 密钥",
            promptOrImage: "请输入描述或至少上传一张图片",
            maxImages: "您最多可以上传 10 张图片",
            fileProcessing: "处理图像文件时出错",
            historyReuse: "无法从历史记录中重复使用图像",
            invalidKey: 'API 密钥无效或未授权。请检查并重新保存您的密钥。',
            rateLimit: '您已超出配额。请稍等片刻再试。',
            network: '发生网络连接错误。请检查您的网络连接。',
            safety: '您的提示或图片因安全政策被阻止。请尝试其他提示。',
            emptyResponse: 'AI 未返回任何内容。请尝试修改您的提示或图片。',
            invalidArgument: '发送的数据有误。请检查您的提示和图片。',
            videoFinishedNoLink: "视频生成完成，但未找到下载链接。",
            apiError: (message) => `API 错误: ${message}`,
        },
        service: {
            styleInstruction: (style) => `\n\n附加说明：请以 ${style} 风格生成此图像`,
            styleInstructionNoPrompt: (style) => `以 ${style} 风格重新创建上传的图像`,
            aspectRatioInstruction: (aspectRatio) => `\n\n重要：以 ${aspectRatio} 的宽高比生成图像。`,
            generatePromptInstruction: "分析这些图像，并帮助用中文生成一个创意提示，用于编辑或扩展它们，重点是想象新的有趣的场景或风格。",
        }
    },
};
