import { componentsByCategory } from '@/data/componentLibrary'
import { ComponentCategory } from '@/components/library/ComponentCategory'
import { Blocks } from 'lucide-react'

export function LeftPanel() {
  return (
    <div className="h-full bg-spotify-black border-r border-white/5 flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <Blocks size={16} className="text-spotify-green" />
        <h2 className="text-sm font-semibold text-white">Components</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {Object.entries(componentsByCategory).map(([category, components]) => (
          <ComponentCategory key={category} name={category} components={components} />
        ))}
      </div>
      <div className="px-4 py-2 border-t border-white/5">
        <p className="text-[10px] text-spotify-text-dim">Drag to canvas or double-click to add</p>
      </div>
    </div>
  )
}
