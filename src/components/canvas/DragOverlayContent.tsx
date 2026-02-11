import type { ComponentType } from '@/types'
import { componentLibrary } from '@/data/componentLibrary'

interface Props {
  type: ComponentType
}

export function DragOverlayContent({ type }: Props) {
  const def = componentLibrary.find((c) => c.type === type)
  return (
    <div className="bg-spotify-surface border border-spotify-green/40 rounded-lg px-4 py-3 shadow-xl shadow-black/40">
      <span className="text-sm font-medium text-spotify-green">{def?.label ?? type}</span>
    </div>
  )
}
