import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

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
          <Projects />
        </div>
      )}
    </>
  );
};

export default Index;
