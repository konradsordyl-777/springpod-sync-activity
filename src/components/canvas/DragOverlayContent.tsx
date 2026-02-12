import type { ComponentType } from '@/types'
import { componentLibrary } from '@/data/componentLibrary'

interface Props {
  type: ComponentType
}

export function DragOverlayContent({ type }: Props) {
  const def = componentLibrary.find((c) => c.type === type)
  return (
    <div className="bg-surface-3 border border-edge-accent/40 rounded-lg px-4 py-2.5 shadow-xl shadow-black/30">
      <span className="text-[13px] font-medium text-accent">{def?.label ?? type}</span>
    </div>
  )
}
