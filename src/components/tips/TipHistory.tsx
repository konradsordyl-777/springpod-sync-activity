import { useSandboxStore } from '@/stores/useSandboxStore'
import { designTips } from '@/data/designTips'
import { Lightbulb, Lock } from 'lucide-react'

export function TipHistory() {
  const discoveredTips = useSandboxStore((s) => s.discoveredTips)

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-spotify-text-sub mb-1">
        Design Tips ({discoveredTips.length}/{designTips.length})
      </h3>
      {designTips.map((tip) => {
        const discovered = discoveredTips.includes(tip.id)
        return (
          <div
            key={tip.id}
            className={`rounded-lg p-3 transition-colors ${
              discovered
                ? 'bg-spotify-surface'
                : 'bg-spotify-dark border border-white/5'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {discovered ? (
                <>
                  <span className="text-sm">{tip.emoji}</span>
                  <span className="text-xs font-semibold text-spotify-green">{tip.title}</span>
                </>
              ) : (
                <>
                  <Lock size={12} className="text-spotify-text-dim" />
                  <span className="text-xs text-spotify-text-dim">???</span>
                </>
              )}
            </div>
            {discovered && (
              <p className="text-[10px] text-spotify-text-sub leading-relaxed italic">
                {tip.principle}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
