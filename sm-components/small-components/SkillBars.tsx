import React from 'react'
import Image from 'next/image'

type props = {
    iconSkillLink: string;
    iconSkillName: string;
    SkillBarColor?: string;
    SkillBarPercent?: string;
}
function SkillBars({iconSkillName,iconSkillLink,SkillBarColor="#616161",SkillBarPercent}:props) {
  return (
    <div className='flex-center gap-2'>
      <Image src={iconSkillLink} alt={iconSkillName} width={30} height={30} />
        <div className='w-full'>
            <div className='border border-white w-full h-3 rounded-full'>
                <div className={`h-full border-purple-500 rounded-full`} style={{backgroundColor:`${SkillBarColor}`,width:`${SkillBarPercent}`}}></div>
            </div> 
        </div>
    </div>
  )
}

export default SkillBars
