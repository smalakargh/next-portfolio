'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect } from 'react'


import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Particles from '@/rended-components/Hero-particles';
import { SmalakarData } from '@/constants/server-data';
import GithubBtn from './small-components/GithubBtn';
import LinkedInBtn from './small-components/LinkedInBtn';

gsap.registerPlugin(ScrambleTextPlugin);


function HeroSec() {
    // Name Animation
    useEffect(() => {
        const timer = setTimeout(() => {
          gsap.to('.smName', {
            duration: 3,
            scrambleText: {
              text: 'Supriyo Malakar',
              chars: 'CAL#$%thean',
              speed: 0.3,
            },
          })
        }, 2000) // 2-second delay
    
        return () => clearTimeout(timer)
      }, [])

    // Cursor Scale Animation
    useEffect(() => {
        // Narrow types with generics
        const avatarEl = document.querySelector<HTMLElement>('.CursorScaleAvt');
        const followMeEl = document.querySelector<HTMLElement>('.followMe');
      
        // Bail out if either element is missing
        if (!avatarEl || !followMeEl) return;
      
        // Handlers for avatar hover
        const handleAvatarEnter = () => {
          followMeEl.textContent = 'Smalakar';
          Object.assign(followMeEl.style, {
            mixBlendMode: 'normal',
            display: 'flex',
            width: '50px',
            height: '20px',
            borderRadius: '4px',
            fontFamily: 'Poppins',
            fontSize: '9px',
            paddingLeft: '6px',
            paddingRight: '6px',
          });
        };
      
        const handleAvatarLeave = () => {
          followMeEl.textContent = '';
          Object.assign(followMeEl.style, {
            mixBlendMode: 'difference',
            width: '20px',
            height: '20px',
            borderRadius: '100%',
          });
        };
      
        // Attach avatar listeners
        avatarEl.addEventListener('mouseenter', handleAvatarEnter);
        avatarEl.addEventListener('mouseleave', handleAvatarLeave);
      
        // Cursor scale targets
        const cursorEls = document.querySelectorAll<HTMLElement>('.CursorScale');
        const handleEnter = () => gsap.to(followMeEl, { scale: 8 });
        const handleLeave = () => gsap.to(followMeEl, { scale: 1 });
      
        cursorEls.forEach(el => {
          el.addEventListener('mouseenter', handleEnter);
          el.addEventListener('mouseleave', handleLeave);
        });
      
        // Cleanup on unmount
        return () => {
          avatarEl.removeEventListener('mouseenter', handleAvatarEnter);
          avatarEl.removeEventListener('mouseleave', handleAvatarLeave);
          cursorEls.forEach(el => {
            el.removeEventListener('mouseenter', handleEnter);
            el.removeEventListener('mouseleave', handleLeave);
          });
        };
      }, []);
      
    

  return (
    <>
      <div className='w-[100%] h-[100vh] relative bg-[#b5b2b5] overflow-hidden '>
      <Particles
        particleColors={['#000', '#fff']}
        particleCount={1200}
        particleSpread={13}
        speed={0.2}
        particleBaseSize={160}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        className='fixed'
      />
      <div className='w-[100%] h-[100vh] font-[poppins] bg-transparent absolute top-0 z-10 flex justify-evenly md:justify-around items-center flex-col-reverse md:flex-row p-9 md:p-2'>
        <div className='Left CursorScale  w-[35vh] md:w-[50vh] backdrop-blur'>
            <div className=' flex gap-1 lg:text-[36px] font-[700] text-[24px] '>I'm <p className='smName  text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text'>Supriyo Malakar</p></div>

            {/* TypeWriter */}
            <div className="liveTxt">
                           <div className="wrapper">
                               <div className="staticTxt">I love</div>
                               <ul className="dynamicTxt">
                                   <li><span>Developing</span></li>
                                   <li><span>Coding</span></li>
                                   <li><span>Robotics</span></li>
                                   <li><span>Calisthenics</span></li>
                               </ul>
                           </div>
                       </div>
            {/* TypeWriter */}

            <p className=' text-[14px] md:text-[18px]' >{SmalakarData.description}</p>
            <div className='flex'>
              <GithubBtn/>
              <LinkedInBtn/>
            </div>
        </div>
        <div className='Right rounded-full w-64 md:w-95 animate-wiggle'>
            <img className='CursorScaleAvt p-[2px] rounded-full' src={SmalakarData.image} alt="DeveloperSm" />
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSec
