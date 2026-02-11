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
      <div className="flex flex-col items-center justify-center h-48 text-spotify-text-dim">
        <Settings2 size={32} className="mb-3 opacity-50" />
        <p className="text-sm">Select a component to edit</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-spotify-green" />
        <h3 className="text-sm font-semibold text-white">{definition.label}</h3>
      </div>
      <p className="text-xs text-spotify-text-dim mb-4">{definition.description}</p>

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
  )
}
