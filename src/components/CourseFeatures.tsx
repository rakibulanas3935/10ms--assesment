'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'ভিডিও লেকচার',
    points: [
      'IELTS Academic ও General Training নিয়ে আলোচনা',
      'Reading, Writing, Listening ও Speaking এর Overview & Format',
      'প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্রাটেজি',
      'ভিডিওর সাথে প্র্যাকটিসের সুযোগ',
    ],
    image: '/assets/lectures.jpg',
    imageAlt: 'Video Lectures',
  },
  {
    title: 'Reading ও Listening Mock Tests',
    points: [
      '10 Reading & 10 Listening Mock Tests',
      'Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স',
      'উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট',
      'যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট',
    ],
    image: '/assets/mocktests.jpg',
    imageAlt: 'Mock Tests',
  },
];

export default function CourseFeatures() {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-blue-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Course Exclusive Feature
      </motion.h2>

      <div className="space-y-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 bg-white shadow rounded-xl p-6 border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={400}
                height={300}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
