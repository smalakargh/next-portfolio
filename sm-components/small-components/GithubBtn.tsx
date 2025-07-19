import gsap from "gsap";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { SmalakarData } from "@/constants/server-data";

export default function GithubBtn() {
  useEffect(()=>{
    let CursorTarget = document.querySelectorAll(".CursorScaleBtn");
    const handleEnter =()=>{
      gsap.to('.followMe',{
        opacity: 0,
      })
    }
    const handleLeave =()=>{
      gsap.to('.followMe',{
        opacity: 1,
      })
    }
    CursorTarget.forEach((e)=>{
      e.addEventListener('mouseenter',handleEnter);
      e.addEventListener('mouseleave',handleLeave);
    });
  return ()=>{
      CursorTarget.forEach((e)=>{
      e.removeEventListener('mouseenter',handleEnter);
      e.removeEventListener('mouseleave',handleLeave);
    });
  }
},[])
  return (
    <div>
          <button className="CursorScaleBtn cursor-pointer bg-black text-white my-3 hover:bg-white hover:text-black border-[2px dotted] btn-cmn">
            <a className="flex-center gap-1 cursor-pointer" href={SmalakarData.github}>Github<FaGithub />
            </a></button>
    </div>
  )
}
