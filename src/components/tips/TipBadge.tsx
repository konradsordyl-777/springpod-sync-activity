import { Lightbulb } from 'lucide-react'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { designTips } from '@/data/designTips'

export function TipBadge() {
  const discoveredTips = useSandboxStore((s) => s.discoveredTips)
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <Lightbulb size={14} className="text-spotify-green" />
      <span className="text-spotify-text-sub">
        <span className="text-spotify-green font-semibold">{discoveredTips.length}</span>
        /{designTips.length} tips
      </span>
    </div>
  )
}
