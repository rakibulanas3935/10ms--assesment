'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type AccordionItem = {
  id: string;
  title: string;
  description: string;
};

interface Props {
  data: AccordionItem[];
  heading:''
}

export default function CourseDetails({ data ,heading}: Props) {
  const [openIndex, setOpenIndex] = useState<string | null>(data[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenIndex(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">{heading}</h2>

      {data?.map((item) => (
        <div key={item?.id} className="border-t py-4">
          <button
            className="w-full flex justify-between items-center font-semibold text-left"
            onClick={() => toggleItem(item?.id)}
          >
            <div
              className="text-base"
              dangerouslySetInnerHTML={{ __html: item?.title }}
            />
            {openIndex === item?.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openIndex === item?.id && (
            <div
              className="mt-3 text-gray-700 leading-relaxed text-sm space-y-2"
              dangerouslySetInnerHTML={{ __html: item?.description }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
