'use client';

import { FaCheck } from 'react-icons/fa';

const learnPoints: string[] = [
  'Detailed rules and regulations of each module of the IELTS test',
  'Formats and strategies to ace the IELTS test',
  'Proper structure and essay type for scoring well in IELTS writing task 1 and 2',
  'Speaking accurately on any topic in the IELTS speaking test',
  'Time management strategy to get a good band score in the IELTS test',
  'Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.',
];

const OutCome = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-10 bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2563eb] mb-6">
        What you will learn by doing the course
      </h2>

      <div className="border rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
        {learnPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <FaCheck className="text-blue-500 mt-1 flex-shrink-0" />
            <p className="text-sm md:text-base text-gray-800">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutCome;
