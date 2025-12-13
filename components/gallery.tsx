"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

const galleryImages = [
  {
    url: "/modern-tech-office.png",
    caption: "Exploring cutting-edge tech company facilities",
    location: "Tech Innovation Hub",
  },
  {
    url: "/students-networking-with-professionals.jpg",
    caption: "Networking session with industry professionals",
    location: "Software Company",
  },
  {
    url: "/university-research-laboratory-equipment.jpg",
    caption: "Tour of advanced research laboratories",
    location: "University Research Lab",
  },
  {
    url: "/startup-office-creative-workspace.jpg",
    caption: "Visiting innovative startup incubator",
    location: "Startup Incubator",
  },
  {
    url: "/students-collaborating-in-tech-workshop.jpg",
    caption: "Collaborative workshop session",
    location: "Innovation Center",
  },
  {
    url: "/modern-data-center-servers.jpg",
    caption: "Data center infrastructure tour",
    location: "Cloud Computing Facility",
  },
  {
    url: "/students-in-robotics-lab.jpg",
    caption: "Hands-on robotics experience",
    location: "Robotics Laboratory",
  },
  {
    url: "/coding-bootcamp-classroom.jpg",
    caption: "Interactive coding session",
    location: "Development Workshop",
  },
  {
    url: "/ai-demonstration-presentation.jpg",
    caption: "AI and machine learning demo",
    location: "AI Research Center",
  },
  {
    url: "/group-presentation-students.jpg",
    caption: "Team project presentation",
    location: "Conference Room",
  },
  {
    url: "/cybersecurity-operations-center.jpg",
    caption: "Cybersecurity operations center visit",
    location: "Security Operations",
  },
  {
    url: "/students-virtual-reality-lab.jpg",
    caption: "VR and AR technology exploration",
    location: "Virtual Reality Lab",
  },
  {
    url: "/tech-company-cafeteria-networking.jpg",
    caption: "Lunch and networking session",
    location: "Company Cafeteria",
  },
  {
    url: "/software-dev-team-meeting.png",
    caption: "Observing agile development process",
    location: "Development Team",
  },
  {
    url: "/tech-museum-interactive-exhibits.jpg",
    caption: "Interactive technology exhibits",
    location: "Tech Museum",
  },
  {
    url: "/students-group-photo-tech-building.jpg",
    caption: "Group photo at tech campus",
    location: "Campus Grounds",
  },
  {
    url: "/blockchain-technology-presentation.jpg",
    caption: "Blockchain technology seminar",
    location: "Innovation Hub",
  },
  {
    url: "/farewell-group-celebration-students.jpg",
    caption: "Farewell celebration and reflection",
    location: "Final Day",
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <section ref={ref} className="py-24 bg-background">
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
              <h2 className="text-sm uppercase tracking-wider text-accent-cyan font-semibold">Memories</h2>
              <div className="h-px flex-1 bg-accent-cyan/30" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-center text-balance mb-4">Photo Gallery</h3>
            <p className="text-center text-muted-foreground text-lg">Capturing moments from our educational journey</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-lg border border-accent-cyan/20 cursor-pointer hover:border-accent-cyan/40 transition-all"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">{image.caption}</p>
                    <p className="text-xs text-accent-cyan">{image.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">Photo Gallery Image</DialogTitle>
          <DialogDescription className="sr-only">View larger version of gallery photo</DialogDescription>
          {selectedImage && (
            <div className="space-y-4">
              <img
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.caption}
                className="w-full rounded-lg"
              />
              <div>
                <p className="font-semibold text-lg text-foreground mb-1">{selectedImage.caption}</p>
                <p className="text-sm text-accent-cyan">{selectedImage.location}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
