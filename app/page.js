'use client'

import React from 'react'
import { motion } from 'motion/react'
import { 
  Users, 
  Clock, 
  Zap, 
  FileText, 
  Navigation,
  ShieldCheck,
  Activity
} from 'lucide-react'

// Brand Logo Component
const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-sm">
      <span className="text-white font-semibold text-2xl">A</span>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-semibold tracking-tight leading-none text-brand-primary underline-offset-4">ACURIS Med</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-medium">Clinical Intelligence</span>
    </div>
  </div>
)

const StatCard = ({ icon: Icon, label, value, subLabel, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-10 flex flex-col justify-between h-48"
  >
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-semibold text-brand-muted uppercase tracking-widest">{label}</span>
      <div className="flex items-baseline gap-2 mt-4">
        <h3 className="text-5xl font-semibold text-brand-primary">{value}</h3>
        {subLabel && <span className="text-sm text-brand-muted font-medium uppercase">{subLabel.includes('%') ? subLabel : subLabel.split(' ')[0]}</span>}
      </div>
    </div>
    {subLabel && subLabel.includes('industry') && (
      <p className="text-[10px] text-brand-muted mt-2 italic border-t border-brand-bg pt-2">{subLabel}</p>
    )}
  </motion.div>
)

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans flex flex-col p-8 md:p-12 max-w-[1400px] mx-auto">
      {/* Navigation / Header */}
      <header className="mb-20 flex items-center justify-center">
        <Logo />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
        {/* Hero Section */}
        <div className="mb-16 flex flex-col items-center">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-center text-brand-text mb-4 tracking-tight">
              Infrastructure for Modern Medicine.
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed text-center">
              ACURIS Med provides reliable, clinical-grade transcription services designed to 
              minimize administrative friction and maximize patient-facing time.
            </p>
          </motion.div>
        </div>

        {/* Statistics Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border border border-brand-border rounded-lg overflow-hidden shadow-sm">
          <StatCard 
            icon={Users}
            label="Total Active Users"
            value="53"
            delay={0.2}
          />
          <StatCard 
            icon={Clock}
            label="Cumulative Time Saved"
            value="402.77"
            subLabel="MINUTES"
            delay={0.3}
          />
          <StatCard 
            icon={Zap}
            label="Time to transcription per minute of audio"
            value="1.453"
            subLabel="MINUTES (Industry average is 3 mins of transcription work per minute of audio)"
            delay={0.4}
          />
          <StatCard 
            icon={FileText}
            label="Total Transcriptions Delivered"
            value="100+"
            subLabel="RECORDS"
            delay={0.5}
          />
        </div>
      </main>
    </div>
  )
}
