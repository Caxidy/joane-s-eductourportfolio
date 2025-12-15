"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const itineraryData = [
  {
    day: "Day 1",
    date: "November 19, 2025",
    image: "/airport2.jpg",
    activities: [
      "Welcome to CEBU",
      "Visit a company: WORLDTECH INFORMATION SOLUTION,INC",
    ],
    description: "Introduction to advanced technology and development practices.",
  },
  {
    day: "Day 2",
    date: "November 20, 2025",
    image: "/church2.jpg",
    activities: [
      "Visit a company: CODECHUM",
      "Visit a church at Basilica Minore del Santo Niño de Cebu",
      "Visit a company: RIVAN IT CEBU",
    ],
    description: "Insights into agile development, collaborative programmers, networking training centers and higher education opportunities.",
  },
  {
    day: "Day 3",
    date: "November 21, 2025",
    image: "/mata.jpg",
    activities: [
      "Visit a company: MATA TECHNOLOGIES, INC.",
      "Goodbye Cebu",
      "Welcome to Bohol",
    ],
    description: "Exploration of new technologies.",
  },
  {
    day: "Day 4",
    date: "November 22, 2025",
    image: "/tarsier2.jpg",
    activities: [
      "Visit a company: T.A.R.S.I.E.R. 117",
      "Lunch at Loboc River",
      "Take a pictures at BACLAYON CHURCHCHOCOLATE HILLS",
      "Watch a tarsier at BOHOL TARSIER CONSERVATION AREA",
      "Take a pictures at TARSI MAN-MADE FOREST",
      "Take a pictures at MIRROR OF THE WORLD",
      "Goodbye Bohol",
      "Hello Manila",
      "Good to be back in Davao",
    ],
    description: "Understanding the startup culture and entrepreneurial mindset.",
  },
]

export default function Itinerary() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent-cyan/30" />
              <h2 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">Schedule</h2>
              <div className="h-px flex-1 bg-accent-cyan/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-center text-balance mb-4">Tour Itinerary</h3>
            <p className="text-center text-muted-foreground text-lg">
              A day-by-day breakdown of my educational journey
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {itineraryData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent-cyan/20 border-2 border-accent-cyan flex items-center justify-center font-bold text-accent-cyan shrink-0">
                      {index + 1}
                    </div>
                    {index < itineraryData.length - 1 && <div className="w-px h-full bg-accent-cyan/30 mt-2" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="bg-card border border-accent-cyan/20 rounded-lg overflow-hidden hover:border-accent-cyan/40 transition-colors">
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h4 className="text-2xl font-bold text-accent-cyan mb-1">{item.day}</h4>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                          </div>
                          <div className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-sm text-accent-cyan">
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground">Activities:</p>
                          <ul className="space-y-2">
                            {item.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-accent-cyan mt-1">→</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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
