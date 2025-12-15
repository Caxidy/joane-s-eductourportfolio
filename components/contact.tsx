"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Contact() {
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
              <h2 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">Get in Touch</h2>
              <div className="h-px flex-1 bg-accent-cyan/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-center text-balance mb-4">Contact Information</h3>
            <p className="text-center text-muted-foreground text-lg">
              For inquiries about this educational tour portfolio
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-accent-cyan/20 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold mb-4 text-accent-cyan">Academic Details</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">School</p>
                  <p className="font-semibold text-foreground">Holy Cross Davao College</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Course & Section</p>
                  <p className="font-semibold text-foreground">BS Information Technology - Section A</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Academic Year</p>
                  <p className="font-semibold text-foreground">2025-2026</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-accent-cyan/20 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold mb-4 text-accent-cyan">Email Inquiry</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Email Address</p>
                  <p className="font-semibold text-foreground">joane.morales@hcdc.edu.ph</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="h-px bg-accent-cyan/30 mb-8" />
            <p className="text-sm text-muted-foreground mb-2">Educational Tour Portfolio 2025-2026</p>
            <p className="text-xs text-muted-foreground">Created with dedication and passion for learning</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
