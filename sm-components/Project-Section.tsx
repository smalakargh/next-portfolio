import React from 'react'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function ProjectSec() {
  return (
    <main className='bg-neutral-400 p-4'>
      <div className='relative flex flex-col md:flex-row-reverse gap-9 bg-neutral-500 border-2 border-zinc-700 rounded-md p-6 md:p-20 text-white overflow-hidden'>

        {/* Description + Button */}
        <div className='flex flex-col gap-6 text-[12px] md:text-[20px] md:justify-center md:items-center z-10'>
          <p>
            "A collection of thoughtful builds—AI-powered, modular, and responsive. Every project reflects my passion for clarity, design, automation, and secure engineering across devices and real-world developer workflows."
          </p>
          <Link
            href='/smalakar-projects'
            aria-label='Explore detailed projects'
            className='flex items-center justify-center gap-2 bg-gradient-to-tr from-purple-500 to-blue-500 px-8 py-1 rounded-[5px] font-bold cursor-pointer hover:shadow-lg transition-shadow duration-200'
          >
            PROJECTS <FaArrowUpRightFromSquare />
          </Link>
        </div>

        {/* Hero Image */}
        <img
          src='/Extras/project-sec.png'
          alt='Project Showcase'
          className='relative lg:bottom-[-100px] left-[60px] lg:left-[-20px] md:w-[500px] border border-white rounded-sm z-10'
        />

        {/* Background Layer */}
        <img
          src='/Extras/VscodeBase.png'
          alt='CodeBase Background'
          className='absolute opacity-15 top-0 left-0 w-full h-full object-cover z-0'
        />
        
      </div>
    </main>
  )
}

export default ProjectSec
