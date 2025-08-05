import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPostsEnhanced() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block mb-2 p-2 rounded-lg transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-4">
              <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums text-sm mb-2 md:mb-0">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex-1">
                <h3 className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium mb-2 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
                  {post.metadata.title}
                </h3>
                <div className="flex items-center space-x-4 mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {post.metadata.readingTime && (
                    <div className="flex items-center space-x-1">
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <span>{post.metadata.readingTime} min read</span>
                    </div>
                  )}
                </div>
                {post.metadata.summary && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {post.metadata.summary}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export function FeaturedBlogPost() {
  let allBlogs = getBlogPosts()
  const latestPost = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1
      }
      return 1
    })[0]

  if (!latestPost) {
    return (
      <div className="text-neutral-600 dark:text-neutral-400 text-sm">
        No blog posts available yet.
      </div>
    )
  }

  return (
    <Link
                  className="block glass-a rounded-lg p-6"
      href={`/blog/${latestPost.slug}`}
    >
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-4">
        <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums text-sm mb-2 md:mb-0">
          {formatDate(latestPost.metadata.publishedAt, false)}
        </p>
        <div className="flex-1">
          <h3 className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium mb-2 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
            {latestPost.metadata.title}
          </h3>
          <div className="flex items-center space-x-4 mb-3 text-sm text-neutral-600 dark:text-neutral-400">
            {latestPost.metadata.readingTime && (
              <div className="flex items-center space-x-1">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span>{latestPost.metadata.readingTime} min read</span>
              </div>
            )}
          </div>
          {latestPost.metadata.summary && (
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {latestPost.metadata.summary}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
} 