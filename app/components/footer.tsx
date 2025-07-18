import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/guy-car"
          >
            <Image
              src="/githublogo-white.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/_guillaumecaron"
          >
            <Image
              src="/xlogo-white.png"
              alt="X (Twitter)"
              width={20}
              height={20}
            />
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/guillaume-caron-00604934/"
          >
            <Image
              src="/linkedin-svgrepo-com.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className='dark:invert'
            />
          </a>
        </li>
      </ul>

    </footer>
  )
}
