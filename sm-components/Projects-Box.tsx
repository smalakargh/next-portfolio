import Image from 'next/image';
import React from 'react'
type Props = {
  imgLink: string;
  imgName: string;
}
function ProjectsBox({imgLink,imgName}:Props) {
  return (
    <main className='m-4'>
      <div className='w-[250px] h-[150px] md:w-[500px] md:h-[300px] p-4 rounded-sm bg-neutral-500 relative flex-center overflow-hidden group'>
        <span className='absolute top-[150px] origin-top animate-spinner hidden group-hover:flex
        w-[300px] h-[240px] 
            bg-gradient-to-tr from-purple-400 to-blue-500 
            [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]'></span>
        <div className='absolute bg-neutral-500 h-[calc(100%-5px)] w-[calc(100%-5px)] rounded-sm flex-center text-white  cursor-pointer'>
          <Image src={imgLink} alt={imgName} width={460} height={260} className='rounded-sm w-auto h-auto'/>
        </div>
        <div className='absolute left-1 bottom-8 md:left-4 md:bottom-12 flex'>
           <div className='flex relative'>
             <span className='bg-slate-600 w-[23px] md:w-[35px] p-[6px] rounded-full border border-white absolute left-[10px] md:left-[10px]'><Image src={'/Projects/icons/JS.svg'} alt={'icons'} width={30} height={10}/></span>
             <span className='bg-slate-600 w-[23px] md:w-[35px] p-[6px] rounded-full border border-white absolute left-[24px] md:left-[30px]'><Image src={'/Projects/icons/REACTJS.svg'} alt={'icons'} width={30} height={10} /></span>
             <span className='bg-slate-600 w-[23px] md:w-[35px] p-[6px] rounded-full border border-white absolute left-[37px] md:left-[50px]'><Image src={'/Projects/icons/TAILWINDCSS.svg'} alt={'icons'} width={30} height={10}/></span>
           </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectsBox
