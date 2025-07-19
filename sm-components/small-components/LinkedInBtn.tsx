import gsap from 'gsap';
import { useEffect } from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { SmalakarData } from '@/constants/server-data';

export default function LinkedInBtn() {
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
          <button className="CursorScaleBtn cursor-pointer bg-white text-[#0077b5] my-3 hover:bg-[#0077b5] mx-2 hover:text-white btn-cmn">
            <a className="flex-center gap-1 cursor-pointer" href={SmalakarData.linkedin}>LinkedIn<BsLinkedin /></a>
        </button>

    </div>
  )
}
