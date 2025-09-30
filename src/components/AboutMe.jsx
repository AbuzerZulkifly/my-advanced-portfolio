import React from 'react'

import {aboutMeData} from '@/data/aboutMeData.js'

const AboutMe = ({profession}) => {

  const checkTheme = localStorage.getItem("theme");
  console.log(checkTheme);
  return (
    <section id="about" className='min-h-screen py-24 px-4 relative '>
      <div className='container mx-auto max-w-5xl'>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className='space-y-4 text-start opacity-0 animate-fade-in-delay-2'>
              <h3 className='text-3xl font-semibold gradient-text'>{profession} </h3>
              <p className='text-muted-foreground text-lg'>
                With over 3 years of experience in the tech industry, I have honed my skills in both front-end and back-end development. My expertise lies in creating dynamic and responsive web applications using modern technologies
              </p>
              <p className='text-muted-foreground text-lg'>
                I'm passionate about coding and continuously learning new technologies to stay updated with industry trends. I thrive in collaborative environments and enjoy working on projects that challenge me to think creatively and solve complex problems.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6'>

              {aboutMeData.map((item) => (
              <div className={` p-6 card-hover opacity-0 animate-fade-in-delay-4 gradient-border `}>
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-2 text-3xl">
                    <item.icon />
                  </div>
                  <div className='text-left'>
                    <h4 className='text-lg font-semibold gradient-text'>
                      {item.title}
                    </h4>
                    <p className='text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                </div>
               </div>
              ))}
          </div>
          </div>
      </div>
    </section>
  )
}

export default AboutMe