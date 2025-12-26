"use client"

import { motion } from "framer-motion"
import * as Icons from "react-icons/si"
import type { PortfolioData } from "@/lib/data-loader"

interface TechStackSectionProps {
  techStack: PortfolioData["techStack"]
}

export function TechStackSection({ techStack }: TechStackSectionProps) {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      SiJavascript: Icons.SiJavascript,
      SiTypescript: Icons.SiTypescript,
      SiReact: Icons.SiReact,
      SiNextdotjs: Icons.SiNextdotjs,
      SiNodedotjs: Icons.SiNodedotjs,
      SiExpress: Icons.SiExpress,
      SiMongodb: Icons.SiMongodb,
      SiPrisma: Icons.SiPrisma,
      SiPostgresql: Icons.SiPostgresql,
      SiSupabase: Icons.SiSupabase,
      SiTailwindcss: Icons.SiTailwindcss,
      SiFramer: Icons.SiFramer,
      SiCplusplus: Icons.SiCplusplus,
    }
    return iconMap[iconName]
  }

  return (
    <section className="py-20 px-6 bg-[#3B2F2F] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Tech Stack
        </motion.h2>

        {/* Desktop: Horizontal scrolling marquee */}
        <div className="hidden md:block relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -2000 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running"
            }}
            className="flex gap-8 w-max"
          >
            {[...techStack, ...techStack].map((tech, idx) => {
              const Icon = getIcon(tech.icon)
              return (
                <motion.div
                  key={`${tech.name}-${idx}`}
                  whileHover={{ scale: 1.2 }}
                  className="flex flex-col items-center gap-3 p-4 hover:text-[#F5C518] transition-colors cursor-pointer"
                >
                  {Icon && <Icon className="w-12 h-12" />}
                  <span className="text-sm font-semibold text-gray-300 hover:text-[#F5C518]">{tech.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Mobile: Static grid */}
        <div className="md:hidden grid grid-cols-4 gap-4">
          {techStack.map((tech) => {
            const Icon = getIcon(tech.icon)
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[#0B0B0B] hover:bg-[#F5C518]/10 transition-colors"
              >
                {Icon && <Icon className="w-8 h-8 text-[#F5C518]" />}
                <span className="text-xs text-gray-300 text-center line-clamp-2">{tech.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
