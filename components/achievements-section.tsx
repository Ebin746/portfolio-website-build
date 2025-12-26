"use client"

import { motion } from "framer-motion"
import type { PortfolioData } from "@/lib/data-loader"

interface AchievementsSectionProps {
  achievements: PortfolioData["achievements"]
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-6 bg-[#3B2F2F]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(245, 197, 24, 0.3)",
              }}
              className="p-6 bg-[#0B0B0B] rounded-lg border-l-4 border-[#F5C518] hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-[#F5C518] mb-3">{achievement.title}</h3>
              <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
