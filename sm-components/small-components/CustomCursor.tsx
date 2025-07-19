'use client'

import gsap from 'gsap'
import React, { useEffect } from 'react'

function CustomCursor() {
  useEffect(() => {
    const followCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e
      gsap.to('.followMe', {
        x: clientX - 10,
        y: clientY - 10,
        duration: 1,
        // ease: 'power1.inOut',
      })
    }

    window.addEventListener('mousemove', followCursor)
    return () => {
      window.removeEventListener('mousemove', followCursor)
    }
  }, [])

  return (
    <div className='followMe fixed top-0 h-[20px] w-0 lg:w-[20px] bg-white rounded-full z-[99] pointer-events-none mix-blend-difference hidden sm:block'></div>
  )
}

export default CustomCursor
