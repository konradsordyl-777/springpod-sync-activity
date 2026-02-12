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
          <div className="bg-surface-3 border border-edge-accent/30 rounded-xl p-5 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">{activeTip.emoji}</span>
                  <h4 className="text-[13px] font-bold text-accent">{activeTip.title}</h4>
                </div>
                <p className="text-[11px] font-medium text-ink/90 mb-2 italic leading-relaxed">"{activeTip.principle}"</p>
                <p className="text-[11px] text-ink-secondary leading-relaxed">{activeTip.description}</p>
              </div>
              <button
                onClick={dismissTip}
                className="text-ink-muted hover:text-ink transition-colors duration-150 shrink-0 p-1 rounded-md hover:bg-surface-4 cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
