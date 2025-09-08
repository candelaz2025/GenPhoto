// Fix: Define interfaces for data structures used throughout the application.
export interface UploadedImage {
  id: string;
  file: File;
  previewUrl: string;
  base64: string;
  mimeType: string;
}

export interface Result {
  image?: string; // base64 encoded image with data URI
  text?: string;
  videoUrl?: string; // URL for the generated video
}

export interface HistoryItem {
  id: string;
  imageUrl: string;
  text?: string;
}

export type AspectRatio = '1:1' | '16:9' | '9:16';

export type ArtisticStyle = 'Default' | 'Photorealistic' | 'Anime' | 'Impressionist' | 'Cartoon' | 'Surreal' | 'Cyberpunk' | 'Vintage' | 'Fantasy' | 'Sci-Fi' | 'Abstract';

export type FontStyle = 'Default' | 'Serif' | 'Sans-serif' | 'Script' | 'Display' | 'Handwriting' | 'Futuristic';

export type Language = 'th' | 'en' | 'cn';