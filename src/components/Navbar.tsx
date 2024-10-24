import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function Navbar() {
  const points = useStore((state) => state.points);

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Aprenda Português
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/assessment" className="hover:text-green-200">Assessment</Link>
            <Link to="/flashcards" className="hover:text-green-200">Flashcards</Link>
            <Link to="/culture" className="hover:text-green-200">Culture</Link>
            <Link to="/progress" className="hover:text-green-200">Progress</Link>
            <span className="bg-green-700 px-3 py-1 rounded">
              Points: {points}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}