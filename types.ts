
export interface FaceAnalysisResult {
  symmetryScore: number;
  faceShape: string;
  features: {
    eyes: { shape: string; symmetry: string; detail: string };
    nose: { shape: string; symmetry: string; detail: string };
    lips: { shape: string; symmetry: string; detail: string };
    jawline: { shape: string; symmetry: string; detail: string };
    eyebrows: { shape: string; symmetry: string; detail: string };
  };
  landmarks: Array<{ x: number; y: number; label: string }>;
  suggestions: string[];
}

export interface HeightPrediction {
  potential: number;
  range: [number, number];
  platesStatus: 'Open' | 'Closed' | 'Likely Closed';
  recommendations: string[];
}

export enum AppTab {
  HOME = 'home',
  SYMMETRY = 'symmetry',
  EDITOR = 'editor',
  INTERACTION = 'interaction',
  HEIGHT = 'height',
  IMAGEN = 'imagen',
  VEO = 'veo',
  ABOUT = 'about'
}
