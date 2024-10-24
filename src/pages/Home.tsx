import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function Home() {
  const level = useStore((state) => state.level);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Brazilian Portuguese!
      </h1>
      
      <div className="grid grid-cols-2 gap-6">
        <Link to="/assessment" 
          className="p-6 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
          <h2 className="text-xl font-bold mb-2">Assessment</h2>
          <p>Test your Portuguese level</p>
        </Link>

        <Link to="/flashcards"
          className="p-6 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
          <h2 className="text-xl font-bold mb-2">Flashcards</h2>
          <p>Learn vocabulary and grammar</p>
        </Link>

        <Link to="/culture"
          className="p-6 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors">
          <h2 className="text-xl font-bold mb-2">Culture</h2>
          <p>Discover Brazilian culture</p>
        </Link>

        <Link to="/progress"
          className="p-6 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
          <h2 className="text-xl font-bold mb-2">Progress</h2>
          <p>Track your learning journey</p>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl">Current Level: <span className="font-semibold">{level}</span></p>
      </div>
    </div>
  );
}