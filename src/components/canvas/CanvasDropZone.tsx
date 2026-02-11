import { useDroppable } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { CanvasItemWrapper } from './CanvasItemWrapper'
import { Layers } from 'lucide-react'

export function CanvasDropZone() {
  const canvas = useSandboxStore((s) => s.canvas)
  const previewMode = useSandboxStore((s) => s.previewMode)
  const selectComponent = useSandboxStore((s) => s.selectComponent)

  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-drop-zone' })

  const ids = canvas.map((c) => c.id)

  return (
    <div
      ref={setNodeRef}
      className={`min-h-full rounded-lg transition-colors ${
        isOver ? 'bg-spotify-green/5 ring-2 ring-spotify-green/30 ring-dashed' : ''
      }`}
      onClick={() => selectComponent(null)}
    >
      {canvas.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-spotify-text-dim py-32">
          <Layers size={48} className="mb-4 opacity-50" />
          <p className="text-lg font-medium mb-2">Drop components here</p>
          <p className="text-sm">Drag components from the left panel to start building your playlist page</p>
        </div>
      ) : (
        <SortableContext items={ids} strategy={rectSortingStrategy}>
          <div className="flex flex-wrap px-8 py-4">
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
