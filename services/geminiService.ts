// Fix: Provide the implementation for the Gemini API service.
// Fix: Replaced non-existent 'ContentPart' type with the correct 'Part' type.
import { GoogleGenAI, Modality, GenerateContentResponse, Part } from '@google/genai';
import { UploadedImage, Result, AspectRatio, ArtisticStyle, Language } from '../types';
import { translations } from '../locales/translations';

/**
 * Handles API errors by converting them into user-friendly messages.
 * @param error The error caught from the API call.
 * @param lang The current language for the error message.
 * @returns A user-friendly error string.
 */
const handleApiError = (error: unknown, lang: Language): string => {
    console.error('API Error:', error); // Log the full error for debugging
    const t = translations[lang].error;

    if (error instanceof Error) {
        const message = error.message.toLowerCase();
        
        if (message.includes('api key not valid') || message.includes('invalid api key') || message.includes('api_key_invalid')) {
            return t.invalidKey;
        }
        if (message.includes('rate limit') || message.includes('quota')) {
            return t.rateLimit;
        }
        if (message.includes('failed to fetch')) {
            return t.network;
        }
        if (message.includes('prompt was blocked') || message.includes('safety policy')) {
            return t.safety;
        }
        if (message.includes('empty response') || message.includes('no content generated')) {
            return t.emptyResponse;
        }
        if (message.includes('invalid argument')) {
            return t.invalidArgument;
        }
        return t.apiError(error.message);
    }
    return t.default;
};


export const editImageWithGemini = async (
  prompt: string,
  images: UploadedImage[],
  aspectRatio: AspectRatio,
  apiKey: string,
  lang: Language
): Promise<Result> => {
  const t = translations[lang];
  if (!apiKey) throw new Error(t.error.apiKey);
  const ai = new GoogleGenAI({ apiKey });

  if (!prompt && images.length === 0) {
    throw new Error(t.error.promptOrImage);
  }

  const model = 'gemini-2.5-flash-image-preview';
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

  // Construct prompt based on number of images
  if (images.length >= 2) {
      if (prompt.trim()) {
          finalPrompt = t.service.combineInstructionWithPrompt(prompt);
      } else {
          finalPrompt = t.service.combineInstructionNoPrompt;
      }
  } else if (images.length === 1 && prompt.trim()) {
      finalPrompt = t.service.editSingleImageWithPrompt(prompt);
  }

  // Add aspect ratio instruction to the prompt
  const fullPrompt = `${finalPrompt}${t.service.aspectRatioInstruction(aspectRatio)}`;

  if (fullPrompt.trim()) {
    parts.push({ text: fullPrompt });
  }

  try {
    const result: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: { parts: parts },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const finalResult: Result = {};

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
        const text = result.text;
        if(text) {
            finalResult.text = text;
        } else {
            throw new Error(t.error.emptyResponse);
        }
    }

    if (!finalResult.image && !finalResult.text) {
        throw new Error(t.error.emptyResponse);
    }

    return finalResult;
  } catch (error) {
    throw new Error(handleApiError(error, lang));
  }
};

export const inpaintImageWithGemini = async (
  prompt: string,
  originalImage: { base64: string; mimeType: string },
  maskImage: { base64: string; mimeType: string },
  apiKey: string,
  lang: Language
): Promise<Result> => {
  const t = translations[lang];
  if (!apiKey) throw new Error(t.error.apiKey);
  const ai = new GoogleGenAI({ apiKey });
  const model = 'gemini-2.5-flash-image-preview';
  
  const fullPrompt = t.service.inpaintInstruction(prompt);

  const parts: Part[] = [
    { inlineData: { data: originalImage.base64, mimeType: originalImage.mimeType } },
    { inlineData: { data: maskImage.base64, mimeType: maskImage.mimeType } },
    { text: fullPrompt },
  ];

  try {
    const result: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: { parts: parts },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const finalResult: Result = {};

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
      throw new Error(t.error.emptyResponse);
    }

    if (!finalResult.image) {
      throw new Error(t.error.emptyResponse);
    }
    
    return finalResult;
  } catch (error) {
    throw new Error(handleApiError(error, lang));
  }
};

export const generateImageWithImagen = async (
  prompt: string,
  aspectRatio: AspectRatio,
  apiKey: string,
  lang: Language
): Promise<Result> => {
  const t = translations[lang];
  if (!apiKey) throw new Error(t.error.apiKey);
  const ai = new GoogleGenAI({ apiKey });

  if (!prompt) {
    throw new Error(t.error.promptOrImage);
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
      throw new Error(t.error.emptyResponse);
    }

    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;

    return { image: imageUrl };
  } catch (error) {
    throw new Error(handleApiError(error, lang));
  }
};


export const generateVideoWithVeo = async (
  prompt: string,
  images: UploadedImage[],
  apiKey: string,
  lang: Language
): Promise<Result> => {
    const t = translations[lang];
    if (!apiKey) throw new Error(t.error.apiKey);
    const ai = new GoogleGenAI({ apiKey });

    if (!prompt) {
        throw new Error(t.error.promptOrImage);
    }

    const model = 'veo-2.0-generate-001';
    
    try {
        let operation = await ai.models.generateVideos({
            model: model,
            prompt: prompt,
            image: images.length > 0 ? {
                imageBytes: images[0].base64,
                mimeType: images[0].mimeType,
            } : undefined,
            config: {
                numberOfVideos: 1,
            },
        });

        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 10000));
            operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

        if (!downloadLink) {
            throw new Error(t.error.videoFinishedNoLink);
        }
        
        const finalUrl = `${downloadLink}&key=${apiKey}`;

        return { videoUrl: finalUrl };

    } catch (error) {
        throw new Error(handleApiError(error, lang));
    }
};
