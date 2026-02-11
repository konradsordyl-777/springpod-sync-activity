import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2 } from 'lucide-react'
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
    opacity: isDragging ? 0.4 : 1,
  }

  const def = componentLibrary.find((c) => c.type === component.type)

  if (previewMode) {
    return <CanvasItem type={component.type} props={component.props} />
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group cursor-pointer rounded-md transition-all ${
        isSelected ? 'ring-2 ring-spotify-green ring-offset-2 ring-offset-spotify-dark' : 'hover:ring-1 hover:ring-white/20'
      }`}
      onClick={(e) => {
        e.stopPropagation()
        selectComponent(component.id)
      }}
    >
      {/* Edit overlay with drag handle and delete */}
      <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button {...attributes} {...listeners} className="p-1 text-spotify-text-sub hover:text-white cursor-grab active:cursor-grabbing">
          <GripVertical size={16} />
        </button>
      </div>

      <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          className="p-1 text-spotify-text-sub hover:text-red-400 transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            removeComponent(component.id)
          }}
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Component label */}
      {isSelected && def && (
        <div className="absolute -top-5 left-2 text-[10px] font-medium text-spotify-green bg-spotify-dark px-1.5 py-0.5 rounded">
          {def.label}
        </div>
      )}

      <CanvasItem type={component.type} props={component.props} />
    </div>
  )
}
