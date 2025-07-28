import Image from "next/image";
import { motion } from 'motion/react';
interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  color: string;
  list_page_visibility: boolean;
}

interface Props {
  checklist: ChecklistItem[];
  heading:string
}

export default function CourseChecklist({ checklist ,heading}: Props) {


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
      <ul className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4">
        {checklist?.map((item) => (
          <li key={item?.id} className="flex items-start gap-3">
            <Image
              src={item?.icon}
              alt="Checklist Icon"
              width={20}
              height={20}
              className="mt-1"
            />
            <p className="text-gray-800 text-base leading-relaxed">{item?.text}</p>
          </li>
        ))}
      </ul>
      </section>
 
  );
}
