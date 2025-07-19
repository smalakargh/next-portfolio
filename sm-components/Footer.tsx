"use client"
import Image from 'next/image'
import Logo from '../public/logos/Favicon-png.png'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IoMailOutline } from 'react-icons/io5'

function Footer() {
  return (
    <main className='relative'>
        <div className='bg-[#706f70] w-full h-[450px] md:h-[300px]'></div>
    <div className='absolute top-0 border-1 border-amber-50
    bg-gradient-to-r from-[#686769] to-[#686669] 
     backdrop-blur-[2px] w-[calc(100%-30px)] h-[calc(100%-30px)] ml-[15px] mt-[15px] rounded-[9px]
    flex flex-col  justify-between px-[30px] py-[60px] md:p-[60px] text-white'>
        <div className='flex w-full justify-between flex-col md:flex-row items-center gap-9'>
        <div className='flex justify-center items-start gap-2 md:w-[30%]  font-[600]'>
            <Image src={Logo} alt='Smalakar-logo' width={40} height={40}/>
            <p><span className='caveat text-[30px] font-[100]'>Smalakar</span> — Elevating ideas through elegant craftsmanship, brewed with a ☕cup of tea and late-night clarity.</p>
        </div>
        <div className='flex-center flex-col'>Connect
          <div className='rounded-md border px-4 py-2'>
            <ul className='flex gap-3 text-[30px]'>
              <li><a href=""><FaLinkedinIn /></a></li>
              <li><a href=""><FaGithub /></a></li>
              <li><a href=""><IoMailOutline /></a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className='w-full flex-center text-[9px] md:text-[14px] gap-1 font-[600]'>© {new Date().getFullYear()} Smalakar | made with ❤️ by <span className='caveat text-[15px] md:text-[24px] font-[100]'>Supriyo Malakar</span></div>
     </div>
    </main>
  )
}

export default Footer