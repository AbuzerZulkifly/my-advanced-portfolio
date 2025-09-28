import React from 'react'

const HeroSection = ({name, profession, country}) => {
  return (
    <section id='hero'
      className='relative min-h-screen flex flex-col items-center justify-center md:px-4 px-1'
    >
      <div className='container max-w-4xl mx-auto text-center z-1'>
        <div className='space-y-6'>
          
          <h1 className='text-xl md:text-6xl font-bold tracking-tight'>
        
            <p className='opacity-0 animate-fade-in-delay-1'>
              <span className=''>Hi, I'm</span> 
              <span className='gradient-text transform duration-300'> {name}</span>,
            </p>
        
            <p className='opacity-0 animate-fade-in-delay-1'>{profession}</p>
        
            <p className='opacity-0 animate-fade-in-delay-1'>
              <span> Based in</span>
              <span className="gradient-text"> {country}</span>
            </p> 
        
          </h1>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4'>
            I'm a passionate developer specializing in crafting dynamic and responsive web applications.
            With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions.
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection