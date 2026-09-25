/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Aurora } from "./components/ui/Aurora"
import { SwarmCursor } from "./components/ui/SwarmCursor"
import { AuroraBackgroundControl, AuroraSettings } from "./components/AuroraBackgroundControl"
import { ScrollProgressBar } from "./components/ScrollProgressBar"
import { ScrollReveal } from "./components/ScrollReveal"
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { AuraRvShowcaseSection } from "./components/AuraRvShowcaseSection"
import { RenderShowcaseSection } from "./components/RenderShowcaseSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { GithubSection } from "./components/GithubSection"
import { SkillsSection } from "./components/SkillsSection"
import { ContactSection } from "./components/ContactSection"
import { SectionDivider } from "./components/SectionDivider"
import { Footer } from "./components/Footer"

export default function App() {
  const [auroraSettings, setAuroraSettings] = useState<AuroraSettings>({
    colorStops: ["#7cff67", "#B497CF", "#5227FF"],
    blend: 0.5,
    amplitude: 1.0,
    speed: 0.5,
    lightMode: false,
  })

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen text-[#141414] flex flex-col font-sans selection:bg-[#e5262c] selection:text-white bg-[#f6f4f0]">
      {/* Site-wide Ambient Aurora Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Aurora
          colorStops={auroraSettings.colorStops}
          blend={auroraSettings.blend}
          amplitude={auroraSettings.amplitude}
          speed={auroraSettings.speed}
          lightMode={auroraSettings.lightMode}
        />
        {/* Subtle translucent warm overlay to harmonize with Swiss paper aesthetic */}
        <div className="absolute inset-0 bg-[#f6f4f0]/25 pointer-events-none" />
      </div>

      {/* Interactive Swarm Cursor Particle Fluid Dynamics Layer */}
      <div
        className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
        aria-hidden="true"
      >
        <SwarmCursor
          color="#e5262c"
          accentColor="#5227FF"
          count={14}
          size={9}
          speed={2.8}
          spread={90}
          wander={0.25}
          trail={0.75}
          merge={0.77}
          glow={0.7}
          opacity={0.88}
          scatterOnClick={true}
          enabled={auroraSettings.swarmCursorEnabled !== false}
        />
      </div>

      {/* Floating Aurora Shader Control Badge */}
      <AuroraBackgroundControl
        settings={auroraSettings}
        onChange={setAuroraSettings}
      />

      {/* Top Animated Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* 3-Zone Top Bar Navigation */}
      <div className="relative z-20">
        <Navbar onNavClick={handleNavClick} />
      </div>

      <main className="relative z-10 flex-1">
        {/* Interactive Hero with Waving Portfolio Component */}
        <HeroSection />

        {/* Latest Flagship Project: Aura RV (https://aurarv.netlify.app/) */}
        <ScrollReveal>
          <AuraRvShowcaseSection />
        </ScrollReveal>

        <SectionDivider sectionNumber="01" label="Engineering Architecture & Web Systems" />

        {/* Website Design Showcase (https://sudhanshu-wxc2.onrender.com/) */}
        <ScrollReveal>
          <RenderShowcaseSection />
        </ScrollReveal>

        <SectionDivider sectionNumber="02" label="Hardware & Silicon Case Studies" />

        {/* Curated Projects & Case Studies */}
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>

        {/* Thin divider specifically requested between ProjectsSection and GithubSection */}
        <SectionDivider sectionNumber="03" label="Live Open Source & Version Control" accent />

        {/* Live GitHub Profile & Repositories */}
        <ScrollReveal>
          <GithubSection />
        </ScrollReveal>

        <SectionDivider sectionNumber="04" label="Technical Capabilities & Toolchains" />

        {/* Capabilities, Freelance Practice & Engineering Stack */}
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>

        <SectionDivider sectionNumber="05" label="Collaboration & Inquiries" />

        {/* Contact & Inquiry Hub */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  )
}
