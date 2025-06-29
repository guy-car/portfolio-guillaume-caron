import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Guillaume Caron
      </h1>
      <h2>
        Reflections at the Learning Edge
      </h2>
      <p className="mb-4 italic">
        AI engineering accelerator chronicles and occasional insights.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
