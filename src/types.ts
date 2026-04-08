
export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'evaluation' | 'text';
  duration?: string;
  completed: boolean;
  lastVisited?: boolean;
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  progress: number;
  modules: Module[];
}
