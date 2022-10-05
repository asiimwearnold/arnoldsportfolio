import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
      <motion.div
          initial={{
              opacity:0,
          }}
          animate={{
              scale: [1, 2, 2, 3, 1],
              opacity:[1.2, 0.2, 0.4, 0.8, 0.1, 0.1]
          }}
          transition={{
              duration: 2.5,
          }}
          className='relative flex justify-center items-center'>
          <div className='border border-red-400 rounded-full h-[200px] w-[200px] mt-52 absolute animate-ping'/>
          <div className=' border border-red-400 rounded-full h-[300px] w-[350px] mt-52 absolute animate-ping' />
          <div  className='border border-red-400 rounded-full h-[500px] w-[550px] mt-52 absolute animate-pulse'/>
          <div />
          
    </motion.div>
  )
}

export default BackgroundCircles