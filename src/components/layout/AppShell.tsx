import { useState } from 'react'
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core'
import type { DragStartEvent } from '@dnd-kit/core'
import { Toolbar } from './Toolbar'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from './RightPanel'
import { Canvas } from './Canvas'
import { DragOverlayContent } from '@/components/canvas/DragOverlayContent'
import { useDragToCanvas } from '@/hooks/useDragToCanvas'
import { useSandboxStore } from '@/stores/useSandboxStore'
import type { ComponentType } from '@/types'

export function AppShell() {
  const previewMode = useSandboxStore((s) => s.previewMode)
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
      <div className="h-full flex flex-col">
        <Toolbar />
        <div className="flex-1 flex overflow-hidden">
          {!previewMode && (
            <div className="w-60 shrink-0">
              <LeftPanel />
            </div>
          )}

          <div className="flex-1 overflow-y-auto bg-spotify-dark">
            <Canvas />
          </div>

          {!previewMode && (
            <div className="w-72 shrink-0">
              <RightPanel />
            </div>
          )}
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeType && <DragOverlayContent type={activeType} />}
      </DragOverlay>
    </DndContext>
  )
}
