"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/data/education"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeading subtitle="My academic background and certifications">Education</SectionHeading>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="h-6 w-6 text-primary" />
                          <CardTitle>{edu.degree}</CardTitle>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-muted-foreground mt-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

                      {edu.achievements && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold">Achievements:</h4>
                          </div>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
