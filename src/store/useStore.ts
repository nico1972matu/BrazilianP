import { create } from 'zustand';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface UserState {
  level: Level;
  points: number;
  completedLessons: string[];
  setLevel: (level: Level) => void;
  addPoints: (points: number) => void;
  addCompletedLesson: (lessonId: string) => void;
}

export const useStore = create<UserState>((set) => ({
  level: 'beginner',
  points: 0,
  completedLessons: [],
  setLevel: (level) => set({ level }),
  addPoints: (points) => set((state) => ({ points: state.points + points })),
  addCompletedLesson: (lessonId) =>
    set((state) => ({
      completedLessons: [...state.completedLessons, lessonId],
      points: state.points + 10,
    })),
}));