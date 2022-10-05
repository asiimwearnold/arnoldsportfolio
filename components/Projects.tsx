import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5];
  return (
      <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
          <h3 className='absolute top-24 uppercase tracking-[26px] text-gray-50 text-2xl'>
              projects
          </h3>
          <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
              {projects.map((projects, i) =>(
                  <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                      <motion.img
                          initial={{
                              y: -300,
                              opacity: 0, 
                          }}
                          transition={{
                              duration: 1.2
                          }}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{
                              once: true
                          }}
                      src="https://assets.website-files.com/62933628e865838158ae50ba/62b0540fed1b26109cede828_home.png"
                      alt=""
                      />
                      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                          <h4 className='text-4l font-semibold text-center'> 
                               <span className='underline decoration-[#F7AB0A]/50'> Project { i + 1} of {projects} Bulk-Ug</span>
                          </h4>
                          <p className="space-y-10 px-0 md:px-10 max-w-6xl">
                              Show the world what you a made of with a
                              personal template, organise all your skills in 
                              one place and let it do the self promotion.
                              use it to land that client you so much need 
                              2023
                              Dont just build, build an experiece tailored
                              for your new enguagements.
                            
                            </p>
                      </div>
                </div>
              ))}
              
            </div>

          <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500PX] -skew-y-12' />
              
     
    </div>
  )
}

export default Projects