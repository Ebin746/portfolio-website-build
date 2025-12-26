"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import type { PortfolioData } from "@/lib/data-loader"

interface ProjectsSectionProps {
  projects: PortfolioData["projects"]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const gridColsClass =
    projects.length === 3
      ? "md:grid-cols-1 lg:grid-cols-3"
      : projects.length >= 6
        ? "md:grid-cols-2 lg:grid-cols-3"
        : "md:grid-cols-2"

  return (
    <section id="projects" className="py-20 px-6 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 ${gridColsClass} gap-8`}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#3B2F2F] rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#F5C518]/30 transition-all duration-300"
            >


              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#F5C518] mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-[#0B0B0B] text-[#F5C518] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#F5C518] text-[#0B0B0B] font-bold rounded-lg hover:shadow-lg hover:shadow-[#F5C518]/50 transition-all"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </Link>
                  )}
                  {project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-[#F5C518] text-[#F5C518] font-bold rounded-lg hover:bg-[#F5C518]/10 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
