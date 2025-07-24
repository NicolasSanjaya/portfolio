"use client";

import { useState } from "react";
import {
  ArrowUp,
  Heart,
  Code2,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    // { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nicolassanjaya",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nicolassanjaya",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/nicolasan3",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:nicolassanjaya4823@gmail.com", label: "Email" },
  ];

  return (
    <>
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold gradient-text">
                    Nicolas Sanjaya
                  </h3>
                  <p className="text-gray-400 text-sm">Fullstack Developer</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Passionate fullstack developer creating exceptional digital
                experiences with modern web technologies. Always learning,
                always building.
              </p>

              <div className="flex">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 group mr-4"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 my-2"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <Link
                    href="mailto:nicolassanjaya4823@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    nicolassanjaya4823@gmail.com
                  </Link>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <Link
                    href="https://wa.me/6281286513146"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +62 812-8651-3146
                  </Link>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-300">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-4 items-center text-gray-400 mb-4 md:mb-0">
                <span>© {currentYear} Nicolas Sanjaya.</span>
                <span className="flex items-center">
                  Made with{" "}
                  <Heart className="w-4 h-4 text-red-500 animate-pulse mx-2" />{" "}
                  using Next.js & Tailwind CSS
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-6">Available for new opportunities</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}

        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-700 z-50 glow-on-hover ${
            showScrollTop ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </footer>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:40px_40px] opacity-20"></div>
      </div>
    </>
  );
};

export default Footer;
