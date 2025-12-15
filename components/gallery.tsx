"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

const galleryImages = [
  {
    url: "/pic11.jpg",
    caption: "Flight to Cebu",
    location: "Davao International Airport",
  },
  {
    url: "/pic1.jpg",
    caption: "First timer",
    location: "Airplane",
  },
  {
    url: "/pic2.jpg",
    caption: "First Company Visit",
    location: "WorldTech Information Solutions, Inc",
  },
  {
    url: "/pic3.jpg",
    caption: "Second Visit Company",
    location: "Codechum Venue at CIT-U Wildcat Innovation",
  },
  {
    url: "/pic4.jpg",
    caption: "Library of CIT-U",
    location: "CIT-U Wildcat Innovation",
  },
  {
    url: "/pic5.jpg",
    caption: "Third Company Visit",
    location: "Rivan IT Cebu",
  },
  {
    url: "/pic16.jpg",
    caption: "Hands-on IT equipment experience",
    location: "Rivan IT Cebu",
  },
  {
    url: "/pic15.jpg",
    caption: "Hands-on configuring experience",
    location: "Rivan IT Cebu",
  },
  {
    url: "/pic6.jpg",
    caption: "Breakfast at Cafe Bai Hotel",
    location: "Bai Hotel",
  },
  {
    url: "/pic7.jpg",
    caption: "Fourth Company Visit",
    location: "Mata Techologies, Inc.",
  },
  {
    url: "/pic8.jpg",
    caption: "Travel to Tagbilaran ",
    location: "Supercat",
  },
  {
    url: "/pic9.jpg",
    caption: "Last Company Visit",
    location: "T.A.S.I.E.R. 711",
  },
  {
    url: "/pic10.jpg",
    caption: "The trio's",
    location: "Loboc River",
  },
  {
    url: "/pic12.jpg",
    caption: "Classmate's",
    location: "Loboc River",
  },
  {
    url: "/pic13.jpg",
    caption: "With Ms. Secretary",
    location: "Tarsi Man-Made Forest",
  },
  {
    url: "/pic17.jpg",
    caption: "What a great exprience",
    location: "Mirror The World",
  },
  {
    url: "/pic14.jpg",
    caption: "Amazing tour",
    location: "Innovation Hub",
  },
  {
    url: "/pic18.jpg",
    caption: "Goodbye",
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
