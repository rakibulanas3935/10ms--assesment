'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

const HeaderBanner = () => {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative w-full"
        >
          <Link href="/kids-english" className="block">
            <Image
              src="/topHeader.jpg"
              alt="Kids English"
              width={1920}
              height={100}
              className="w-full h-auto object-cover"
              priority
            />
          </Link>

          {/* Close Icon */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close banner"
            className="absolute top-2 right-3 text-white bg-black/40 hover:bg-black/70 p-1 rounded-full transition"
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HeaderBanner
