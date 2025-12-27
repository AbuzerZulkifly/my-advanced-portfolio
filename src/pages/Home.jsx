import React from 'react'
import ThemeToggle from '@/components/ThemeToggle.jsx'
import StarBackground from '@/components/StarBackground.jsx'
import Navbar from '@/components/Navbar.jsx'
import HeroSection from '@/components/HeroSection.jsx'
import AboutMe from '@/components/AboutMe.jsx'
import Skills from '@/components/Skills.jsx'
import Project from '@/components/Project.jsx'
import Contact from '@/components/Contact.jsx'
import Footer from '@/components/Footer.jsx'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <StarBackground />
      <Navbar 
       brandName="Abuzer Zulkifly"
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

        <Contact
          mail="wonderwebdev21@gmail.com"
          telNo="+94 77 206 7224"
          location="Kandy, Sri Lanka"
        />
        
        <Footer
          brandName="StarTech"
        />

      </main>
    </div>
  )
}

export default Home