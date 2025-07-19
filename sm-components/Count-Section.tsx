'use client'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function SkillCount() {
  const counter = useRef({ value: 0 });
  const targetValue1 = 21;
  const targetValue2 = 730;
  const targetValue3 = 6;

  useGSAP(() => {
    gsap.to(counter.current, {
      scrollTrigger: ".skillani2",
      value: targetValue1,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        const display = Math.floor(counter.current.value);
        const el = document.querySelector(".skillani1");
        if (el) el.textContent = display.toLocaleString();
      },
    });

    gsap.to(counter.current, {
      scrollTrigger: ".skillani2",
      value: targetValue2,
      duration: 5,
      ease: "power1.out",
      onUpdate: () => {
        const display = Math.floor(counter.current.value);
        const el = document.querySelector(".skillani2");
        if (el) el.textContent = display.toLocaleString();
      },
    });

    gsap.to(counter.current, {
      scrollTrigger: ".skillani2",
      value: targetValue3,
      duration: 4,
      ease: "power1.out",
      onUpdate: () => {
        const display = Math.floor(counter.current.value);
        const el = document.querySelector(".skillani3");
        if (el) el.textContent = display.toLocaleString();
      },
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-around font-sm py-7 bg-[#7b797c] text-[#fff]">
        <div className="flex flex-col items-center">
          <div className="flex text-[10px] md:text-[20px]">
            <p className="skillani1 text-3xl md:text-4xl font-[500]">21+</p>
            <p>+</p>
          </div>
          <span className="font-[500] text-[9px] md:text-[18px]">
            Project From Scratch
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-[10px] md:text-[20px]">
            <p className="skillani2 text-3xl md:text-4xl font-[500]">2+</p>
            <p>+</p>
          </div>
          <span className="font-[500] text-[9px] md:text-[18px]">
            Days of Experience
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-[10px] md:text-[20px]">
            <p className="skillani3 text-3xl md:text-4xl font-[500]">6+</p>
            <p>+</p>
          </div>
          <span className="font-[500] text-[9px] md:text-[18px]">Language</span>
        </div>
      </div>
    </>
  );
}

export default SkillCount;
