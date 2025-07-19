"use client"
import { useEffect, useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { ImCross } from 'react-icons/im';

import { IoMdInformationCircle } from 'react-icons/io';
import { AiOutlineSlack } from 'react-icons/ai';
import ChatUI from './Agent-Chat';

function ChatPopUp() {
  const [chat , setChat] = useState(false);
  useEffect(()=>{
    const Listner = (e:any)=>{
      if(e.key == 'Escape'){
        setChat(false);
        document.body.classList.remove("no-scroll");
      }
    }
    document.addEventListener('keydown',Listner);
  },[])
  const ChatToggle = ()=>{
    if(chat == false){
      setChat(true);
      document.body.classList.add("no-scroll");
      console.log("Chat is open");
    }
    if(chat == true){
      setChat(false);
       document.body.classList.remove("no-scroll");
       console.log("Chat is closed");
      }
    }
    const CloseChat = ()=>{
      setChat(false);
      document.body.classList.remove("no-scroll");
  }
  return (
    <div>
      
              <div className='w-12 h-12 sm:w-9 sm:h-9 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full shadow-md fixed bottom-6 right-6 flex-Common cursor-pointer z-[110]' onClick={ChatToggle}>
                <span className='text-pink-800 text-[22px] sm:text-[15px] animate-pulse'><BsStars/></span>
              </div>
              <div className={`h-screen w-full fixed flex flex-wrap backdrop-blur-sm justify-center p-5 overflow-hidden z-[100] ${chat ?"flex":"hidden"}`}>

                <div className={`w-[350px] sm:w-[500px] h-[450px] bg-slate-800 rounded-md relative top-[80px] flex-wrap flex-col justify-between gap-5 ${chat ?"flex":"hidden"} `}>
                    <div className='flex flex-col h-full justify-between'>
                    <p className='absolute right-4 top-4 text-[9px] bg-pink-500 p-2 rounded-full cursor-pointer' onClick={CloseChat}><ImCross /></p>
                    <nav className='p-4'>
                      <h1 className='flex items-center gap-1 text-[20px] font-bold sm:text-2xl'><AiOutlineSlack className='text-blue-300' /><p className='text-transparent bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text'>Smalakar's Assistance</p></h1>
                      <p className='flex items-center gap-1 text-[7px] sm:text-[9px] text-white ml-5'><IoMdInformationCircle style={{color:'gray'}} /> Answers may be inaccurate, please verify information.</p>
                    </nav>
                    <ChatUI />
                    </div>
                </div>
              </div>

    </div>
  )
}

export default ChatPopUp
