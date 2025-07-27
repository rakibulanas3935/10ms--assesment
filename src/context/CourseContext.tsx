/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { getCourseData } from '@/lib/utils';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useParams } from 'next/navigation';

type Course = any; // Replace with exact type if known

type CourseContextType = {
  course: Course | null;
  loading: boolean;
  error: string | null;
  refreshCourse: () => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const locale = (params?.locale || 'bn') as 'en' | 'bn';

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourse = async () => {
    setLoading(true);
    setError(null);
    const data = await getCourseData(locale);
    if (data) {
      setCourse(data);
    } else {
      setError('Failed to fetch course data');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourse();
  }, [locale]);

  return (
    <CourseContext.Provider
      value={{ course, loading, error, refreshCourse: fetchCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourseContext must be used within CourseProvider');
  }
  return context;
};
