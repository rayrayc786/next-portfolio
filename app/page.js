"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Code2,
  ExternalLink,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ParticlesBackground from "@/components/particles-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { blogs } from "@/data/blogs"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const recentBlogs = blogs.slice(0, 3)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <ParticlesBackground />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-balance"
              >
                {profile.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-4"
              >
                {profile.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                {profile.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex gap-6 justify-center"
              >
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={profile.social.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="CodePen"
                >
                  <Code2 className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                {profile.bio}
              </motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Tech Stack</div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills and expertise
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden group">
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={`/.jpg?height=200&width=400&query=${encodeURIComponent(project.image)}`}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="gap-2">
                        <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="text-center">
                <Button asChild size="lg" variant="outline">
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Recent Blogs Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Thoughts and insights on web development, design, and technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {recentBlogs.map((blog) => (
                  <motion.div key={blog.id} variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                    <Card className="h-full flex flex-col overflow-hidden group">
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={`/.jpg?height=200&width=400&query=${encodeURIComponent(blog.image)}`}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <Badge className="absolute top-4 left-4">{blog.category}</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{blog.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(blog.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {blog.readTime}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="ghost" size="sm" className="w-full group/btn">
                          <Link href={`/blogs/${blog.slug}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="text-center">
                <Button asChild size="lg" variant="outline">
                  <Link href="/blogs">
                    View All Posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a
                            href={`mailto:${profile.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {profile.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <a
                            href={`tel:${profile.phone}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {profile.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Location</h3>
                          <p className="text-muted-foreground">{profile.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Code2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Social Media</h3>
                          <div className="flex gap-3">
                            <a
                              href={profile.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="GitHub"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                            <a
                              href={profile.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                              href={profile.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="Twitter"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="mt-8 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
