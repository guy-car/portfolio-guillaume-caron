import { FeaturedBlogPost } from 'app/components/blog-posts'
import { ProjectCard } from 'app/components/project'
import { projects } from 'app/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  // Get the featured project (first one for now)
  const featuredProject = projects[0]

  return (
    <section className="space-y-12">
      {/* Bio Section */}
      <div className="space-y-4">
        <p className="text-lg text-neutral-100 leading-relaxed">
          Hey, I'm Guillaume. A cinematographer turned software engineer.
        </p>
        <p className="text-lg text-neutral-100 leading-relaxed">
          After years of building immersive experiences in film, I now apply that same principle to software engineering—creating the magic of uninterrupted flow. I engineer systems that feel natural and responsive, enabling users to focus on their core mission while the technology quietly handles the complexity.
        </p>
        <p className="text-lg text-neutral-100 leading-relaxed">
          If you're building something impactful and need a full-stack engineer, I'd love to connect.
        </p>
        <div className="flex justify-end">
          <div className="flex items-center space-x-3">
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/guy-car"
            >
              <Image
                src="/githublogo-black.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="dark:hidden"
              />
              <Image
                src="/githublogo-white.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="hidden dark:block"
              />
            </a>
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/_guillaumecaron"
            >
              <Image
                src="/xlogo-black.png"
                alt="X (Twitter)"
                width={20}
                height={20}
                className="dark:hidden"
              />
              <Image
                src="/xlogo-white.png"
                alt="X (Twitter)"
                width={20}
                height={20}
                className="hidden dark:block"
              />
            </a>
            <a
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/guillaume-caron-00604934/"
            >
              <Image
                src="/linkedin-svgrepo-com.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="dark:invert"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">work</h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            see more →
          </Link>
        </div>
        
        <div className="relative group">
          <ProjectCard
            title={featuredProject.title}
            description={featuredProject.description}
            technologies={featuredProject.technologies}
            liveUrl={featuredProject.liveUrl}
            image={featuredProject.image}
            slug={featuredProject.slug}
            variant="glass-b"
            chipStyle="chipStyle5"
          />
        </div>
      </div>

      {/* Featured Post Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">thoughts</h2>
          <Link
            href="/blog"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            see more →
          </Link>
        </div>
        
        <FeaturedBlogPost />
      </div>
    </section>
  )
}
