"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const itineraryData = [
  {
    day: "Day 1",
    date: "March 15, 2025",
    location: "Tech Innovation Hub",
    image: "/modern-tech-innovation-hub-with-ai-displays-and-in.jpg",
    activities: [
      "Welcome orientation and facility tour",
      "Keynote presentation on AI and Machine Learning",
      "Interactive workshop on emerging technologies",
    ],
    description: "Introduction to cutting-edge technology research and development practices.",
  },
  {
    day: "Day 2",
    date: "March 16, 2025",
    location: "Leading Software Company",
    image: "/modern-software-company-office-with-collaborative-.jpg",
    activities: [
      "Corporate culture presentation",
      "Software development lifecycle demonstration",
      "Networking session with engineers",
    ],
    description: "Insights into agile development and collaborative software engineering.",
  },
  {
    day: "Day 3",
    date: "March 17, 2025",
    location: "University Research Lab",
    image: "/university-research-laboratory-with-advanced-equip.jpg",
    activities: [
      "Tour of advanced research facilities",
      "Presentation on current research projects",
      "Discussion with graduate students and faculty",
    ],
    description: "Exploration of academic research and higher education opportunities.",
  },
  {
    day: "Day 4",
    date: "March 18, 2025",
    location: "Startup Incubator",
    image: "/vibrant-startup-incubator-space-with-entrepreneurs.jpg",
    activities: [
      "Introduction to entrepreneurship ecosystem",
      "Pitch presentations from startup founders",
      "Workshop on innovation and product development",
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
              A day-by-day breakdown of our educational journey
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
                          alt={`${item.location} - ${item.day}`}
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
                            {item.location}
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
