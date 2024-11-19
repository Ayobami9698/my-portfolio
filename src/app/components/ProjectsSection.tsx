import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <div className='container border border-transparent border-solid outline-transparent rounded-xl px-4 py-4 shadow-xl shadow-slate-100s'>
      <h2 className='text-white text-xl place-self-center'>My Projects</h2>
      <p><ProjectCard/></p>
    </div>
  )
}

export default ProjectsSection
