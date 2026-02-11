import { motion } from 'framer-motion'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { Palette, Layers, Lightbulb } from 'lucide-react'

export function WelcomeScreen() {
  const setScreen = useSandboxStore((s) => s.setScreen)

  return (
    <div className="h-full flex items-center justify-center bg-spotify-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spotify-green/10 via-transparent to-purple-900/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-xl text-center px-8"
      >
        {/* Spotify logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', damping: 15 }}
          className="mb-8"
        >
          <svg className="w-16 h-16 text-spotify-green mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black text-white mb-3 tracking-tight"
        >
          Welcome to Spotify's
          <br />
          <span className="text-spotify-green">UX/UI Design Team</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-spotify-text-sub text-base mb-8 leading-relaxed"
        >
          Today you're a UX/UI designer at Spotify. Your mission: build a playlist page
          by dragging and arranging real Spotify components. Along the way, you'll discover
          key design principles that professional designers use every day.
        </motion.p>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {[
            { icon: <Layers size={20} />, title: 'Drag & Drop', desc: '16 real Spotify components' },
            { icon: <Palette size={20} />, title: 'Customize', desc: 'Colors, sizes & more' },
            { icon: <Lightbulb size={20} />, title: 'Learn', desc: '8 UX design principles' },
          ].map((item, i) => (
            <div key={i} className="bg-spotify-surface/50 rounded-xl p-4 border border-white/5">
              <div className="text-spotify-green mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
              <div className="text-xs text-spotify-text-dim">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => setScreen('sandbox')}
          className="inline-flex items-center gap-2 bg-spotify-green text-spotify-black font-bold text-base px-10 py-4 rounded-full hover:bg-spotify-green-light hover:scale-105 transition-all shadow-lg shadow-spotify-green/25 cursor-pointer"
        >
          Start Designing
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  )
}
