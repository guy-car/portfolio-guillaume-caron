import { Metadata } from 'next'
import { Project } from '../components/project'
import { projects } from '../data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my projects and work.',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">projects</h1>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  )
} 