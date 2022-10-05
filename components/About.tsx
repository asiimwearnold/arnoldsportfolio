import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const About = (props: Props) => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration:1.5}}
          className='flex flex-col relative h-screen text-center md:flex-row max-w-12xl px-32 justify-evenly max-auto item-center'>
          <h3 className=' absolute top-16 uppercase tracking-[16px] text-gray-50 text-2xl px-14'>
              About</h3>
         
          <motion.img
              initial={{
                  x: -200,
                  opacity:0,
              }}
              whileInView={{
                   opacity:1,
                  x: 0,
                 
              }}
              viewport={{
                  once: true
              }}
              transition={{
                  duration: 1.2,
              }}
            
              src="https://pbs.twimg.com/profile_images/1425039038835269644/ObZ1ikYC_400x400.jpg"
              className=' -mb-20 md:mt-24 mt-10 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-75 xl:w-[300px] xl:h-[400px] xl:absolute top-24'
          />
          <div className='="space-y-10 mt-6 px-0 md:px-10'>
              <h4 className='text-2xl font-semibold'>
                  Here is a{" "}<span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background
                  
              </h4>
              <p className='text-sm py-4'>
                  Web and mobile developer who has collaborated on
                  mission-critical financial trading platforms.
                  I have extensive knowledge
                  popular frameworks and libraries like React and Redux.
                  full-stack experience working with Node.js and Express,
                  MongoDB, PHP, PostgreSQL, and MySQL.
              </p>
              </div>
      
      </motion.div>
      

  )
}

export default About