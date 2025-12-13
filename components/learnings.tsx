"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const learningImages = [
  "/learning-1.jpg",
  "/learning-2.jpg",
  "/learning-3.jpg",
  "/learning-4.jpg",
  "/learning-5.jpg",
  "/learning-6.jpg",
  "/learning-7.jpg",
  "/learning-8.jpg",
  "/learning-9.jpg",
]

export default function Learnings() {
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
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent-cyan/30" />
              <h2 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">Key Takeaways</h2>
              <div className="h-px flex-1 bg-accent-cyan/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-center text-balance mb-4">Learning Experiences</h3>
            <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
              Visual highlights from our educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-card border border-accent-cyan/20 rounded-lg overflow-hidden hover:border-accent-cyan/40 transition-all hover:shadow-lg hover:shadow-accent-cyan/5 aspect-square"
              >
                <div className="relative h-full w-full overflow-hidden bg-muted">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Learning experience ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
