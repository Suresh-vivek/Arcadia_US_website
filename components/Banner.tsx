import React from 'react'

export default function Banner() {
  return (
    <div className='flex flex-col sm:flex-row px-4 sm:px-10 md:px-20 lg:px-40 py-8 sm:py-12 md:py-16 justify-between items-center text-[#4c4c4c]'>
      <div className='text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-0'>
        <h1>Machine Learning</h1>
        <h1>Chat bot & Voice bot</h1>
      </div>
      <div className='text-lg sm:text-xl md:text-2xl'>
        <h1>Boost efficiency, optimize tasks and enhance guest</h1>
        <h1>experiences with Arcadia's innovative AI-driven solutions</h1>
      </div>
    </div>
  )
}