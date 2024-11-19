"use client";
import React,  { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Redux</li>
      </ul>
    )
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>St. Mishack Private School, Ketu, Lagos State.</li>
        <li>God's Reward International School, Ikorodu, Lagos State.</li>
        <li>Oduduwa University, Ipetumodu, Osun State.</li>
        <li>Cecure Intelligence Limited Academy</li>
      </ul>
    )
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>JSE Entry Level Javascript computer Programmer</li>
      </ul>
    )
  },

  {
    title: "Experience",
    id: "experience",
    content: (
      <h2>YET TO BE UPDATED!</h2>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending,  startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className='text-white'>
     <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 translate-y-1/8'>
      <Image src="/images/about1.jpg" width={500} height={500} />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>
          I am a front end web developer with a passiopn for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Html, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
        </p>
        <div className='flex flex-row justify-start mt-8'>
          <TabButton 
          selectTab={() => handleTabChange("skills")} 
          active={tab === "skills"}
          >
            {""}
            Skills{""}</TabButton>

            <TabButton 
          selectTab={() => handleTabChange("education")} 
          active={tab === "education"}
          >
            {""}
            Education{""}</TabButton>

            <TabButton 
          selectTab={() => handleTabChange("certifications")} 
          active={tab === "cedrtifications"}
          >
            {""}
            Certifications{""}</TabButton>

            <TabButton 
          selectTab={() => handleTabChange("experience")} 
          active={tab === "experience"}
          >
            {""}
            Experience{""}
            </TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </div> 
    </section>
  )
}

export default AboutSection
