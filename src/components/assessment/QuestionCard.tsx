import React from 'react';
import { Question } from '../../types/assessment';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | undefined;
  onAnswerSelect: (answer: string) => void;
}

export default function QuestionCard({ 
  question, 
  selectedAnswer, 
  onAnswerSelect 
}: QuestionCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswerSelect(option)}
            className={`w-full p-3 text-left rounded-md transition-colors ${
              selectedAnswer === option
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}