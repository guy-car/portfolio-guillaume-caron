'use client'

import { GlobeSimple } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState, useRef } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  sourceUrl?: string
  image?: string
  slug?: string
  variant?: 'glass-a' | 'glass-b'
  chipStyle?: 'chipStyle1' | 'chipStyle2' | 'chipStyle3' | 'chipStyle4' | 'chipStyle5'
}

// Tech Stack Chip Styles - 5 different approaches
// Style 1: Subtle borders only
const chipStyle1 = "inline-block px-2 py-1 text-xs border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"

// Style 2: Light background with subtle border
const chipStyle2 = "inline-block px-2 py-1 text-xs bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-colors"

// Style 3: More prominent background with shadow
const chipStyle3 = "inline-block px-3 py-1 text-xs bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300 shadow-sm hover:shadow-md transition-all"

// Style 4: Gradient background with glass effect
const chipStyle4 = "inline-block px-3 py-1 text-xs bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-600 rounded-lg text-neutral-700 dark:text-neutral-300 backdrop-blur-sm hover:from-neutral-100 hover:to-neutral-200 dark:hover:from-neutral-700 dark:hover:to-neutral-800 transition-all"

// Style 5: Creative with accent color and stronger styling
const chipStyle5 = "inline-block px-3 py-1 text-xs bg-neutral-900 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-900 border border-neutral-900 dark:border-neutral-100 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"

const chipStyles = {
  chipStyle1,
  chipStyle2,
  chipStyle3,
  chipStyle4,
  chipStyle5
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  liveUrl, 
  sourceUrl, 
  image, 
  slug,
  variant = 'glass-a',
  chipStyle = 'chipStyle1'
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div 
      className={`${variant} rounded-lg p-6 cursor-pointer`}
      onClick={(e) => {
        // Check if the click was on a link
        const target = e.target as HTMLElement;
        const isLinkClick = target.closest('a[href]');
        
        if (!isLinkClick && slug) {
          // Navigate to the project page
          window.location.href = `/projects/${slug}`;
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Left Column - Project Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech, index) => (
              <span key={index} className={chipStyles[chipStyle]}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                title="View Live"
                onClick={(e) => e.stopPropagation()}
              >
                <GlobeSimple size={20} />
                <span className="text-sm">see live</span>
              </a>
            )}
            {sourceUrl && (
              <a 
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                title="Source Code"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm">see code</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Right Column - Image/Video */}
        {image && (
          <div className="flex-shrink-0 w-full lg:w-60 h-48 lg:h-60 flex items-center justify-center">
            {image.endsWith('.mp4') ? (
              <video 
                ref={videoRef}
                src={image} 
                className="max-w-full max-h-full object-contain rounded-lg"
                muted
                loop
                playsInline
              />
            ) : (
              <img 
                src={image} 
                alt={`${title} screenshot`}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}