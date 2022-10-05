import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const Experiencecard = (props: Props) => {
  return (
      <article className='h-180 flex  flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] mt-24 p-0 md:mt-32 xl:mt-28 hover:opacity-80 opacity-8 cursor-pointer transition-opacityduration-200'>
          <motion.img
              initial={{
                  y: -100,
                  opacity:0
              }}
              transition={{
                  duration:1.2
              }}
              whileInView={{
                  opacity: 1, y:0
              }}

              className="w-20 h-20 md:mt-10 xl:mt-12 rounded-full xl:w-[80px] xl:h-[80px] 0bject-cover object-center mt-1 justify-evenly"
              src="https://tunga.io/wp-content/uploads/2020/12/TUNGAlogoround-1.png"
              alt="tugaLogo"
          />
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Software Dev</h4>
              <p className='font-bold text-2xl mt-1'>Tunga Uganda</p>
              <div className='flex space-x-2 my-2'>
                  {/* Tech used */}
                  <img
                      className='h-10 w-10 rounded-full '
                      src=' https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195698/javascript-4cbc745b515cd6427fcb71cc8fbe1fc7.png'
                      alt='javascript'
                  />
                  {/* Tech used */}
                  <img
                   className='h-10 w-10 rounded-full'
                      src=' https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195698/javascript-4cbc745b515cd6427fcb71cc8fbe1fc7.png'
                      alt='javascript'
                  />
                  {/* Tech used */}
                  <img
                   className='h-10 w-10 rounded-full'
                      src=' https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195698/javascript-4cbc745b515cd6427fcb71cc8fbe1fc7.png'
                      alt='javascript'
                  />
              </div>
              <p className='uppercase py-5 text-gray-50 '>Started work 2020 - Date</p>
              <ul className='list-disc space-y-4 ml-5 text-lg px-4'>
                  <li>Summary points</li>
                  <li>Summary points</li>
                  <li>Summary points</li>
                  <li>Summary points</li>
                  <li>Summary points</li>
              </ul>
          </div>
            
    </article>
  )
}

export default Experiencecard