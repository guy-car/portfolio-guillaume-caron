import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/projects': {
    name: 'projects',
  },
  '/resume': {
    name: 'resume',
  }
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-4 lg:mx-auto" style={{ maxWidth: 'var(--page-max-width, 36rem)' }}>
        <div className="flex items-center justify-between py-3">
          {/* Brand name on the left */}
          <Link href="/" className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
            Guillaume Caron
          </Link>
          
          {/* Navigation items aligned to the right */}
          <div className="flex items-center space-x-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
