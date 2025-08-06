'use client'

import { getProjectBySlug } from 'app/data/projects'
import { Carousel } from 'app/components/carousel'
import { GlobeSimple } from '@phosphor-icons/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-12">
      {/* Back Button */}
      <div>
        <Link 
          href="/"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors inline-flex items-center gap-2"
        >
          ← Back
        </Link>
      </div>

      {/* Project Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">{project.title}</h1>
        
        {/* Carousel */}
        <Carousel images={project.carouselImages} />
        
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="inline-block px-3 py-1 text-xs bg-neutral-900 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-900 border border-neutral-900 dark:border-neutral-100 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        {(project.liveUrl || project.sourceUrl) && (
          <div className="flex flex-col gap-1">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                title="View Live"
              >
                <GlobeSimple size={20} />
                <span className="text-sm">see live</span>
              </a>
            )}
            {project.sourceUrl && project.sourceUrl !== '#' && (
              <a 
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                title="Source Code"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm">see code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 