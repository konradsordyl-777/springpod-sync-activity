import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Trash2 } from 'lucide-react'
import { useSandboxStore } from '@/stores/useSandboxStore'
import type { CanvasComponent } from '@/types'
import { CanvasItem } from './CanvasItem'
import { componentLibrary } from '@/data/componentLibrary'

interface Props {
  component: CanvasComponent
  previewMode: boolean
}

export function CanvasItemWrapper({ component, previewMode }: Props) {
  const selectedId = useSandboxStore((s) => s.selectedId)
  const selectComponent = useSandboxStore((s) => s.selectComponent)
  const removeComponent = useSandboxStore((s) => s.removeComponent)
  const isSelected = selectedId === component.id

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: component.id,
    data: { origin: 'canvas', type: component.type },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  }

  const def = componentLibrary.find((c) => c.type === component.type)

  const widthValue = String(component.props.width ?? '100%')
  const widthMap: Record<string, string> = {
    '25%': 'w-1/4',
    '33%': 'w-1/3',
    '50%': 'w-1/2',
    '75%': 'w-3/4',
    '100%': 'w-full',
  }
  const widthClass = widthMap[widthValue] ?? 'w-full'

  if (previewMode) {
    return (
      <div className={widthClass}>
        <CanvasItem type={component.type} props={component.props} />
      </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${widthClass} relative group cursor-grab active:cursor-grabbing rounded-lg transition-all duration-150 ${
        isSelected
          ? 'ring-1 ring-accent/60 bg-accent-subtle'
          : 'hover:bg-surface-2/50'
      }`}
      onClick={(e) => {
        e.stopPropagation()
        selectComponent(component.id)
      }}
    >
      {/* Delete button */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
        <button
          className="p-1.5 rounded-md bg-surface-3 border border-edge-subtle text-ink-muted hover:text-danger hover:bg-danger-muted hover:border-danger/20 transition-all duration-150"
          onClick={(e) => {
            e.stopPropagation()
            removeComponent(component.id)
          }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Trash2 size={12} />
        </button>
      </div>

      {/* Component label */}
      {isSelected && def && (
        <div className="absolute -top-5 left-3 text-[10px] font-medium tracking-wide text-accent bg-surface-base border border-edge-accent/30 px-2 py-0.5 rounded-md z-10">
          {def.label}
        </div>
      )}

      <CanvasItem type={component.type} props={component.props} />
    </div>
  )
}
