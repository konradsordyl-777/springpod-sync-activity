import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import * as LucideIcons from 'lucide-react'
import type { ComponentDefinition } from '@/types'
import { useSandboxStore } from '@/stores/useSandboxStore'

interface Props {
  definition: ComponentDefinition
}

export function ComponentCard({ definition }: Props) {
  const addComponent = useSandboxStore((s) => s.addComponent)
  const Icon = (LucideIcons as any)[definition.icon] ?? LucideIcons.Box

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `library-${definition.type}`,
    data: { origin: 'library', type: definition.type },
  })

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-spotify-surface hover:bg-spotify-surface-light cursor-grab active:cursor-grabbing transition-colors group"
      onDoubleClick={() => addComponent(definition.type)}
    >
      <div className="w-7 h-7 rounded flex items-center justify-center bg-spotify-dark text-spotify-text-sub group-hover:text-spotify-green transition-colors">
        <Icon size={14} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-spotify-text truncate">{definition.label}</div>
      </div>
    </div>
  )
}
