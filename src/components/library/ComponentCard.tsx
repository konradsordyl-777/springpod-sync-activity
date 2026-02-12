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
    opacity: isDragging ? 0.4 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-edge-subtle bg-surface-2 hover:bg-surface-3 hover:border-edge cursor-grab active:cursor-grabbing transition-all duration-150 group"
      onDoubleClick={() => addComponent(definition.type)}
    >
      <div className="w-7 h-7 rounded-md flex items-center justify-center bg-surface-base border border-edge-subtle text-ink-muted group-hover:text-accent group-hover:border-edge-accent group-hover:bg-accent-subtle transition-all duration-150">
        <Icon size={14} />
      </div>
      <span className="text-xs font-medium text-ink-secondary group-hover:text-ink truncate transition-colors duration-150">
        {definition.label}
      </span>
    </div>
  )
}
