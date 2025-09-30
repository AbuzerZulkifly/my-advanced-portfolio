import React from 'react'
import ThemeToggle from '@/components/ThemeToggle.jsx'
import StarBackground from '@/components/StarBackground.jsx'
import Navbar from '@/components/Navbar.jsx'
import HeroSection from '@/components/HeroSection.jsx'
import AboutMe from '@/components/AboutMe.jsx'
import Skills from '@/components/Skills.jsx'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <StarBackground />
      <Navbar 
       brandName="StarTech"
      />
      <main>
        <HeroSection
          name="Abuzer Zulkifly"
          profession="Full Stack Developer"
          country="Sri Lanka"
        />

        <AboutMe
         profession="Full Stack Developer"
        />

        <Skills />
      </main>
    </div>
  )
}

export default Home