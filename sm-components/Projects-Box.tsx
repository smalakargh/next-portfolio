'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdOutlineLink } from 'react-icons/md';
type Props = {
  imgLink: string;
  imgName: string;
  iconLinks?: string[];
  liveLink?: string;
}


const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

function ProjectsBox({imgLink,imgName,iconLinks,liveLink}:Props) {
  const isMd = useMediaQuery('(min-width: 768px)');
  const [isActive, setIsActive] = useState(false);
  return (
    <main className='m-4'>
      <div className='w-[250px] h-[150px] md:w-[500px] md:h-[300px] p-4 rounded-sm bg-neutral-500 relative flex-center overflow-hidden group' onClick={() => setIsActive(prev => !prev)}>
        <span className={`absolute top-[150px] origin-top animate-spinner
    w-[300px] h-[240px]
    bg-gradient-to-tr from-purple-400 to-blue-500
    [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]
    ${isMd ? 'group-hover:flex' : isActive ? 'flex' : 'hidden'}`}
  />
        <div className='absolute bg-neutral-500 h-[calc(100%-5px)] w-[calc(100%-5px)] rounded-sm flex-center text-white  cursor-pointer'>
          <Image src={imgLink} alt={imgName} fill className='rounded-sm w-auto h-auto'/>
        </div>
        <div className='absolute left-1 bottom-8 md:left-4 md:bottom-12 flex'>
           <div className='flex relative w-[250px] md:w-[500px]'>
              {iconLinks?.map((icon,index)=>{
                const left = isMd ? 10 + index * 20 : 10 + index * 12;
                return(
                <span
                key={index}
                className={`bg-neutral-500 w-[23px] h-[23px] md:w-[35px] md:h-[35px] p-[6px] rounded-full border border-white absolute`}
                style={{ left: `${left}px` }}
                >
                  <Image src={icon} alt={`icon-${index+1}`} fill className='p-[4px]'/>
                </span>
              )})}
              <a href={liveLink}><span className='absolute right-4 md:right-9 bg-neutral-600 text-white text-[12px] md:text-[13px] px-[6px] md:py-1 md:px-3 rounded-md flex items-center gap-1 cursor-pointer'>Link <MdOutlineLink /></span></a>
           </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectsBox
