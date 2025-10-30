import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  const handleLoadComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoadComplete} />}
      
      {showContent && (
        <div className="relative min-h-screen">
          <ThreeBackground />
          <Header />
          <Hero />
          <BrandCarousel />
          <Projects />
          <Process />
          <Testimonials />
          <About />
          <Pricing />
          <FAQ />
          <Contact />
        </div>
      )}
    </>
  );
};

export default Index;
