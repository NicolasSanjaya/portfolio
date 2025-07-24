"use client";

import { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Smartphone,
  Globe,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      icon: Monitor,
      title: "Frontend Development",
      skills: [
        "React/Next.js",
        "TypeScript",
        "Laravel",
        "Tailwind CSS",
        "SASS/SCSS",
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Laravel"],
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma ORM"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Docker", "Vercel", "Netlify", "Railway"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Expo", "Flutter", "PWA"],
    },
    {
      icon: Globe,
      title: "Tools & Others",
      skills: ["Git/GitHub", "VS Code", "Figma", "Postman", "Jest/Testing"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-800/50 p-8 rounded-xl glass glow-on-hover"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 my-2 py-2 bg-gray-700/30 rounded-lg text-gray-300 font-medium hover:bg-gray-600/40 hover:text-white transition-all duration-300 border border-gray-600/50 hover:border-blue-500/50"
                      style={{
                        animationDelay: `${
                          categoryIndex * 0.2 + skillIndex * 0.1
                        }s`,
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Payment Integration",
                "Web3 Integration",
                "ESLint",
                "Prettier",
                "Socket.io",
                "Firebase",
                "Supabase",
                "Neon DB",
                "REST APIs",
                "Agile/Scrum",
                "Prompt Engineering",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default border border-gray-600 hover:border-blue-500"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
