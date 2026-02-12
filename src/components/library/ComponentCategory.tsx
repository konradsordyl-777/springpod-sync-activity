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
    <div className="mb-3">
      <button
        className="flex items-center gap-1.5 w-full px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-ink-muted hover:text-ink-tertiary transition-colors duration-150 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
        {name}
        <span className="ml-auto text-ink-faint">{components.length}</span>
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
