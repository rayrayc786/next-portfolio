"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <SectionHeading subtitle="Get to know more about me">About Me</SectionHeading>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  alt={profile.name}
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">{profile.name}</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {profile.role} • {profile.experience}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">{profile.bio}</p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I'm a Senior Frontend Engineer specializing in building accessible, performant web
                  applications. I contribute to the creation and maintenance of UI components that power modern web
                  experiences, ensuring they meet web standards and best practices.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Primary Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Core Skills</h3>
            <div className="grid gap-4">
              {skills.primary.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.secondary.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.05 }}
                >
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="font-medium mb-1">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">{skill.level}%</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
