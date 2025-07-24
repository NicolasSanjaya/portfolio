"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
