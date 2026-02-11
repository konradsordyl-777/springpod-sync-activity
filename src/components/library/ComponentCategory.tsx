import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { ComponentDefinition } from '@/types'
import { ComponentCard } from './ComponentCard'

interface Props {
  name: string
  components: ComponentDefinition[]
}

export function ComponentCategory({ name, components }: Props) {
  const [open, setOpen] = useState(true)

  return (
    <div className="mb-2">
      <button
        className="flex items-center gap-1.5 w-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-spotify-text-sub hover:text-spotify-text transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        {name}
        <span className="text-spotify-text-dim ml-auto">{components.length}</span>
      </button>
      {open && (
        <div className="flex flex-col gap-1 mt-1">
          {components.map((comp) => (
            <ComponentCard key={comp.type} definition={comp} />
          ))}
        </div>
      )}
    </div>
  )
}
