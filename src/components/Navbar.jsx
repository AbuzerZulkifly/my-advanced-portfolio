import React, { useEffect, useState } from 'react'
import { className } from '@/lib/utils.js'
import {LuMenu, LuX} from 'react-icons/lu'
import ThemeToggle from './ThemeToggle.jsx'

const navItems = [
  {name: "Home", href: "#home"},
  {name: "About Me", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact Me", href: "#contact"},
]

const Navbar = ({brandName}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <nav className={className(
      "fixed w-full z-4 transition-all duration-300 top-2",
      isScrolled ? "py-3, bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className='container flex items-center justify-between'>
        <a href="#hero" className='text-2xl hover-effect font-bold '>
            <span className=' relative z-1 gradient-text '> {brandName} </span>          
        </a>
      {/* desktop */}
      <div className='hidden md:flex space-x-10'>
        {navItems.map((items, key) => (
          <a className='hover-effect hover:text-gradient text-lg' key={key} href={`${items.href}`}>{items.name}</a>
        ))}
      <div>
         <ThemeToggle  />
      </div>
      </div>
      {/* Mobile */}
      <div className='md:hidden'>
      <button
        className='text-3xl pt-0.5 md:hidden text-foreground z-5'
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <LuX /> : <LuMenu /> } {""}
      </button>
      <div  className={isMenuOpen ? '' : 'hidden'}>
      <ThemeToggle />
      </div>
      <div className={className(
        'fixed inset-0 bg-background/95 backdrop-blur-md z-4 flex flex-col items-center justify-center',
        'transition-all duration-500 md:hidden',
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
        <div className='md:hidden flex flex-col  space-y-8'>
          {navItems.map((items, key) => (
            <a className='hover-effect hover:text-primary text-xl' key={key} href={`${items.href}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {items.name}
            </a>
          ))}
        </div>
      </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar