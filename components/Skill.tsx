import React from 'react'
import{motion} from "framer-motion"

type Props = { directionLeft?: boolean; }

const Skill = (directionLeft: Props) => {
  return (
      <div className='group relative flex cursor-pointer'>
          <motion.img
              className='h-20 w-20 rounded-full object-cover border-gray-50  filter group-hover:grayscale tansition duration-300 ease-in-out'
              initial={{
                  x: directionLeft ? -200 : 200,
                  opacity: 0
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
               src="https://reactnative.dev/img/logo-og.png"            
          />
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 xl:h-24 xl:w-24 z-10 rounded-full'>
              <div className='flex items-center justify-center h-full'>
                  <p className='text-3xl font-bold text-black opacity-100'> 100%</p>
              </div>
          </div>
            
    </div>
  )
} 

export default Skill