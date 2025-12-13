"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30">
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
              <h2 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">About the Tour</h2>
              <div className="h-px flex-1 bg-accent-cyan/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-center text-balance">Educational Tour Overview</h3>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-accent-cyan/20 rounded-lg p-6 hover:border-accent-cyan/40 transition-colors"
            >
              <h4 className="text-xl font-semibold mb-3 text-accent-cyan">Description</h4>
              <p className="text-muted-foreground leading-relaxed">
                Our educational tour was a comprehensive learning experience designed to bridge the gap between academic
                theory and real-world practice. We visited leading technology companies, research institutions, and
                cultural landmarks to gain insights into industry practices and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-accent-cyan/20 rounded-lg p-6 hover:border-accent-cyan/40 transition-colors"
            >
              <h4 className="text-xl font-semibold mb-3 text-accent-cyan">Purpose</h4>
              <p className="text-muted-foreground leading-relaxed">
                To expose students to cutting-edge technologies, foster professional networking, and provide practical
                insights into career opportunities in the field of computer science and technology. This tour aimed to
                inspire and inform our future career paths.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-accent-cyan/20 rounded-lg p-6 hover:border-accent-cyan/40 transition-colors"
            >
              <h4 className="text-xl font-semibold mb-3 text-accent-cyan">Dates & Locations</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Duration:</span> March 15-22, 2025
                </p>
                <p>
                  <span className="font-semibold text-foreground">Locations:</span>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Silicon Valley, California</li>
                  <li>San Francisco Bay Area</li>
                  <li>Innovation Districts</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card border border-accent-cyan/20 rounded-lg p-6 hover:border-accent-cyan/40 transition-colors"
            >
              <h4 className="text-xl font-semibold mb-3 text-accent-cyan">Learning Objectives</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span>Understand industry standards and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span>Network with professionals and alumni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span>Explore emerging technologies and innovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span>Gain cultural and professional awareness</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
