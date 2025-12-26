"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import type { PortfolioData } from "@/lib/data-loader"

interface ExperienceSectionProps {
  experience: PortfolioData["experience"]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="py-20 px-6 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 w-1 h-full bg-gradient-to-b from-[#F5C518] to-[#3B2F2F] transform md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                <div className="bg-[#3B2F2F] p-8 rounded-lg hover:shadow-lg hover:shadow-[#F5C518]/20 transition-all relative">
                  {/* Timeline dot removed */}
                  <div className="absolute -left-6 md:absolute md:left-1/2 top-8 w-4 h-4 bg-transparent transform md:-translate-x-1/2" />

                  <h3 className="text-2xl font-bold text-[#F5C518] mb-2">{exp.role}</h3>
                  <p className="text-white font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs px-3 py-1 bg-[#0B0B0B] text-[#F5C518] rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {exp.video && (
                    <div className="mt-4">
                      <a
                        href={exp.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5C518] text-[#0B0B0B] rounded-lg font-semibold hover:bg-[#E0B500] transition-colors cursor-pointer"
                      >
                        <Play size={16} />
                        Watch Video
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
