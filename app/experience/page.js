"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/data/experience"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeading subtitle="My professional journey">Work Experience</SectionHeading>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative mb-12 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-1/2 hidden md:block" />

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle>{job.role}</CardTitle>
                        </div>
                      </div>
                      <p className="text-lg font-semibold">{job.company}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{job.duration}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
