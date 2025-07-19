'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Skip() {
  const btnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleClick = () => {
      gsap.to(window, { duration: 1, scrollTo: '.NavSec' });
    };

    btn.addEventListener('click', handleClick);
    return () => btn.removeEventListener('click', handleClick);
  }, []);

  useGSAP(() => {
    gsap.to(btnRef.current, {
      scrollTrigger: {
        trigger: '.facts',
        onEnter: () => gsap.set(btnRef.current, { display: 'flex' }),
        onLeaveBack: () => gsap.set(btnRef.current, { display: 'none' }),
      },
    });
  }, []);

  return (
    <div
      ref={btnRef}
      className="SkipBtn hidden z-[99] w-[5px] h-[5px] md:w-[20px] md:h-[20px] rounded-full fixed left-1 bottom-2 md:left-7 md:bottom-7 bg-[#494646] text-white text-[15px] md:text-[20px] cursor-pointer items-center justify-center p-5 md:p-7"
    >
      <p>
        <FaAngleUp />
      </p>
    </div>
  );
}

export default Skip;
