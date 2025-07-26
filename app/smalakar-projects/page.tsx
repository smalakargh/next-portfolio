import DotGrid from '@/rended-components/Dotted-particle'
import ProjectsBox from '@/sm-components/Projects-Box'
import React from 'react'

function page() {
  return (
    <>
    <main className='relative min-h-screen bg-[#b5b2b5]'>
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
    <div className='w-full min-h-screen flex flex-col p-4 md:p-9 gap-4 bg-[#9d9a9d]'>
      {/* <nav className='border-amber-700 border flex justify-center p-4'>Projects</nav> */}
      <section className='w-full min-h-screen flex-center flex-wrap bg-[#b5b2b5] border-2 border-white rounded-md'>
        <ProjectsBox imgLink={'/Projects/01PJ.png'} imgName='Project1' />
      </section>
    </div>
    </>
  )
}

export default page