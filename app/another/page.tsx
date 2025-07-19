'use client'
import React from 'react'

export default function Landing() {
  return (
    <main className="min-h-screen bg-gray-700 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Smalakar</h1>
      <p className="text-lg text-center max-w-md mb-6">
        Crafting intelligent UI experiences with Tailwind, GSAP, Groq, and Next.js. Explore the future of personal AI and frontend elegance.
      </p>
      <a
        href="#"
        className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
      >
        Get Started
      </a>
    </main>
  )
}