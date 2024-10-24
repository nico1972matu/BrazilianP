import React from 'react';
import { AssessmentResult } from '../../types/assessment';

interface ResultCardProps {
  result: AssessmentResult;
  onRetake: () => void;
}

export default function ResultCard({ result, onRetake }: ResultCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Assessment Complete!</h2>
      <div className="space-y-4">
        <p className="text-lg">
          Score: {result.score} out of {result.totalQuestions}
        </p>
        <p className="text-lg">
          Level: <span className="capitalize font-semibold">{result.level}</span>
        </p>
        <button
          onClick={onRetake}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Retake Assessment
        </button>
      </div>
    </div>
  );
}