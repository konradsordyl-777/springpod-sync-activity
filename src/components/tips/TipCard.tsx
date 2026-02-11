import { motion, AnimatePresence } from 'framer-motion'
import { X, Lightbulb } from 'lucide-react'
import { useSandboxStore } from '@/stores/useSandboxStore'

export function TipCard() {
  const activeTip = useSandboxStore((s) => s.activeTip)
  const dismissTip = useSandboxStore((s) => s.dismissTip)

  return (
    <AnimatePresence>
      {activeTip && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[480px] max-w-[90vw]"
        >
          <div className="bg-spotify-surface border border-spotify-green/30 rounded-xl p-5 shadow-2xl shadow-black/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-spotify-green/20 flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb size={20} className="text-spotify-green" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{activeTip.emoji}</span>
                  <h4 className="text-sm font-bold text-spotify-green">{activeTip.title}</h4>
                </div>
                <p className="text-xs font-medium text-white/90 mb-2 italic">"{activeTip.principle}"</p>
                <p className="text-xs text-spotify-text-sub leading-relaxed">{activeTip.description}</p>
              </div>
              <button
                onClick={dismissTip}
                className="text-spotify-text-dim hover:text-white transition-colors shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
