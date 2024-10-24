import { Question } from '../types/assessment';

export const assessmentQuestions: Question[] = [
  {
    id: '1',
    category: 'vocabulary',
    text: 'Qual é o significado da palavra "casa"?',
    options: ['School', 'House', 'Car'],
    correctAnswer: 'House'
  },
  {
    id: '2',
    category: 'vocabulary',
    text: 'Como se diz "hello" em português?',
    options: ['Oi', 'Tchau', 'Obrigado'],
    correctAnswer: 'Oi'
  },
  // ... adding first 10 questions as example, more can be added similarly
  {
    id: '10',
    category: 'grammar',
    text: 'Qual é o plural de "mesa"?',
    options: ['Mesas', 'Mesa', 'Meso'],
    correctAnswer: 'Mesas'
  }
];