"use client";
import { SmalakarData } from "@/constants/server-data";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { RiDvdAiLine } from "react-icons/ri";

type Message = {
  role: "user" | "ai";
  content: string;
};

const ChatUI: React.FC = () => {
  //AI SDK
    const { messages, input, handleInputChange, handleSubmit, status , setMessages } = useChat();
  //AI SDK
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const isChatActive:boolean = messages.length > 0;
  const isInputFilled:boolean = input.length > 0;

  const startNewChat = () => {
  setMessages([]); 
  console.log("Btn clicked !!")
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col rounded-b-md flex-wrap w-full h-full bg-slate-800 text-white">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
        <div className={`text-white h-full flex flex-col justify-center items-center gap-2 ${isChatActive ? "hidden" : "flex" }`}>
         <img src={SmalakarData.image} alt="Smalakar" className="w-30 flex rounded-full sm:hidden "/>
          <p className="text-[20px] font-[600] sm:text-[22px]">Welcome to Smalakar.ai</p>
          <p className="text-zinc-500 text-[9px] sm:text-[11px] sm:w-[70%] text-center">Ask me anything about Supriyo Malakar,<br/> or smalakar's website details.<br/>
                    Your chat history is not saved between sessions.</p>
                    <p className="text-zinc-400 text-[9px] w-[70%] text-center justify-center gap-1 sm:flex hidden">Press <span className="bg-zinc-700 px-1 rounded-sm flex items-center text-[7px]">Esc</span> to Close this assistant </p>
        </div>
        {messages.map((msg:any, i) => (
          <div className="flex gap-1 flex-col" key={i}>
            {msg.role === "user"? <></>:<img src="https://avatars.githubusercontent.com/u/171774147?v=4" className="w-5 rounded-full"/>}
          <div
            className={`px-4 py-2 rounded-md max-w-max break-words ${
              msg.role === "user"
                ? "bg-purple-600 ml-auto text-right"
                : "bg-slate-700 text-left"
            }`}
          >
            {msg.content}
          </div>
          </div>
        ))}
        {/* Always scrolls to this */}
        <div ref={bottomRef} />
      </div>
      {/* Chat Input */}
      <div className={`flex w-full justify-end px-1 ${isChatActive ? "flex" : "hidden"}`}><button onClick={startNewChat} className="text-[10px] flex items-center gap-1 px-2 rounded-md cursor-pointer"><MdDeleteOutline />Clear Chat</button></div>
      <div className="relative h-[70px] ">
      <form onSubmit={handleSubmit} className="flex gap-2 p-2 rounded-md w-full">
         <div className="px-3 py-2 w-full flex border-slate-600 border-1 rounded-sm items-center gap-2">
          <input
          type="text"
          placeholder="Smalakar's Assistance..."
          className="flex-grow p-2 rounded bg-slate-700 text-white focus:outline-none w-1"
          value={input}
          onChange={handleInputChange}
        />
         </div>
        <button className={`bg-purple-600 flex items-center gap-1 px-4 py-2 rounded text-white font-semibold transition ${isInputFilled ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed"}`}>
           <IoSend />
        </button>
        </form> 
      </div>
    </div>
  );
};

export default ChatUI;
