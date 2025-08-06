import { FeaturedBlogPost } from 'app/components/blog-posts'
import { FeaturedProject } from 'app/components/project'
import { projects } from 'app/data/projects'

export default function Page() {
  // Get the featured project (first one for now)
  const featuredProject = projects[0]

  return (
    <section className="space-y-12">
      {/* Bio Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">
          Guillaume Caron
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Hey, I'm Guillaume. A cinematographer turned software engineer.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          After years of building immersive experiences in film, I now apply that same principle to software engineering—creating the magic of uninterrupted flow. I engineer systems that feel natural and responsive, enabling users to focus on their core mission while the technology quietly handles the complexity.
        </p>
      </div>

      {/* Featured Work Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Featured work</h2>
        
        <div className="relative group">
          <FeaturedProject
            title={featuredProject.title}
            description={featuredProject.description}
            technologies={featuredProject.technologies}
            liveUrl={featuredProject.liveUrl}
            image={featuredProject.image}
            slug={featuredProject.slug}
          />
        </div>
      </div>

      {/* Featured Post Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Featured post</h2>
        
        <FeaturedBlogPost />
      </div>
    </section>
  )
}
