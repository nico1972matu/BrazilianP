export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

export const assessmentQuestions: Question[] = [
    {
        id: '1',
        text: 'What does "Bom dia" mean?',
        options: ['Good morning', 'Good afternoon', 'Good night', 'Hello'],
        correctAnswer: 'Good morning',
        level: 'beginner'
    },
    {
        id: '2',
        text: 'Which word means "Beach"?',
        options: ['Praia', 'Montanha', 'Cidade', 'Rua'],
        correctAnswer: 'Praia',
        level: 'beginner'
    }
];