import { Lightbulb } from 'lucide-react'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { designTips } from '@/data/designTips'

export function TipBadge() {
  const discoveredTips = useSandboxStore((s) => s.discoveredTips)
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <Lightbulb size={13} className="text-accent" />
      <span className="text-ink-tertiary">
        <span className="text-accent font-semibold tabular-nums">{discoveredTips.length}</span>
        /{designTips.length} tips
      </span>
    </div>
  )
}
