import React, { useState } from 'react'
import { useEffect } from 'react'
import {LuSun, LuMoon} from 'react-icons/lu'
import { className } from '@/lib/utils.js'

const ThemeToggle = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(()=> {
    const getStoredTheme = localStorage.getItem("theme")

    if(getStoredTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
    else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")  
    }
  }, [])

  const toggleTheme = () => {
    if(isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)
    }
    else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDarkMode(true)      
    }
  }
  return (
    <div>
      <button onClick={toggleTheme} className={className(
        'text-3xl fixed  right-10 z-5 rounded-full transition-colors duration-300',
        'focus:outline-hidden hover:scale-[1.3] transition-all duration-500'
      )}>
       {isDarkMode ? <LuSun fill='orange' className='text-orange-300' /> : <LuMoon fill='gray' className='text-transparent' />}
      </button>
    </div>
  )
}

export default ThemeToggle