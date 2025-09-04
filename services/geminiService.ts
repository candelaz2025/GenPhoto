// Fix: Provide the implementation for the Gemini API service.
// Fix: Replaced non-existent 'ContentPart' type with the correct 'Part' type.
import { GoogleGenAI, Modality, GenerateContentResponse, Part } from '@google/genai';
import { UploadedImage, Result, AspectRatio } from '../types';

// Fix: Correctly initialize GoogleGenAI with a named apiKey parameter from environment variables.
const ai = new GoogleGenAI({apiKey: process.env.API_KEY as string});

export const editImageWithGemini = async (
  prompt: string,
  images: UploadedImage[],
  aspectRatio: AspectRatio,
): Promise<Result> => {
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

  // Add aspect ratio instruction to the prompt
  const fullPrompt = `${prompt}\n\nImportant: Generate the image with a ${aspectRatio} aspect ratio.`;

  if (fullPrompt) {
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


export const generateVideoWithGemini = async (
  prompt: string,
  images: UploadedImage[]
): Promise<Result> => {
  if (images.length === 0) {
    throw new Error('Video generation requires at least one reference image.');
  }

  const referenceImage = images[0];

  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-2.0-generate-001',
      prompt: prompt,
      image: {
        imageBytes: referenceImage.base64,
        mimeType: referenceImage.mimeType,
      },
      config: {
        numberOfVideos: 1
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }
    
    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

    if (downloadLink) {
        // As per docs, we need to fetch the video bytes from the URI with the API key
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        if (!videoResponse.ok) {
            throw new Error(`Failed to download the generated video. Status: ${videoResponse.statusText}`);
        }
        const videoBlob = await videoResponse.blob();
        const videoUrl = URL.createObjectURL(videoBlob);
        return { videoUrl };
    }

    throw new Error('Video generation did not return a valid link.');

  } catch (error) {
    console.error('Error calling Gemini Video API:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate video: ${error.message}`);
    }
    throw new Error('An unknown error occurred while calling the Gemini Video API.');
  }
};