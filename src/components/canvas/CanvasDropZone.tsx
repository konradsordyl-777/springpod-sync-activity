import { useDroppable } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { CanvasItemWrapper } from './CanvasItemWrapper'
import { Layers, MousePointerClick } from 'lucide-react'

export function CanvasDropZone() {
  const canvas = useSandboxStore((s) => s.canvas)
  const previewMode = useSandboxStore((s) => s.previewMode)
  const selectComponent = useSandboxStore((s) => s.selectComponent)

  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-drop-zone' })

  const ids = canvas.map((c) => c.id)

  return (
    <div
      ref={setNodeRef}
      className={`min-h-full transition-colors duration-200 ${
        isOver ? 'bg-accent-subtle' : ''
      }`}
      onClick={() => selectComponent(null)}
    >
      {canvas.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-ink-muted py-32 select-none">
          <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-edge-subtle flex items-center justify-center mb-6">
            <Layers size={28} className="text-ink-muted" />
          </div>
          <p className="text-base font-semibold text-ink-secondary mb-2">Your canvas is empty</p>
          <p className="text-sm text-ink-tertiary mb-6 max-w-xs text-center leading-relaxed">
            Drag components from the left panel, or double-click them to add
          </p>
          <div className="flex items-center gap-2 text-xs text-ink-muted">
            <MousePointerClick size={14} />
            <span>Drop zone</span>
          </div>
        </div>
      ) : (
        <SortableContext items={ids} strategy={rectSortingStrategy}>
          <div className="flex flex-wrap px-10 py-6 gap-y-1">
            {canvas.map((component) => (
              <CanvasItemWrapper
                key={component.id}
                component={component}
                previewMode={previewMode}
              />
            ))}
          </div>
        </SortableContext>
      )}
    </div>
  )
}
