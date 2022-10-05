import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
//import Image from 'next/image'
import profilePic from '../public/img/me.png'
import Link from 'next/link';


type Props = {}

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Asiimwe J Arnold",
      "Talks about [Node] ",
      "<JavaScript>", 
      "< TypeScript >",
      "[React]",
      "Frontend and Backend", 
      "Breaking, Creating",
      " &",
      " Learning always",
      
  ],  delaySpeed: 7000})
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      
     
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 max-auto object-cover'
        // src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
       src='https://media-exp1.licdn.com/dms/image/C4D03AQFAPkeUvDb71A/profile-displayphoto-shrink_800_800/0/1628783919828?e=1669852800&v=beta&t=8YfMB8yyD1PNJx09Fai5e8632HQmsCZxIEbqYRbifUk'
        alt='Profile picture'
      />
       <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'> Software Engineer</h2>
        </div>
      
      <h1 className='tex-5xl lg:text-3xl font-semibold px-10'>
       
        <span>
          {text}</span>
        <Cursor cursorColor='#FFFFFF'/>
      </h1>
      <div className='pt-10 z-30'>
        <Link href="#about"><button className='heroButton'>About</button></Link>
        
         <Link href="#experience"><button className='heroButton'>Experience</button></Link>
      
         <Link href="#skills"><button className='heroButton'>Skills</button></Link>
        
         <Link href="#projects"><button className='heroButton'>Projects</button></Link>
        
        <button></button>
      </div>
    </div>
  )
}

export default Hero