'use client';

import React, { useEffect, useRef } from 'react';

interface WindOfLightProps {
  className?: string;
}

const WindOfLight: React.FC<WindOfLightProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // ==================== EASY CONFIGURATION ====================
  const config = {
    // Intensity: How visible the light waves are (0-300, start low!)
    intensity: 300, // 100 = barely visible, 200 = subtle, 300 = noticeable
    
    // Speed: How fast waves move across screen (0.2-3)
    speed: 1, // 0.5 = very slow, 1 = normal, 2 = fast
    
    // Wave count: How many waves are active at once (2-12)
    waveCount: 6, // More waves = denser effect
    
    // Blur: How soft the edges are (5-50)
    blur: 25, // Higher = softer, more atmospheric
    
    // Size: How wide the waves are (20-100)
    size: 50, // Percentage of screen width
    
    // Colors: Change these to tint the light
    lightColor: '255, 255, 255', // RGB values for pure white
    // Examples: 
    // '255, 248, 240' = warm white
    // '240, 248, 255' = cool white  
    // '255, 245, 238' = soft warm
  };
  // ============================================================

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const waves: HTMLDivElement[] = [];

    // Clear existing waves
    container.innerHTML = '';

    // Generate waves
    for (let i = 0; i < config.waveCount; i++) {
      const wave = document.createElement('div');
      wave.style.position = 'absolute';
      wave.style.height = '100vh';
      wave.style.willChange = 'transform';
      wave.style.pointerEvents = 'none';
      
      // Random properties for variety
      const sizes = ['small', 'medium', 'large'];
      const sizeType = sizes[Math.floor(Math.random() * sizes.length)];
      const depth = Math.floor(Math.random() * 3) + 1;
      const speedVariation = Math.floor(Math.random() * 5) + 1;
      
      // Set size and gradient based on type
      let width: number, gradient: string;
      const baseIntensity = config.intensity / 100;
      const sizeMultiplier = config.size / 50;
      
      switch (sizeType) {
        case 'small':
          width = 40 * sizeMultiplier;
          gradient = `linear-gradient(90deg, 
            transparent 0%, 
            rgba(${config.lightColor}, ${0.003 * baseIntensity}) 25%, 
            rgba(${config.lightColor}, ${0.012 * baseIntensity}) 50%, 
            rgba(${config.lightColor}, ${0.003 * baseIntensity}) 75%, 
            transparent 100%)`;
          break;
        case 'medium':
          width = 55 * sizeMultiplier;
          gradient = `linear-gradient(90deg, 
            transparent 0%, 
            rgba(${config.lightColor}, ${0.004 * baseIntensity}) 22%, 
            rgba(${config.lightColor}, ${0.014 * baseIntensity}) 45%, 
            rgba(${config.lightColor}, ${0.018 * baseIntensity}) 50%, 
            rgba(${config.lightColor}, ${0.014 * baseIntensity}) 55%, 
            rgba(${config.lightColor}, ${0.004 * baseIntensity}) 78%, 
            transparent 100%)`;
          break;
        default: // large
          width = 70 * sizeMultiplier;
          gradient = `linear-gradient(90deg, 
            transparent 0%, 
            rgba(${config.lightColor}, ${0.005 * baseIntensity}) 20%, 
            rgba(${config.lightColor}, ${0.015 * baseIntensity}) 40%, 
            rgba(${config.lightColor}, ${0.02 * baseIntensity}) 50%, 
            rgba(${config.lightColor}, ${0.015 * baseIntensity}) 60%, 
            rgba(${config.lightColor}, ${0.005 * baseIntensity}) 80%, 
            transparent 100%)`;
      }
      
      wave.style.width = `${width}vw`;
      wave.style.background = gradient;
      
      // Set blur based on depth
      let blur = config.blur;
      if (depth === 1) blur = config.blur * 0.6; // Front layer - sharper
      if (depth === 3) blur = config.blur * 1.4; // Back layer - softer
      wave.style.filter = `blur(${blur}px)`;
      wave.style.zIndex = `${4 - depth}`; // Front layers on top
      
      // Set animation duration and delay
      const baseDurations = [45, 60, 75, 90, 120]; // seconds
      const duration = baseDurations[speedVariation - 1] / config.speed;
      const delay = -(Math.random() * duration);
      
      wave.style.animation = `windSweep ${duration}s linear infinite`;
      wave.style.animationDelay = `${delay}s`;
      
      // Random vertical offset for variety
      wave.style.top = `${Math.random() * 20 - 10}vh`;
      
      container.appendChild(wave);
      waves.push(wave);
    }

    return () => {
      // Cleanup
      waves.forEach(wave => wave.remove());
    };
  }, [config.intensity, config.speed, config.waveCount, config.blur, config.size, config.lightColor]);

  return (
    <>
      <style jsx>{`
        @keyframes windSweep {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        .wind-of-light-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className={`wind-of-light-container ${className}`}
      />
    </>
  );
};

export default WindOfLight;

/*
USAGE IN YOUR NEXT.JS APP:

1. Save this as components/WindOfLight.tsx

2. Import and use in any page/component:
   import WindOfLight from '@/components/WindOfLight';
   
   export default function MyPage() {
     return (
       <div>
         <WindOfLight />
         <main>
           Your page content here...
         </main>
       </div>
     );
   }

3. The effect will automatically sit behind all your content

4. Adjust the config object at the top to customize:
   - Start with intensity around 50-100 for subtle effect
   - Increase speed to 1.5-2 for more movement
   - Try different lightColor values for tinting
   - Increase blur for more atmospheric feel

5. For different sections, you can pass className:
   <WindOfLight className="my-custom-styles" />
*/