"use client"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect } from 'react'


import { ScrollTrigger, ScrambleTextPlugin } from 'gsap/all'
import Carousel from '@/rended-components/Carousel'
import Textrot from './small-components/Text-rotation'
import GithubBtn from './small-components/GithubBtn'
import Cobe from '@/rended-components/Globe-cobe'
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)



function Cards() {
    useGSAP(()=>{
        gsap.to('.connect',{
            duration:4,
            yoyo:true,
            repeat:-1,
            scrambleText:{
                text: "Let's Connect"
            }
        })

        gsap.from('.facts',{
          x: -500,
          opacity:0,
      scrollTrigger: {
        trigger: '.facts',
        start: "top 85%",
      }
    })
    },[])
    useEffect(() => {
  const cursorTargets = document.querySelectorAll(".CursorScale");

  const handleEnter = () => {
    gsap.to(".followMe", { scale: 8 });
  };

  const handleLeave = () => {
    gsap.to(".followMe", { scale: 1 });
  };

  cursorTargets.forEach((el) => {
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
  });

  return () => {
    cursorTargets.forEach((el) => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    });
  };
}, []);

  return (
    <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-2 gap-3 p-7 md:p-10 lg:p-15 bg-[#99979a]'>
      <div className='facts CursorScale bg-transparent border-[#7b797c] border-[2px] backdrop-blur-3xl rounded-[5px] flex flex-row justify-center items-center '>
        
        <div style={{ position: 'relative' }}>
            <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={12000}
                pauseOnHover={true}
                loop={true}
                round={false}
            />
        </div>

      </div>
      <div className='bg-transparent border-[#7b797c] border-[2px] backdrop-blur-3xl rounded-[5px] relative flex justify-end row-span-2'><Cobe/>
            <p className='connect absolute left-5 bottom-30 lg:bottom-30 lg:left-30 font-sm text-3xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text'>Let's Connect </p>
            <p className='CursorScale absolute bottom-60 left-15 w-[50%] text-[20px] font-sm text-[#4b494d] font-[700] hidden lg:flex'>" India has the fastest growing developer population on GitHub and is on its way to becoming the largest community of developers in the world by 2028. "</p>
            <div className='absolute bottom-10 left-5 lg:left-30 '><GithubBtn/></div>     
      </div>
      <div className='qots CursorScale bg-transparent border-[#7b797c] border-[2px] backdrop-blur-3xl rounded-[5px] font-sm'><div><Textrot/></div>
        <p className='absolute right-9 bottom-4 text-[10px] lg:text-[20px] font-[600] text-transparent bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text '>By - Supriyo Malakar</p>
      </div>
    </div>
  )
}   

export default Cards
