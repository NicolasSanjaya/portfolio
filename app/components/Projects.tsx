"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const projects = [
    {
      title: "Car Rental Platform",
      description:
        "Turbo Rent is a modern and responsive web platform that allows users to browse and rent luxury sports cars and supercars. Built with Next.js, the website features a sleek design, user-friendly interface, and seamless booking experience for customers who want to enjoy high-performance vehicles for any occasion.",
      image: "/images/turbo-rent.png",
      category: "Fullstack",
      technologies: [
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Midtrans",
        "Metamask",
      ],
      github: "https://github.com/NicolasSanjaya/car-rental-web",
      live: "https://car-rental-web-weld.vercel.app",
      features: [
        "User Authentication",
        "Payment Gateway",
        "Blockchain Payment",
        "Admin Dashboard",
      ],
    },
    {
      title: "Sentiment Analysis App",
      description:
        "This project is a web-based application developed as part of a thesis (skripsi) that performs sentiment analysis on textual data. Users can upload a CSV file containing user-generated content (e.g., comments or reviews), and the system will analyze the sentiment (positive, neutral, or negative) using a pre-trained machine learning model.",
      image: "/images/sentiment-analysis.png",
      category: "Fullstack",
      technologies: ["Python", "Flask", "Google Colab", "JavaScript"],
      github: "https://github.com/NicolasSanjaya/skripsi",
      live: "#",
      features: [
        "Sentiment Classification",
        "CSV Upload",
        "Text Preprocessing",
        "Model Integration",
      ],
    },
    {
      title: "E-Commerce API",
      description:
        "A lightweight, API-driven backend for an e-commerce platform built with Node.js. It uses Prisma ORM to manage database operations (likely connecting to PostgreSQL or MySQL), and exposes RESTful routes for handling products, categories, tags, users, carts, and orders.",
      image: "https://placehold.co/600x400",
      category: "Backend",
      technologies: [
        "RESTful API",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT",
        "Cloudinary",
        "Prisma ORM",
      ],
      github: "https://github.com/NicolasSanjaya/backend-ecommerce",
      live: "#",
      features: [
        "RESTful API",
        "Product Management",
        "Authentication",
        "User Management",
        "Media Upload",
        "Shopping Cart",
      ],
    },
  ];

  const categories = ["All", "Fullstack", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gray-950 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex justify-center flex-wrap gap-2 p-2 bg-gray-800/50 rounded-xl glass">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden glass glow-on-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Link
                        href={project.github}
                        className="flex-1 bg-gray-800/90 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                      <Link
                        href={project.live}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600/90 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-1"
                        >
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              href="https://github.com/nicolassanjaya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View All Projects on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
