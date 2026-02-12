import { componentsByCategory } from '@/data/componentLibrary'
import { ComponentCategory } from '@/components/library/ComponentCategory'
import { Blocks } from 'lucide-react'

export function LeftPanel() {
  return (
    <div className="h-full bg-surface-base border-r border-edge flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-edge-subtle">
        <div className="w-6 h-6 rounded-md bg-accent-muted flex items-center justify-center">
          <Blocks size={13} className="text-accent" />
        </div>
        <h2 className="text-[13px] font-semibold tracking-tight text-ink">Components</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-3">
        {Object.entries(componentsByCategory).map(([category, components]) => (
          <ComponentCategory key={category} name={category} components={components} />
        ))}
      </div>
      <div className="px-4 py-2.5 border-t border-edge-subtle">
        <p className="text-[10px] text-ink-muted">Drag to canvas or double-click to add</p>
      </div>
    </div>
  )
}
