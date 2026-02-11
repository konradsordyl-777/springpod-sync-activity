import { create } from 'zustand'
import { nanoid } from 'nanoid'
import type { SandboxState, ComponentType, DesignTip } from '@/types'
import { componentLibrary } from '@/data/componentLibrary'

function getDefaultProps(type: ComponentType): Record<string, string | number | boolean> {
  const def = componentLibrary.find(c => c.type === type)
  if (!def) return {}
  const props: Record<string, string | number | boolean> = {}
  for (const p of def.props) {
    props[p.key] = p.defaultValue
  }
  return props
}

export const useSandboxStore = create<SandboxState>((set, get) => ({
  screen: 'welcome',
  canvas: [],
  selectedId: null,
  previewMode: false,
  discoveredTips: [],
  activeTip: null,
  hasChangedColor: false,
  hasResized: false,

  setScreen: (screen) => set({ screen }),

  addComponent: (type) => {
    const component = {
      id: nanoid(),
      type,
      props: getDefaultProps(type),
    }
    set((s) => ({ canvas: [...s.canvas, component] }))
  },

  removeComponent: (id) => {
    set((s) => ({
      canvas: s.canvas.filter((c) => c.id !== id),
      selectedId: s.selectedId === id ? null : s.selectedId,
    }))
  },

  reorderComponents: (activeId, overId) => {
    set((s) => {
      const oldIndex = s.canvas.findIndex((c) => c.id === activeId)
      const newIndex = s.canvas.findIndex((c) => c.id === overId)
      if (oldIndex === -1 || newIndex === -1) return s
      const newCanvas = [...s.canvas]
      const [moved] = newCanvas.splice(oldIndex, 1)
      newCanvas.splice(newIndex, 0, moved)
      return { canvas: newCanvas }
    })
  },

  selectComponent: (id) => set({ selectedId: id }),

  updateProp: (id, key, value) => {
    set((s) => ({
      canvas: s.canvas.map((c) =>
        c.id === id ? { ...c, props: { ...c.props, [key]: value } } : c
      ),
    }))
  },

  togglePreview: () => set((s) => ({ previewMode: !s.previewMode })),

  discoverTip: (tip) => {
    const { discoveredTips } = get()
    if (discoveredTips.includes(tip.id)) return
    set((s) => ({
      discoveredTips: [...s.discoveredTips, tip.id],
      activeTip: tip,
    }))
  },

  dismissTip: () => set({ activeTip: null }),

  setHasChangedColor: () => set({ hasChangedColor: true }),
  setHasResized: () => set({ hasResized: true }),

  reset: () =>
    set({
      canvas: [],
      selectedId: null,
      previewMode: false,
      discoveredTips: [],
      activeTip: null,
      hasChangedColor: false,
      hasResized: false,
    }),
}))
