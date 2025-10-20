import DotGrid from '@/rended-components/Dotted-particle'
import ProjectsBox from '@/sm-components/Projects-Box'
import Link from 'next/link'
import React from 'react'
import { FaArrowDown, FaArrowLeft } from 'react-icons/fa6'

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
        <div className='flex flex-col gap-3'>
        <p className='flex items-baseline gap-2 xl:gap-9'><span className='caveat text-[60px] xl:text-[160px] text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text font-[500]'>Smalakar's</span>
        <span className='text-[10px] xl:text-[40px] font-[600]'>Projects</span></p>
        <Link href={'/'} className='text-neutral-500 bg-zinc-200 px-4 py-2 rounded-sm flex-center gap-2'><FaArrowLeft />Back </Link>
        <Link
          href="#Project_section"
          className="flex items-center justify-center gap-2 bg-neutral-500 px-4 py-2 rounded-sm hover:brightness-110 transition scroll-smooth"
        >
          <FaArrowDown className="animate-bounce" />
          View Projects
        </Link>        
      </div>
    </div>
    </main>
    <div className='w-full flex flex-col p-4 md:p-9 gap-4 bg-[#9d9a9d]'>
      <section className='w-full flex-center flex-wrap bg-[#b5b2b5] border-2 border-white rounded-md' id='Project_section'>
        {/* All Project-Sections  */}
        <ProjectsBox imgLink='/Projects/Live-RoutineImg.jpg' imgName='Reacy-Project' iconLinks={['/Projects/icons/REACTJS.svg','/Projects/icons/TAILWINDCSS.svg','/Projects/icons/GIT.svg','/Projects/icons/GITHUB.svg','/Projects/icons/VERCEL.svg']} liveLink='https://live-routine-smalakar.vercel.app/' tag='#React-Project' tagColor='#4a3ec9'/>
        <ProjectsBox imgLink='/Projects/01PJ.png' imgName='Vanilla-Project' iconLinks={['/Projects/icons/HTML5.svg','/Projects/icons/CSS3.svg','/Projects/icons/JS.svg','/Projects/icons/GIT.svg','/Projects/icons/GITHUB.svg']} liveLink='https://portfolio-smalakars-projects.vercel.app/' tag='#vanillaJS-Project' tagColor='#616161'/>
        <ProjectsBox imgLink='/Projects/02PJ.png' imgName='React-Project' iconLinks={['/Projects/icons/REACTJS.svg','/Projects/icons/TAILWINDCSS.svg','/Projects/icons/GIT.svg','/Projects/icons/GITHUB.svg','/Projects/icons/VERCEL.svg']} liveLink='https://smalakarweb.vercel.app/' tag='#reactJS-Project' />
        <ProjectsBox imgLink='/Projects/03PJ.png' imgName='NextJs-Projects' iconLinks={['/Projects/icons/NEXTJS.svg','/Projects/icons/TAILWINDCSS.svg','/Projects/icons/Gsap.png','/Projects/icons/GIT.svg','/Projects/icons/GITHUB.svg','/Projects/icons/AI.svg']} liveLink='https://smalakar.vercel.app/' tag='#nextJS-project' />
        <ProjectsBox imgLink='/Projects/04PJ.png' imgName='Finance-Tracker' iconLinks={['/Projects/icons/HTML5.svg','/Projects/icons/CSS3.svg','/Projects/icons/JS.svg','/Projects/icons/GIT.svg','/Projects/icons/GITHUB.svg']} liveLink='https://financetracker-bice.vercel.app/index.html' tag='#02-iic-Hackathon' tagColor='#41b068' />
        <ProjectsBox imgLink='/Projects/05PJ.png' imgName='Finance-Tracker' iconLinks={['/Projects/icons/HTML5.svg','/Projects/icons/CSS3.svg','/Projects/icons/JS.svg','/Projects/icons/GITHUB.svg']} liveLink='https://developersupriyo.github.io/weatherapp/' tag='#01-iic-Hackathon' tagColor='#6ba2fa' />
        <ProjectsBox imgLink='/Projects/06PJ.png' imgName='Clone-Projects' iconLinks={['/Projects/icons/HTML5.svg','/Projects/icons/CSS3.svg','/Projects/icons/JS.svg','/Projects/icons/GITHUB.svg']} liveLink='https://github.com/smalakargh/Clone-Projects' tag='#clone-projects-Yrs-2020' tagColor='#cf9a08' />
      </section>
    </div>
    </>
  )
}

export default page