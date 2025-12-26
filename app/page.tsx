import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { CustomCursor } from "@/components/custom-cursor"
import { Navbar } from "@/components/navbar"
import { getPortfolioData } from "@/lib/data-loader"

export default async function Home() {
  const data = await getPortfolioData()

  return (
    <main className="min-h-screen bg-[#0B0B0B]">
      <CustomCursor />
      <Navbar />
      <div className="pt-16">
        <section id="home">
          <HeroSection data={data.personal} />
        </section>
        <section id="about">
          <AboutSection data={data.personal} education={data.education} />
        </section>
        <section id="experience">
          <ExperienceSection experience={data.experience} />
        </section>
        <section id="techstack">
          <TechStackSection techStack={data.techStack} />
        </section>
        <section id="projects">
          <ProjectsSection projects={data.projects} />
        </section>
        <section id="achievements">
          <AchievementsSection achievements={data.achievements} />
        </section>
        <section id="contact">
          <ContactSection data={data.personal} />
        </section>
      </div>
    </main>
  )
}
