import { motion } from 'framer-motion'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { Palette, Layers, Lightbulb, ArrowRight } from 'lucide-react'

export function WelcomeScreen() {
  const setScreen = useSandboxStore((s) => s.setScreen)

  return (
    <div className="h-full flex items-center justify-center bg-surface-base relative overflow-hidden">
      {/* Background gradient — subtle, not decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1db95408_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 max-w-lg text-center px-8"
      >
        {/* Spotify logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-8"
        >
          <svg className="w-12 h-12 text-accent mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-3xl font-black text-ink mb-2 tracking-tight leading-tight"
        >
          Welcome to Spotify's
          <br />
          <span className="text-accent">UX/UI Design Team</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-ink-secondary text-sm mb-10 leading-relaxed max-w-sm mx-auto"
        >
          Today you're a UX/UI designer at Spotify. Build a playlist page
          by arranging real components, and discover key design principles along the way.
        </motion.p>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="grid grid-cols-3 gap-3 mb-10"
        >
          {[
            { icon: <Layers size={18} />, title: 'Drag & Drop', desc: '16 components' },
            { icon: <Palette size={18} />, title: 'Customize', desc: 'Colors & sizes' },
            { icon: <Lightbulb size={18} />, title: 'Learn', desc: '8 UX principles' },
          ].map((item, i) => (
            <div key={i} className="bg-surface-2 border border-edge-subtle rounded-xl p-4 text-left">
              <div className="text-accent mb-2.5">{item.icon}</div>
              <div className="text-[13px] font-semibold text-ink mb-0.5">{item.title}</div>
              <div className="text-[11px] text-ink-tertiary">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          onClick={() => setScreen('sandbox')}
          className="inline-flex items-center gap-2 bg-accent text-surface-base font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-all duration-150 cursor-pointer"
        >
          Start Designing
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>
    </div>
  )
}
