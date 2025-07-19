import DotGrid from '@/rended-components/Dotted-particle'
import React from 'react'

function page() {
  return (
    <main className='relative h-screen bg-[#b5b2b5]'>
        <div className='w-full h-screen'>
              <DotGrid
                  dotSize={6}
                  gap={15}
                  baseColor="#686669"
                  activeColor="#fff"
                  proximity={120}
                  shockRadius={250}
                  shockStrength={5}
                  resistance={750}
                  returnDuration={1.5}
              />
        </div>
    <div className='h-full w-full absolute top-0  flex-center flex-wrap text-white backdrop-blur-[4px]'>
        <div>
        <p className='flex items-baseline gap-2 xl:gap-9'><span className='caveat text-[60px] xl:text-[160px] text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text font-[500]'>Smalakar's</span>
        <span className='text-[10px] xl:text-[40px] font-[600]'>Projects</span></p>
        </div>
    </div>
    </main>
  )
}

export default page