import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

const Contact = (props: Props) => {
  return (
      <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-50 text-2xl'> 
          </h3>
          <div className='flex flex-col space-y-10'>
              <h4 className='text-4xl font-semibold text-center'>
                  Am what your network is missing.{""}
                  <span className="decoration-[#F7AB0A]/50 underline"> Lets Talk.</span>

              </h4>
          </div>
          <div className='space-y-10'> 
              <div className='flex items-center space-x-5'>
              <PhoneIcon className='text-[#F7AB0A] h7 w7 animate-pulse' />
              <p className='text-2xl'>+256705109672</p>

          </div>
           <div className='flex items-center space-x-5'>
              <EnvelopeIcon className='text-[#F7AB0A] h7 w7 animate-pulse' />
              <p className='text-2xl'>asiimwearnold25@gmail.com</p>

          </div>
           <div className='flex items-center space-x-5'>
              <MapPinIcon className='text-[#F7AB0A] h7 w7 animate-pulse' />
              <p className='text-2xl'>Soliz House</p>

          </div>
          </div>
          
      </div>
  )
}

export default Contact

