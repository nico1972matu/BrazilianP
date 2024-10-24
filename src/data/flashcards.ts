export interface Flashcard {
  id: string;
  portuguese: string;
  english: string;
  category: string;
  example: string;
  culturalNote?: string;
  image?: string;
}

export const flashcards: Flashcard[] = [
  {
    id: '1',
    portuguese: 'Pão de Açúcar',
    english: 'Sugarloaf Mountain',
    category: 'landmarks',
    example: 'O Pão de Açúcar é um ponto turístico no Rio de Janeiro.',
    culturalNote: 'This iconic mountain in Rio de Janeiro was named for its resemblance to traditional sugar loaf blocks.'
  },
  {
    id: '2',
    portuguese: 'Samba',
    english: 'Samba',
    category: 'culture',
    example: 'O samba é um ritmo brasileiro.',
    culturalNote: 'Samba is Brazil\'s most famous music and dance style, especially during Carnaval.'
  },
  {
    id: '3',
    portuguese: 'Feijoada',
    english: 'Brazilian Black Bean Stew',
    category: 'food',
    example: 'A feijoada é um prato típico brasileiro.',
    culturalNote: 'This hearty dish is considered Brazil\'s national dish, traditionally served on Saturdays.'
  }
];