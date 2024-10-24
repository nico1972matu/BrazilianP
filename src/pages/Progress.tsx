import React from 'react';
import { useStore } from '../store/useStore';

export default function Progress() {
  const level = useStore((state) => state.level);
  const points = useStore((state) => state.points);
  const completedLessons = useStore((state) => state.completedLessons);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Progress</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Current Level</h2>
          <p className="text-lg capitalize">{level}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Total Points</h2>
          <p className="text-lg">{points}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Completed Lessons</h2>
          <p className="text-lg">{completedLessons.length}</p>
        </div>
      </div>
    </div>
  );
}