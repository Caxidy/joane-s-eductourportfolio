"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Profile() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent-cyan/30" />
              <h2 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">Student Profile</h2>
              <div className="h-px flex-1 bg-accent-cyan/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-center text-balance">About the Student</h3>
          </div>

          {/* Profile Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-48 h-48 mb-4">
                <img
                  src="/professional-student-portrait.png"
                  alt="Student Profile"
                  className="rounded-full w-full h-full object-cover border-2 border-accent-cyan/50"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-1">Your Name</h4>
              <p className="text-muted-foreground text-sm">Computer Science Student</p>
            </motion.div>

            {/* Profile Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="bg-card border border-accent-cyan/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-accent-cyan">Academic Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Course:</span>
                    <span className="font-semibold text-foreground">BS Computer Science</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">School:</span>
                    <span className="font-semibold text-foreground">University Name</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year Level:</span>
                    <span className="font-semibold text-foreground">3rd Year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Academic Year:</span>
                    <span className="font-semibold text-foreground">2024-2025</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-accent-cyan/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-accent-cyan">About Me</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  A passionate computer science student with a keen interest in emerging technologies, software
                  development, and innovation. This educational tour provided invaluable insights into the tech industry
                  and reinforced my commitment to pursuing a career in technology.
                </p>
              </div>

              <div className="bg-card border border-accent-cyan/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-accent-cyan">Interests & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-xs text-accent-cyan">
                    Web Development
                  </span>
                  <span className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-xs text-accent-cyan">
                    Artificial Intelligence
                  </span>
                  <span className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-xs text-accent-cyan">
                    Data Science
                  </span>
                  <span className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-xs text-accent-cyan">
                    Mobile Apps
                  </span>
                  <span className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-xs text-accent-cyan">
                    Cloud Computing
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
