import { Metadata } from 'next'
import { Project } from '../components/project'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my projects and work.',
}

const projects = [
  {
    title: 'Feather.rsvp',
    description: 'I implemented TipTap for Feather.rsvp, a NYC startup. In just 2 weeks, I delivered a sleek and intuitive Rich Text Editor with minimal senior guidance in an unfamiliar codebase.',
    technologies: ['React', 'TypeScript', 'Chakra UI V3', 'TipTap'],
    liveUrl: 'https://www.feather.rsvp/',
    image: '/project-showcase/feather/feather-demo-video-before-after.mp4'
  },
  {
    title: 'Watch Genie',
    description: 'A movie recommendation chatbot that learns from user preferences and provides personalized movie suggestions.',
    technologies: ['Next.js', 'React', 'Vercel AI SDK', 'tRPC', 'OpenAI API'],
    liveUrl: '#',
    sourceUrl: '#',
    image: '/project-showcase/watch-genie/watch-genie-demo.mp4.mp4'
  }
]

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
          />
        ))}
      </div>
    </section>
  )
} 