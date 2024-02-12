import React, { useState, useEffect } from 'react';
import Nav from './nav';
import video from './assets/video.mp4';
function Main()
{

       
    return(
        <div className='w-[100vw] h-[100vh] relative'>
            
           <video className=' h-[100vh] w-[100vw] object-cover ' src={video} autoPlay loop muted></video>
           <div className="overlay absolute top-0 w-full ]">
               
               <div className='fixed w-full'><Nav></Nav></div>
               <div className=' relative bottom-[-240px] left-10 md:absolute md:left-[240px]
               md:bottom-[-550px]  flex-col  text-white w-[70%] font-[400]'> 
               <h1 className='md:py-6 text-[42px] md:text-[73px] md:tracking-[-1.5px] md:leading-[73px]'>Creating safe AGI that benefits all of humanity</h1>
               <button className='py-1 px-3 rounded-sm mt-4 text-[18px] border'>Learn about OpenAI</button></div>
            </div>
           

        </div>
    );
}
export default Main;