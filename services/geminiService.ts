// Fix: Provide the implementation for the Gemini API service.
// Fix: Replaced non-existent 'ContentPart' type with the correct 'Part' type.
import { GoogleGenAI, Modality, GenerateContentResponse, Part } from '@google/genai';
import { UploadedImage, Result, AspectRatio, ArtisticStyle } from '../types';

export const editImageWithGemini = async (
  prompt: string,
  images: UploadedImage[],
  aspectRatio: AspectRatio,
  style: ArtisticStyle,
  apiKey: string
): Promise<Result> => {
  if (!apiKey) throw new Error('API Key is required.');
  const ai = new GoogleGenAI({ apiKey });

  if (!prompt && images.length === 0) {
    throw new Error('Please provide a prompt or at least one image.');
  }

  // Fix: Use the 'gemini-2.5-flash-image-preview' model for image editing tasks as per guidelines.
  const model = 'gemini-2.5-flash-image-preview';

  // Fix: Updated variable type to use 'Part' instead of 'ContentPart'.
  const parts: Part[] = [];

  for (const image of images) {
    parts.push({
      inlineData: {
        data: image.base64,
        mimeType: image.mimeType,
      },
    });
  }

  let finalPrompt = prompt;
  if (style !== 'Default') {
    const styleInstruction = `\n\nคำสั่งเพิ่มเติม: ช่วยสร้างภาพนี้ในสไตล์ ${style}`;
    if (prompt) {
      finalPrompt += styleInstruction;
    } else {
      finalPrompt = `สร้างสรรค์ภาพที่อัปโหลดขึ้นมาใหม่ในสไตล์ ${style}`;
    }
  }

  // Add aspect ratio instruction to the prompt
  const fullPrompt = `${finalPrompt}\n\nImportant: Generate the image with a ${aspectRatio} aspect ratio.`;

  if (fullPrompt.trim()) {
    parts.push({ text: fullPrompt });
  }

  try {
    // Fix: Use ai.models.generateContent to make the API call.
    const result: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: { parts: parts },
      // Fix: responseModalities must include both IMAGE and TEXT for this model.
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const finalResult: Result = {};

    // Fix: Correctly extract text and image data from the response candidates.
    if (result.candidates && result.candidates.length > 0) {
        for (const part of result.candidates[0].content.parts) {
          if (part.text) {
            finalResult.text = (finalResult.text || "") + part.text;
          } else if (part.inlineData) {
            const base64ImageBytes: string = part.inlineData.data;
            const mimeType = part.inlineData.mimeType;
            finalResult.image = `data:${mimeType};base64,${base64ImageBytes}`;
          }
        }
    } else {
        // Fix: Use the direct .text property as a fallback, per guidelines.
        const text = result.text;
        if(text) {
            finalResult.text = text;
        } else {
            throw new Error('No content generated. Please try again.');
        }
    }


    if (!finalResult.image && !finalResult.text) {
        throw new Error('The API returned an empty response. Please check your prompt and images.');
    }

    return finalResult;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate content: ${error.message}`);
    }
    throw new Error('An unknown error occurred while calling the Gemini API.');
  }
};

export const generateImageWithImagen = async (
  prompt: string,
  aspectRatio: AspectRatio,
  apiKey: string
): Promise<Result> => {
  if (!apiKey) throw new Error('API Key is required.');
  const ai = new GoogleGenAI({ apiKey });

  if (!prompt) {
    throw new Error('Please provide a prompt.');
  }

  const model = 'imagen-4.0-generate-001';

  try {
    const response = await ai.models.generateImages({
      model: model,
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: aspectRatio,
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error('The API returned no images. Please try a different prompt.');
    }

    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;

    const finalResult: Result = {
      image: imageUrl,
    };

    return finalResult;
  } catch (error) {
    console.error('Error calling Imagen API:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate image: ${error.message}`);
    }
    throw new Error('An unknown error occurred while calling the Imagen API.');
  }
};


export const generatePromptFromImages = async (
  images: UploadedImage[],
  apiKey: string
): Promise<string> => {
  if (!apiKey) throw new Error('API Key is required.');
  if (images.length === 0) {
    throw new Error('At least one image is required to generate a prompt.');
  }
  const ai = new GoogleGenAI({ apiKey });
  const model = 'gemini-2.5-flash';

  const parts: Part[] = images.map(image => ({
    inlineData: {
      data: image.base64,
      mimeType: image.mimeType,
    },
  }));
  
  parts.push({ text: "วิเคราะห์รูปภาพเหล่านี้และช่วยสร้าง prompt ที่สร้างสรรค์สำหรับแก้ไขหรือต่อยอดรูปภาพนี้เป็นภาษาไทย โดยเน้นไปที่การจินตนาการถึงฉากหรือสไตล์ใหม่ๆ ที่น่าสนใจ" });

  try {
    const result = await ai.models.generateContent({
      model: model,
      contents: { parts: parts },
    });
    const text = result.text;
    if (!text) {
      throw new Error('AI did not return a prompt.');
    }
    return text.trim();
  } catch (error) {
    console.error('Error generating prompt from images:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate prompt: ${error.message}`);
    }
    throw new Error('An unknown error occurred while generating the prompt.');
  }
};

export const generateRandomCreativePrompt = async (apiKey: string): Promise<string> => {
    if (!apiKey) throw new Error('API Key is required.');
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';

    const prompt = "สร้าง prompt ที่สร้างสรรค์สำหรับแก้ไขรูปภาพด้วย AI เป็นภาษาไทย โดยเน้นไปที่การจินตนาการถึงฉากหรือสไตล์ใหม่ๆ ที่น่าสนใจ ไม่ต้องอิงจากรูปภาพใดๆ แค่เป็นไอเดียเจ๋งๆ สั้นๆ กระชับ";

    try {
        const result = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        const text = result.text;
        if (!text) {
            throw new Error('AI did not return a prompt.');
        }
        return text.trim();
    } catch (error) {
        console.error('Error generating random prompt:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate prompt: ${error.message}`);
        }
        throw new Error('An unknown error occurred while generating the prompt.');
    }
};