import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedGrid from "@/components/AnimatedGrid";
import MouseGlow from "@/components/MouseGlow";
import TechArsenal from "@/components/TechArsenal";
import CommandMenu from "@/components/CommandMenu";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <LoadingScreen />

      <CustomCursor />

      <CommandMenu />

      <AnimatedGrid />

      <MouseGlow />
    ``
      <SmoothScroll />

      <ScrollProgress />
      
      <Navbar />

      <Hero />

      <About />

      <TechArsenal/>

      <Projects />

      <CTA />

      <Contact />

      <Footer />

      <BackToTop />
    </main>
  );
}