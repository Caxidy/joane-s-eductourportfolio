import Header from "@/components/header"
import Hero from "@/components/hero"
import Profile from "@/components/profile"
import About from "@/components/about"
import Itinerary from "@/components/itinerary"
import Learnings from "@/components/learnings"
import Gallery from "@/components/gallery"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="profile">
        <Profile />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="itinerary">
        <Itinerary />
      </div>
      <div id="learnings">
        <Learnings />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}
