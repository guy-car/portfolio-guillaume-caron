import { BlogPostsEnhanced } from 'app/components/blog-posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPostsEnhanced />
    </section>
  )
}
