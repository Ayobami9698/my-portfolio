"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'> 
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I'm{" "}</span>
          <br></br> 
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Ayobami',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mobile Developer',
        1000,
        'Front End Engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>I'm Ayobami, a front-end web developer from Nigeria, building apps and online experiences for companies large and small.
            </p>
            <div>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button>
              <button  className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
            </div>
        </div>

        <div className='col-span-4 sm:place-self-center mt-4 lg:mt-0 translate-x-14'>
          <div className='rounded-full bg-[#181818] w-[250px]h-[400px] lg:w-[400px] lg:h-[400px]'>
            <Image
              src="/images/bammy.jpg"
              alt="hero image"
                className="absolute transform translate-x-12 translate-y-12 rounded-full"
              width={300}
              height={300}/>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default HeroSection
