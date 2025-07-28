'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

interface features {
  title: string;
  checklist: string[];
  file_url: string;
  imageAlt: string;
}

interface CourseFeatureProps {
	cousrseFeature: features[];
	heading?: string;
}


export default function CourseFeatures({
  cousrseFeature,
  heading = '',
}: CourseFeatureProps) {

  console.log(cousrseFeature)
  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-10 bg-white">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-6 text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>

      <div className="space-y-12">
        {cousrseFeature?.map((feature, index) => (
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
                {feature?.checklist?.map((point, i) => (
                  <li key={i+1} className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <Image
                src={feature?.file_url}
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
