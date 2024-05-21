import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textStructure mt-52 px-20'>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
            return  <div className='masker '>
              <div className='w-fit flex items-end'>
                {index ===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='mr-[1vw] w-[8vw] rounded-md h-[6vw] -top-[.7vw]  relative bg-green-500'></motion.div>)}

            <h1 className="pt-[3vw] -mb-[1vw] uppercase text-[9vw] leading-[6vw] h-full font-['Founders_Grotesk_X'] font-semibold">{item}</h1>
        </div>
              </div>
        })}
       
      
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>

        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tighter leading-none'>{item} </p>
        ))}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] font-light text-md uppercase border-zinc-400 rounded-full'>Start The Project</div>
            <div className='w-10 h-10  border-[2px]  border-zinc-500 rounded-full flex items-center justify-center'>
                <span className='rotate-[45deg]'><FaArrowUpLong/></span>
                </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
