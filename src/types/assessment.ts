export type QuestionCategory = 
  | 'vocabulary' 
  | 'grammar' 
  | 'listening' 
  | 'reading' 
  | 'conversation'
  | 'numbers'
  | 'culture'
  | 'expressions'
  | 'verbs'
  | 'comprehension';

export interface Question {
  id: string;
  category: QuestionCategory;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface AssessmentResult {
  score: number;
  totalQuestions: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface AssessmentState {
  currentQuestion: number;
  answers: Record<string, string>;
  isComplete: boolean;
  result: AssessmentResult | null;
}