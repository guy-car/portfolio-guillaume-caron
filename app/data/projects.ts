export interface Project {
  title: string
  description: string
  cardDescription?: string
  technologies: string[]
  liveUrl?: string
  sourceUrl?: string
  image?: string
  logo?: string
  slug: string
  carouselImages: string[]
}

export const projects: Project[] = [
  {
    title: 'Cape',
    description: `I joined [Cape](https://joincape.ai/) as a software engineer to own their core product: an AI system that writes personalized outreach asking for warm intros. The catch: you're writing on behalf of two people who already know each other. Get the voice or relationship wrong and it's immediately obvious.

I prototyped the initial architecture with 3 agents in 2 weeks. At the time of writing this, it grew to 8 agents in production.

The design philosophy: AI agents are unreliable. Don't throw LLMs at everything. They're a liability that compounds. Compute everything you can. Use LLMs only on problems that require them. Keep structured outputs tight. And always design with evals in mind so you know which agent to blame when something breaks.

I built the eval system for the pipeline so we can iterate on prompts, add agents, or fix plumbing based on actual signal.

Beyond the pipeline, I led UX iteration through direct customer interviews. I also lead the effort on AI-assisted coding at Cape: creating architecture documentation that helps onboard new devs and makes AI agents more context-aware, pushing cursor rules to the repo, and introducing MCPs that speed up team workflows.`,
    cardDescription: `Software Engineer at Cape, owning the AI Drafter pipeline. Designed around a principle: compute everything you can, use LLMs as last resort, and always know how you'll eval.`,
    technologies: ['TypeScript', 'BAML', 'OpenAI', 'Prisma', 'tRPC'],
    liveUrl: 'https://joincape.ai/',
    logo: '/cape-logo.svg',
    slug: 'cape',
    carouselImages: []
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
  },
  {
    title: 'Draw Beyond',
    description: 'Draw Beyond is a turn-based jam-drawing experience with an AI co-artist. I leaned into the uncanny valley on purpose, asking a vision model to "look" at the canvas and draw back. Under the hood, the model returns structured JSON that maps to a Skia schema of drawing commands. I logged the model\'s perception of the canvas ("I see a face", "this looks like a tree") and its intention ("I will add ears and hair", "I will add a chimney and a sun to make it more uplifting"). The reasoning was coherent, but translating intention into drawing commands was often inconsistent, delightfully weird, sometimes useless. I would like to revisit this with an image-to-SVG or vector approach and better prompt and context management. Until then, I am embracing the chaos in Draw Beyond.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Skia'],
    sourceUrl: 'https://github.com/guy-car/week5-drawing-app',
    image: '/project-showcase/draw-beyond/ScreenRecording_08-13-2025 19-04-26_1.mp4',
    slug: 'draw-beyond',
    carouselImages: [
      '/project-showcase/draw-beyond/ScreenRecording_08-13-2025 19-04-26_1.mp4',
      '/project-showcase/draw-beyond/ScreenRecording_08-13-2025 19-46-16_1.MP4'
    ]
  },
  {
    title: 'Feather.rsvp',
    description: 'I implemented TipTap for Feather.rsvp, a NYC startup. In just 2 weeks, I delivered a sleek and intuitive Rich Text Editor with minimal senior guidance in an unfamiliar codebase.',
    technologies: ['React', 'TypeScript', 'TipTap', 'Chakra UI V3'],
    liveUrl: 'https://www.feather.rsvp/welcome',
    image: '/project-showcase/feather/feather-demo-video-before-after.mp4',
    slug: 'feather-rsvp',
    carouselImages: [
      '/project-showcase/feather/feather-demo-video-before-after.mp4',
      '/project-showcase/feather/Feather-1.png',
      '/project-showcase/feather/Feather-2.png',
      '/project-showcase/feather/Feather-4.png'
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
} 