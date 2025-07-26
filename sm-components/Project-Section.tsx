import Image from 'next/image'
import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function ProjectSec() {
  return (
    <main className='bg-neutral-400 p-4'>
        <div className='bg-neutral-500 h-fit border-2 border-zinc-700 rounded-md p-6 md:p-20 text-white overflow-hidden relative flex flex-col md:flex-row-reverse gap-9'> 
            <div className='text-[12px] md:text-[20px] flex md:justify-center md:items-center flex-col gap-6 '>"A collection of thoughtful builds—AI-powered, modular, and responsive. Every project reflects my passion for clarity, design, automation, and secure engineering across devices and real-world developer workflows."
                <button className='bg-gradient-to-tr from-purple-500 to-blue-500 px-8 py-1 rounded-[5px] flex-center gap-2 font-bold'>PROJECTS <FaArrowUpRightFromSquare /> </button>
            </div>
            <img src='/Extras/VscodeBase.png' alt='CodeBase' className='absolute opacity-15 top-[0px] left-[0px] w-[100%] h-[100%]' />
            <img src='/Extras/project-sec.png' alt='CodeBase' className='rounded-sm relative lg:bottom-[-100px] left-[60px] lg:left-[-20px] md:w-[500px] border border-white' />
        </div>
    </main>
  )
}

export default ProjectSec
