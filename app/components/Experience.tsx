"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

const Experience = () => {
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

  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "TechCorp Solutions",
      location: "Jakarta, Indonesia",
      period: "2023 - Present",
      type: "Full-time",
      description:
        "Lead development of scalable web applications using React, Next.js, and Node.js. Mentor junior developers and architect solutions for complex business requirements.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers in delivering 3 major projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Designed and built microservices architecture serving 100K+ users",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Digital Innovations Ltd",
      location: "Bandung, Indonesia",
      period: "2022 - 2023",
      type: "Full-time",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.",
      achievements: [
        "Built 8+ responsive web applications from scratch",
        "Integrated third-party APIs and payment gateways",
        "Reduced bug reports by 50% through comprehensive testing",
        "Improved code quality by implementing ESLint and Prettier",
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API"],
    },
    {
      title: "Frontend Developer",
      company: "StartupHub Inc",
      location: "Remote",
      period: "2021 - 2022",
      type: "Contract",
      description:
        "Specialized in creating responsive and interactive user interfaces. Worked closely with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Converted 15+ Figma designs to responsive React components",
        "Improved website loading speed by 35% through optimization",
        "Implemented real-time features using Socket.io",
        "Built reusable component library used across multiple projects",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Socket.io",
        "Jest",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "WebSolutions Agency",
      location: "Jakarta, Indonesia",
      period: "2020 - 2021",
      type: "Full-time",
      description:
        "Started my professional journey building websites and learning modern development practices. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Completed 20+ client websites with 100% satisfaction rate",
        "Learned and implemented responsive design principles",
        "Collaborated with senior developers on complex projects",
        "Contributed to company&apos;s internal tool development",
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My professional journey and the impact I&apos;ve made
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-950 z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="bg-gray-800/50 p-6 rounded-xl glass glow-on-hover">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                          <span className="px-2 py-1 bg-blue-600/20 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-300 mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-400 mb-6">
              Interested in working together?
            </p>
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <Briefcase className="w-5 h-5" />
              Let&apos;s Discuss Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
