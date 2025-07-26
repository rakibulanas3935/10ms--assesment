'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export type CardItem = {
  icon: string;
  title: string;
  subtitle: string;
  color?: string;
};

type Props = {
  cards: CardItem[];
  heading?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const CourseOverview = ({
  cards,
  heading = 'কোর্সটি যেভাবে সাজানো হয়েছে',
}: Props) => {
  return (
    <section className="w-full cursor-pointer py-10 px-4 sm:px-6 lg:px-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold mb-6 text-black"
      >
        {heading}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index + 1}
            className={`${
              card.color || 'bg-[#0f172a]'
            } text-white rounded-lg shadow-md p-6 flex gap-4 items-start`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div className="min-w-[40px] h-[40px] relative mt-1">
              <Image
                src={card.icon}
                alt={card.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseOverview;
