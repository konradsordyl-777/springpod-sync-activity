import { useSandboxStore } from '@/stores/useSandboxStore'
import { componentLibrary } from '@/data/componentLibrary'
import { PropertyControl } from './PropertyControl'
import { Settings2 } from 'lucide-react'

export function PropertiesPanel() {
  const canvas = useSandboxStore((s) => s.canvas)
  const selectedId = useSandboxStore((s) => s.selectedId)
  const updateProp = useSandboxStore((s) => s.updateProp)
  const setHasChangedColor = useSandboxStore((s) => s.setHasChangedColor)
  const setHasResized = useSandboxStore((s) => s.setHasResized)

  const selected = canvas.find((c) => c.id === selectedId)
  const definition = selected ? componentLibrary.find((d) => d.type === selected.type) : null

  if (!selected || !definition) {
    return (
      <div className="flex flex-col items-center justify-center h-48 text-ink-muted select-none">
        <div className="w-10 h-10 rounded-xl bg-surface-2 border border-edge-subtle flex items-center justify-center mb-3">
          <Settings2 size={18} className="text-ink-muted" />
        </div>
        <p className="text-xs text-ink-tertiary">Select a component to edit</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <h3 className="text-[13px] font-semibold text-ink">{definition.label}</h3>
      </div>
      <p className="text-[11px] text-ink-tertiary mb-5 leading-relaxed">{definition.description}</p>

      <div className="space-y-4">
        {definition.props.map((propDef) => (
          <PropertyControl
            key={propDef.key}
            definition={propDef}
            value={selected.props[propDef.key] ?? propDef.defaultValue}
            onChange={(value) => {
              updateProp(selected.id, propDef.key, value)
              if (propDef.type === 'color') setHasChangedColor()
              if (propDef.type === 'size' || propDef.type === 'slider') setHasResized()
            }}
          />
        ))}
      </div>
    </div>
  )
}
