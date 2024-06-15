'use client'
import React from 'react'
import { motion } from 'framer-motion'

const bannerVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function Banner() {
  return (
    <div className='flex flex-col sm:flex-row px-4 sm:px-10 md:px-20 lg:px-40 py-8 sm:py-12 md:py-16 justify-between items-center text-[#4c4c4c]'>
      <motion.div
      className='text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-0'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 60 }}
      variants={bannerVariants}
    >
      <h1>Machine Learning</h1>
      <h1>Chat bot & Voice bot</h1>
    </motion.div>
    <motion.div
      className='text-lg sm:text-xl md:text-2xl'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 60 }}
      variants={bannerVariants}
    >
      <h1>Boost efficiency, optimize tasks and enhance guest</h1>
      <h1>experiences with Arcadia&apos;s innovative AI-driven solutions</h1>
    </motion.div>
    </div>
  )
}