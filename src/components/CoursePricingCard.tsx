'use client';

import { motion } from 'motion/react';
import {
  Users,
  Clock,
  Video,
  FileText,
  BookOpen,
  Facebook,
  Calendar,
  Phone,
} from 'lucide-react';

export default function CoursePricingCard() {
  const features = [
    { icon: <Users size={18} />, label: 'Total Enrolled 33007' },
    { icon: <Clock size={18} />, label: 'Time Required 50 hours' },
    { icon: <Video size={18} />, label: '54 Videos' },
    { icon: <FileText size={18} />, label: '10 Reading & 10 Listening Mocktests' },
    { icon: <FileText size={18} />, label: '38 Lecture Sheets' },
    { icon: <Video size={18} />, label: '25 Video Lectures' },
    { icon: <BookOpen size={18} />, label: '1 Free Hardcopy Book Delivered' },
    { icon: <Facebook size={18} />, label: 'Facebook Support Group' },
    { icon: <Calendar size={18} />, label: 'Course Validity Lifetime' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="md:sticky md:top-24 bg-white border rounded-lg shadow p-6 w-full max-w-md"
    >
      <div className="mb-4">
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
          <span>৳3850</span>
          <span className="line-through text-gray-500 text-lg">৳5000</span>
          <span className="bg-orange-500 text-white text-sm px-2 py-0.5 rounded-full">
            1150 ৳ ছাড়
          </span>
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mb-6">
        Enroll
      </button>

      <h3 className="font-semibold text-gray-800 mb-4 text-base">এই কোর্সে যা থাকছে</h3>
      <ul className="space-y-3 mb-6">
        {features.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <div className="pt-0.5">{item.icon}</div>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="text-center border-t pt-4 text-sm text-gray-600">
        কোর্সটি সম্পর্কে বিস্তারিত জানতে <br />
        <span className="text-green-600 font-semibold inline-flex items-center gap-1 mt-1 cursor-pointer">
          <Phone size={14} />
          ফোন করুন (16910)
        </span>
      </div>
    </motion.div>
  );
}
