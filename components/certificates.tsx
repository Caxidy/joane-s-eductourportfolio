"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const certificates = [
  {
    title: "Educational Tour Completion Certificate",
    issuer: "University Name",
    date: "March 2025",
    image: "/professional-certificate-completion-educational-to.jpg",
  },
  {
    title: "Technology Workshop Participation",
    issuer: "Tech Innovation Hub",
    date: "March 2025",
    image: "/workshop-certificate-technology-learning.jpg",
  },
  {
    title: "Professional Development Seminar",
    issuer: "Leading Software Company",
    date: "March 2025",
    image: "/professional-development-certificate-seminar.jpg",
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent-cyan/30" />
              <h2 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">Achievements</h2>
              <div className="h-px flex-1 bg-accent-cyan/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-center text-balance mb-4">Certificates</h3>
            <p className="text-center text-muted-foreground text-lg">
              Recognitions earned during our educational journey
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-accent-cyan/20 rounded-lg overflow-hidden hover:border-accent-cyan/40 transition-all hover:shadow-lg hover:shadow-accent-cyan/5">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Issued by: <span className="text-accent-cyan">{cert.issuer}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">Date: {cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
