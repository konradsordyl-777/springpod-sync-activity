import { useSandboxStore } from '@/stores/useSandboxStore'
import { designTips } from '@/data/designTips'
import { Lock } from 'lucide-react'

export function TipHistory() {
  const discoveredTips = useSandboxStore((s) => s.discoveredTips)

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-1">
        Design Tips ({discoveredTips.length}/{designTips.length})
      </h3>
      {designTips.map((tip) => {
        const discovered = discoveredTips.includes(tip.id)
        return (
          <div
            key={tip.id}
            className={`rounded-lg p-3 transition-colors duration-150 ${
              discovered
                ? 'bg-surface-2 border border-edge-subtle'
                : 'bg-surface-base border border-edge-subtle'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {discovered ? (
                <>
                  <span className="text-sm">{tip.emoji}</span>
                  <span className="text-[11px] font-semibold text-accent">{tip.title}</span>
                </>
              ) : (
                <>
                  <Lock size={10} className="text-ink-muted" />
                  <span className="text-[11px] text-ink-muted">???</span>
                </>
              )}
            </div>
            {discovered && (
              <p className="text-[10px] text-ink-tertiary leading-relaxed italic">
                {tip.principle}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
