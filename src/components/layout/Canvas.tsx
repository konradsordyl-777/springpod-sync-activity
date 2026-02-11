import { useState } from 'react'
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core'
import type { DragStartEvent } from '@dnd-kit/core'
import { useDragToCanvas } from '@/hooks/useDragToCanvas'
import { CanvasDropZone } from '@/components/canvas/CanvasDropZone'
import { DragOverlayContent } from '@/components/canvas/DragOverlayContent'
import type { ComponentType } from '@/types'

export function Canvas() {
  const { handleDragEnd } = useDragToCanvas()
  const [activeType, setActiveType] = useState<ComponentType | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  const handleDragStart = (event: DragStartEvent) => {
    const type = event.active.data.current?.type as ComponentType | undefined
    setActiveType(type ?? null)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={(e) => {
        handleDragEnd(e)
        setActiveType(null)
      }}
    >
      <CanvasDropZone />
      <DragOverlay dropAnimation={null}>
        {activeType && <DragOverlayContent type={activeType} />}
      </DragOverlay>
    </DndContext>
  )
}
