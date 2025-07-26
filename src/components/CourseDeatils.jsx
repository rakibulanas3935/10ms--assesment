'use client';

import { useState } from 'react';
import { FaPlayCircle, FaLock, FaFileAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type ContentItem = {
  id: number;
  type: 'video' | 'file' | 'locked';
  title: string;
  isFree: boolean;
};

type Section = {
  title: string;
  items: ContentItem[];
};

const courseSections: Section[] = [
  {
    title: 'Introduction',
    items: [
      { id: 1, type: 'video', title: 'Video: IELTS: Introduction', isFree: true },
      { id: 2, type: 'video', title: 'Video: IELTS: Overview', isFree: true },
      { id: 3, type: 'video', title: 'Video: How to Prepare for IELTS?', isFree: true },
      { id: 4, type: 'video', title: 'Video: Making a Daily Routine', isFree: true },
      { id: 5, type: 'locked', title: 'Video: Different Sentence Structures to Improve Writing', isFree: false },
      { id: 6, type: 'file', title: 'IELTS General Facts', isFree: false },
      { id: 7, type: 'file', title: 'IELTS Vocabulary', isFree: false },
    ],
  },
  {
    title: 'IELTS Course by Munzereen Shahid | Exclusive Support Group',
    items: [],
  },
  {
    title: 'Academic Reading',
    items: [],
  },
  {
    title: 'Academic Reading Mock Test',
    items: [],
  },
];

const getIcon = (type: string) => {
  if (type === 'video') return <FaPlayCircle className="text-green-500 text-lg mt-1" />;
  if (type === 'file') return <FaFileAlt className="text-gray-400 text-lg mt-1" />;
  return <FaLock className="text-gray-400 text-lg mt-1" />;
};

export default function CourseContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-10 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Course details</h2>

      <div className="border rounded-lg overflow-hidden bg-white divide-y">
        {courseSections.map((section, index) => (
          <div key={index}>
            {/* Accordion Header */}
            <button
              className="w-full text-left px-6 py-4 font-semibold bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => toggleIndex(index)}
            >
              <span>{section.title}</span>
              <span>{openIndex === index ? '▴' : '▾'}</span>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {openIndex === index && section.items.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-6 pb-4 pt-2 space-y-4"
                >
                  {section.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start gap-3">
                      <div className="flex items-start gap-2">
                        {getIcon(item.type)}
                        <p className="text-sm text-gray-800">{item.title}</p>
                      </div>
                      {item.isFree && (
                        <span className="text-sm text-green-600 font-medium">ফ্রি দেখুন</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
