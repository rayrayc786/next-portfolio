"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code2, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/data/profile"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "email") {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    } catch (err) {
      console.error("[v0] Failed to copy:", err)
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionHeading subtitle="Let's work together">Get in Touch</SectionHeading>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <a
                            href={`mailto:${profile.email}`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {profile.email}
                          </a>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(profile.email, "email")}
                        aria-label="Copy email"
                      >
                        {copiedEmail ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
                          <a
                            href={`tel:${profile.phone}`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {profile.phone}
                          </a>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(profile.phone, "phone")}
                        aria-label="Copy phone"
                      >
                        {copiedPhone ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="md:col-span-2"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold mb-1">Location</p>
                        <p className="text-muted-foreground">{profile.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
              <div className="flex gap-6 justify-center">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="GitHub"
                >
                  <div className="p-4 rounded-full bg-secondary group-hover:bg-accent transition-colors">
                    <Github className="h-6 w-6" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="LinkedIn"
                >
                  <div className="p-4 rounded-full bg-secondary group-hover:bg-accent transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="Twitter"
                >
                  <div className="p-4 rounded-full bg-secondary group-hover:bg-accent transition-colors">
                    <Twitter className="h-6 w-6" />
                  </div>
                  <span className="text-sm">Twitter</span>
                </a>
                <a
                  href={profile.social.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="CodePen"
                >
                  <div className="p-4 rounded-full bg-secondary group-hover:bg-accent transition-colors">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <span className="text-sm">CodePen</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
