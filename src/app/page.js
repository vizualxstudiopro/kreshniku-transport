import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Popup from "../../components/Popup"
import About from "../../components/About"
import Services from "../../components/Services"
import Process from "../../components/Process"
import Routes from "../../components/Routes"
import Schedule from "../../components/Schedule"
import Gallery from "../../components/Gallery"
import CustomsRules from "../../components/CustomsRules" // <-- Shto këtë rresht
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Popup />
      <Hero />
      <About />
      <Services />
      <Process />
      <Routes />
      <Schedule />
      <Gallery />
      <CustomsRules /> {/* <-- Dhe shto këtë rresht këtu */}
      <Contact />
      <Footer />
    </div>
  )
}