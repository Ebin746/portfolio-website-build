"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type { PortfolioData } from "@/lib/data-loader"

interface HeroSectionProps {
  data: PortfolioData["personal"]
}

export function HeroSection({ data }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B2F2F] via-[#0B0B0B] to-[#0B0B0B]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#F5C518] shadow-2xl shadow-[#F5C518]/30">
            <Image src="/images/profile.jpeg" alt="Ebin Amson" fill className="object-cover" priority />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-[#F5C518] text-lg font-semibold mb-4 tracking-widest">Welcome to my portfolio</p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 text-balance whitespace-nowrap"
        >
          {data.name}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 mb-8 text-balance font-light">
          {data.role}
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto text-balance">
          {data.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#F5C518] text-[#0B0B0B] font-bold rounded-lg hover:shadow-lg hover:shadow-[#F5C518]/50 transition-all"
            >
              View Projects
            </motion.button>
          </Link>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Ebin-Amson-Resume.pdf"
            className="px-8 py-3 border-2 border-[#F5C518] text-[#F5C518] font-bold rounded-lg hover:bg-[#F5C518]/10 hover:shadow-lg hover:shadow-[#F5C518]/50 transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
