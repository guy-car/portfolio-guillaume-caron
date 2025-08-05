'use client'

import { useState } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

interface CarouselProps {
  images: string[]
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const currentMedia = images[currentIndex]
  const isVideo = currentMedia.endsWith('.mp4')

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Media Display */}
      <div className="relative aspect-video rounded-lg overflow-hidden">
        {isVideo ? (
          <video 
            src={currentMedia}
            className="w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img 
            src={currentMedia}
            alt={`Project screenshot ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Previous"
          >
            <CaretLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Next"
          >
            <CaretRight size={24} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-neutral-600 dark:bg-neutral-400' 
                  : 'bg-neutral-300 dark:bg-neutral-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
} 