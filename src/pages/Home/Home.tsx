import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import Philosophy from "../../components/sections/Philosophy";
import CaseStudy from "../../components/sections/CaseStudy";
import Experience from "../../components/sections/Experience";
import Skills from "../../components/sections/Skills";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Philosophy />
      <CaseStudy />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
