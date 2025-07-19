'use client'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

function Navbar() {
  // Split Text Animation
  useGSAP(() => {
    const timer = setTimeout(() => {
      const split = new SplitText('.smlogo', { type: 'words, chars' })
      gsap.from(split.chars, {
        duration: 0.7,
        y: -100,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, 1000) 

    return () => clearTimeout(timer)
  }, [])
  // Cursor Scale Animation
  useEffect(()=>{
    let CursorScale = document.querySelector(".CursorScale");
    CursorScale?.addEventListener("mouseenter",()=>{
        gsap.to('.followMe',{
            scale:8,
        })
    });
    CursorScale?.addEventListener("mouseleave",()=>{
        gsap.to('.followMe',{
            scale:1,
        })
    });
},[])

  return (
    <div className=" bg-transparent backdrop-blur-sm w-[100%] z-[99] absolute text-white NavSec">
      <p className="CursorScale smlogo text-3xl md:text-4xl lg:text-5xl font-[Caveat] py-[20px] px-[50px] lg:py-[30px]">
        Smalakar
      </p>
    </div>
  );
}

export default Navbar;
