import { useState } from 'react';
import { flashcards } from '../data/flashcards';

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 min-h-[400px] flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            {isFlipped ? currentCard.english : currentCard.portuguese}
          </h2>
          
          {isFlipped && (
            <div className="space-y-4">
              <p className="text-lg">{currentCard.example}</p>
              {currentCard.culturalNote && (
                <p className="text-gray-600 italic">{currentCard.culturalNote}</p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isFlipped ? 'Show Portuguese' : 'Show English'}
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
            className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-4 text-center text-gray-600">
        Card {currentIndex + 1} of {flashcards.length}
      </div>
    </div>
  );
}