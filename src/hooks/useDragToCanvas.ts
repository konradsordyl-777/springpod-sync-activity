import { useCallback } from 'react'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { useSandboxStore } from '@/stores/useSandboxStore'
import type { ComponentType } from '@/types'

export function useDragToCanvas() {
  const addComponent = useSandboxStore((s) => s.addComponent)
  const reorderComponents = useSandboxStore((s) => s.reorderComponents)

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (!over) return

      const origin = active.data.current?.origin as string | undefined

      // Drag from library -> canvas
      if (origin === 'library' && over.id === 'canvas-drop-zone') {
        const componentType = active.data.current?.type as ComponentType
        if (componentType) {
          addComponent(componentType)
        }
        return
      }

      // Reorder within canvas
      if (origin === 'canvas' && active.id !== over.id) {
        reorderComponents(active.id as string, over.id as string)
      }
    },
    [addComponent, reorderComponents]
  )

  return { handleDragEnd }
}
