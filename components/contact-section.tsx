"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import type { PortfolioData } from "@/lib/data-loader"

interface ContactSectionProps {
  data: PortfolioData["personal"]
}

export function ContactSection({ data }: ContactSectionProps) {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const social = [
    {
      icon: FiLinkedin,
      url: data.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: FiGithub,
      url: data.social.github,
      label: "GitHub",
    },
    {
      icon: FaWhatsapp,
      url: data.social.whatsapp,
      label: "WhatsApp",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Get in Touch</h2>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#3B2F2F] rounded-lg cursor-pointer hover:shadow-lg hover:shadow-[#F5C518]/30 transition-all"
              onClick={copyEmail}
            >
              <FiMail className="w-8 h-8 text-[#F5C518] mx-auto mb-4" />
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <p className="text-white font-semibold break-all text-sm">{data.email}</p>
              {copied && <p className="text-[#F5C518] text-xs mt-2">Copied!</p>}
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#3B2F2F] rounded-lg hover:shadow-lg hover:shadow-[#F5C518]/30 transition-all"
            >
              <FiPhone className="w-8 h-8 text-[#F5C518] mx-auto mb-4" />
              <p className="text-gray-400 text-sm mb-2">Phone</p>
              <p className="text-white font-semibold text-sm">{data.phone}</p>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#3B2F2F] rounded-lg hover:shadow-lg hover:shadow-[#F5C518]/30 transition-all"
            >
              <FiMapPin className="w-8 h-8 text-[#F5C518] mx-auto mb-4" />
              <p className="text-gray-400 text-sm mb-2">Location</p>
              <p className="text-white font-semibold text-sm">{data.location}</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {social.map((item) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 0 20px rgba(245, 197, 24, 0.5)",
                  }}
                  className="p-4 bg-[#3B2F2F] rounded-full text-[#F5C518] hover:bg-[#F5C518] hover:text-[#0B0B0B] transition-all"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
