'use client'
import React, { useState } from 'react'
import SkillBars from './small-components/SkillBars'
import { motion, AnimatePresence } from 'framer-motion'

function SkillSections() {
  const [activeTab, setActiveTab] = useState<'front' | 'back' | 'other'>('front');

  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <main className="p-3 md:p-8 flex gap-8 bg-[#908f8f] text-[15px] md:text-[19px] ">
      {/* Left Section */}
      <div className="hidden md:flex justify-center items-center w-full border border-white rounded-md p-5">
        HELLO
      </div>

      {/* Right Section */}
      <div className="flex-center flex-col gap-1 w-full">
        <div className="border border-white rounded-md w-full flex-center py-2">
          Tech-Stacks
        </div>

        {/* Tabs */}
        <div className="w-full bg-neutral-400 border border-white rounded-md py-1 text-[12px] md:text-[15px]">
          <ul className="flex justify-evenly">
            {['front', 'back', 'other'].map((tab) => (
              <li
                key={tab}
                className={`px-4 py-2 rounded-sm cursor-pointer ${
                  activeTab === tab ? 'bg-purple-200' : ''
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}-End
              </li>
            ))}
          </ul>
        </div>

        {/* Animated Content Section */}
        <div className="border border-white w-full rounded-sm p-3 md:p-7 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 md:gap-6"
            >
              {activeTab === 'front' && (
                <>
                <SkillBars iconSkillLink="/Projects/icons/NEXTJS.svg" iconSkillName="nextjs" SkillBarPercent="70%" />
                <SkillBars iconSkillLink="/Projects/icons/REACTJS.svg" iconSkillName="Reactjs" SkillBarPercent="88%" />
                <SkillBars iconSkillLink="https://www.svgrepo.com/show/349540/typescript.svg" iconSkillName="typescript" SkillBarPercent="88%" />
                <SkillBars iconSkillLink="https://www.svgrepo.com/show/349419/javascript.svg" iconSkillName="javascript" SkillBarPercent="88%" />
                <SkillBars iconSkillLink="/Projects/icons/HTML5.svg" iconSkillName="HTML" SkillBarPercent="100%" />
                <SkillBars iconSkillLink="/Projects/icons/CSS3.svg" iconSkillName="Css" SkillBarPercent="99%" />
                </>
              )}
              {activeTab === 'back' && (
                <>
                <SkillBars iconSkillLink="/Projects/icons/NEXTJS.svg" iconSkillName="Nextjs" SkillBarPercent="70%" />
                <SkillBars iconSkillLink="https://www.svgrepo.com/show/330398/express.svg" iconSkillName="ExpressJs" SkillBarPercent="90%" />
                <SkillBars iconSkillLink="https://www.svgrepo.com/show/439231/mongodb.svg" iconSkillName="MongoDB" SkillBarPercent="90%" />
                <SkillBars iconSkillLink="https://www.svgrepo.com/show/452075/node-js.svg" iconSkillName="NodeJs" SkillBarPercent="90%" />
                </>
              )}
              {activeTab === 'other' && (
                <>
                <SkillBars iconSkillLink="/Projects/icons/GIT.svg" iconSkillName="Git" SkillBarPercent="96%" />
                <SkillBars iconSkillLink="/Projects/icons/GITHUB.svg" iconSkillName="GitHub" SkillBarPercent="96%" />
                <SkillBars iconSkillLink="/Projects/icons/Gsap.png" iconSkillName="Gsap" SkillBarPercent="77%" />
                <SkillBars iconSkillLink="https://www.svgrepo.com/show/341828/framer.svg" iconSkillName="framer-motion" SkillBarPercent="77%" />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

export default SkillSections;
