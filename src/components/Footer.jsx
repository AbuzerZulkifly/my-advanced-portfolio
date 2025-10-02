import React from 'react'
import {LuArrowUp} from 'react-icons/lu'
const Footer = ({brandName}) => {
  return (
    <section className='py-24 px-4 relative bg-secondary/30'> 
      <hr className="md:mb-5 mb-2" />
      <div className='flex md:flex-row flex-col gap-5 justify-between items-center'>
      <div className="flex md:gap-2 gap-5 ">
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span>{brandName}.</span>
        <span>All Rights Reserved</span>
      </div>
        <div className='flex mt-1'>
          <a href="#hero" className='bg-gray-800 rounded-full animate-bounce p-2 transition-colors '><LuArrowUp /></a>
        </div>
      </div>
    </section>
  );
}

export default Footer