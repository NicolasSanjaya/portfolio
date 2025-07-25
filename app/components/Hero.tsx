"use client";

import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I'm a Fullstack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-bounce-slow">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold text-white">
                N
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="gradient-text">Nicolas Sanjaya</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I create exceptional digital experiences with modern web
            technologies. Passionate about building scalable applications and
            solving complex problems through clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/resume.pdf"
              className="btn-primary flex items-center gap-2"
              download
            >
              <Download size={20} />
              Download Resume
            </Link>
            <Link
              href={"#projects"}
              className="btn-secondary flex items-center gap-2"
            >
              View My Work
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mb-16">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 glow-on-hover group mx-4"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </Link>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-5 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Hero;
