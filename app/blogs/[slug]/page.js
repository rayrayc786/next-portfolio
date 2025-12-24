import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { blogs } from "@/data/blogs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return {
      title: "Blog Not Found",
    }
  }

  return {
    title: `${blog.title} | Rahul Arora`,
    description: blog.excerpt,
  }
}

export default async function BlogPost({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <Badge variant="secondary" className="mb-4">
              {blog.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{blog.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blog.readTime}
              </span>
            </div>

            <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
              <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">{blog.excerpt}</p>

              <p>
                This is where the full blog content would go. In a real implementation, you would fetch this content
                from a CMS, markdown files, or a database. The content would include detailed explanations, code
                examples, and insights about the topic.
              </p>

              <h2>Key Takeaways</h2>
              <ul>
                <li>Understanding the fundamentals is crucial for success</li>
                <li>Practice and experimentation lead to mastery</li>
                <li>Staying updated with best practices ensures quality code</li>
                <li>Performance optimization should be considered from the start</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Building modern web applications requires a combination of technical skills, design sensibility, and
                attention to detail. By following best practices and continuously learning, you can create exceptional
                user experiences that stand the test of time.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
