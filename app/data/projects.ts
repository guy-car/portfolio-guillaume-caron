export interface Project {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  sourceUrl?: string
  image?: string
  slug: string
  carouselImages: string[]
}

export const projects: Project[] = [
  {
    title: 'Feather.rsvp',
    description: 'I implemented TipTap for Feather.rsvp, a NYC startup. In just 2 weeks, I delivered a sleek and intuitive Rich Text Editor with minimal senior guidance in an unfamiliar codebase.',
    technologies: ['React', 'TypeScript', 'Chakra UI V3', 'TipTap'],
    liveUrl: 'https://www.feather.rsvp/welcome',
    image: '/project-showcase/feather/feather-demo-video-before-after.mp4',
    slug: 'feather-rsvp',
    carouselImages: [
      '/project-showcase/feather/feather-demo-video-before-after.mp4',
      '/project-showcase/feather/Feather-1.png',
      '/project-showcase/feather/Feather-2.png', 
      '/project-showcase/feather/Feather-4.png'
    ]
  },
  {
    title: 'Watch Genie',
    description: 'A movie recommendation chatbot that learns from user preferences and provides personalized movie suggestions.',
    technologies: ['Next.js', 'React', 'Vercel AI SDK', 'tRPC', 'OpenAI API'],
    liveUrl: 'https://week2-chatbot.vercel.app/',
    sourceUrl: 'https://github.com/guy-car/week2-chatbot',
    image: '/project-showcase/watch-genie/watch-genie-demo.mp4.mp4',
    slug: 'watch-genie',
    carouselImages: [
      '/project-showcase/watch-genie/watch-genie-demo.mp4.mp4'
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
} 