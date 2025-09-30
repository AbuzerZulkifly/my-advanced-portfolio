import React, { useState } from 'react'
import { mySkillsData } from '@/data/mySkillsData.js'


const Skills = () => {

  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["All", "Frontend", "Backend", "Tools"];
  return (
    <section id="skills" className='min-h-screen py-24 px-4 relative bg-secondary/30'>
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center'>My Skills</h2>

        <div className="flex flex-wrap mb-12 gap-4 justify-center">
          {categories.map((category, key) => (
            <button className='hover-effect gradient-button-light'>{category}</button>
          ))}
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
        mySkillsData.map((skill, key) => (
          <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
            <div className="mb-4 flex flex-col gap-5 items-center">
              <h3 className='text-xl md:text-2xl font-semibold gradient-text'>{skill.skill}</h3>
              <div className='image-container'>
                <img src={skill.image} alt="" />
              </div>
              <div>
                <p className='text-left text-sm md:text-base text-foreground/70'>{skill.info}</p>
              </div>
            </div>
          </div>
        ))
        }
      </div>
      </div>
    </section>
  )
}

export default Skills