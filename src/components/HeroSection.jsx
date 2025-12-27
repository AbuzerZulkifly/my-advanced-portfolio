import React from 'react'
import {LuArrowDown} from 'react-icons/lu'

const HeroSection = ({name, profession, country}) => {
  return (
    <section id='hero'
      className='relative min-h-screen flex flex-col items-center justify-center md:px-4 px-1'
    >
      <div className='container max-w-4xl mx-auto text-center z-1'>
        <div className='space-y-6'>
          
          <h1 className='opacity-0 animate-fade-in-delay-1 xxsm:text-2xl sm:text-3xl md:text-6xl font-bold tracking-tight'>
        
            <p className=''>
              <span className=''>Hi, I'm</span> 
              <span className='gradient-text transform duration-300'> {name}</span>,
            </p>
        
            <p className=''>{profession}</p>
        
            <p className=''>
              <span> Based in</span>
              <span className="gradient-text"> {country}</span>
            </p> 
        
          </h1>
          <p className='xxsm:text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 font-semibold'>
            I'm a passionate developer specializing in crafting dynamic and responsive web applications.
            With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions.
            Let's build something amazing together!
          </p>
          <div className='flex justify-center space-x-10 pt-5 opacity-0 animate-fade-in-delay-4'>
            {/* <a href="#projects" className='hover-effect gradient-button-dark '>
              View My work
            </a> */}
            <a href='resume.pdf' download className='gradient-button-dark hover-effect'>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-4 flex flex-col items-center justify-center animate-bounce gap-2'>
        <span>Scroll</span>
        <span><LuArrowDown /></span>
      </div>
    </section>
  )
}

export default HeroSection