"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data-loader"

interface AboutSectionProps {
  data: PortfolioData["personal"]
  education: PortfolioData["education"]
}

export function AboutSection({ data, education }: AboutSectionProps) {
  return (
    <section className="py-20 px-6 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">{data.bio}</p>
          {/* 
          <h3 className="text-3xl font-bold text-white mb-4">Education</h3>
          <p className="text-xl text-gray-300 border-l-4 border-[#F5C518] pl-4 py-2 bg-[#1A1A1A] rounded-r-lg">
            CSE Engg at CUSAT
          </p> */}
        </motion.div>
      </div>
    </section>
  )
}
