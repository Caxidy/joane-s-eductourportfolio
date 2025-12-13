"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-accent-cyan/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent-cyan to-foreground bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Portfolio
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("profile")}
              className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("itinerary")}
              className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              Itinerary
            </button>
            <button
              onClick={() => scrollToSection("learnings")}
              className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              Learnings
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-accent-cyan">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
