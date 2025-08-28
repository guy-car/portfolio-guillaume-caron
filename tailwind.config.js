/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Glassmorphism design tokens
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(48, 48, 48, 0.8) 0%, rgba(48, 48, 48, 0.6) 100%)',
        'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-light': '0 4px 30px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'glass': '11px',
      },
    },
  },
  plugins: [
    // Custom glassmorphism utilities - Four different glass effect options
    function({ addUtilities }) {
      const glassmorphismUtilities = {
        // Option A: Simple glass with border
        '.glass-a': {
          background: 'rgba(30, 30, 30, 0.46)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }
        },

        // Option B: Multiple box-shadows for realistic glass
        '.glass-b': {
          background: 'rgba(30, 30, 30, 0.46)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }
        },

        // Option C: Pseudo-elements for reflections
        '.glass-c': {
          background: 'rgba(30, 30, 30, 0.46)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          transition: 'all 0.3s ease',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            borderRadius: 'inherit',
          },
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)',
            '&:before': {
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            }
          }
        },

        // Option D: Conic gradient for realistic glass
        '.glass-d': {
          background: 'conic-gradient(from 45deg at 50% 50%, rgba(30, 30, 30, 0.46) 0deg, rgba(40, 40, 40, 0.46) 90deg, rgba(30, 30, 30, 0.46) 180deg, rgba(20, 20, 20, 0.46) 270deg, rgba(30, 30, 30, 0.46) 360deg)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          }
        },

        // Light mode variants
        '.glass-a-light': {
          background: 'rgba(255, 255, 255, 0.46)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.12)',
          }
        },

        '.glass-b-light': {
          background: 'rgba(255, 255, 255, 0.46)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.12)',
          }
        },

        '.glass-c-light': {
          background: 'rgba(255, 255, 255, 0.46)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          position: 'relative',
          transition: 'all 0.3s ease',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
            borderRadius: '16px 16px 0 0',
          },
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)',
            '&:before': {
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
            }
          }
        },

        '.glass-d-light': {
          background: 'conic-gradient(from 45deg at 50% 50%, rgba(255, 255, 255, 0.46) 0deg, rgba(245, 245, 245, 0.46) 90deg, rgba(255, 255, 255, 0.46) 180deg, rgba(250, 250, 250, 0.46) 270deg, rgba(255, 255, 255, 0.46) 360deg)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(11px)',
          WebkitBackdropFilter: 'blur(11px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          }
        },
      }
      addUtilities(glassmorphismUtilities)
    }
  ],
} 