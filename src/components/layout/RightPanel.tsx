import { useState } from 'react'
import { PropertiesPanel } from '@/components/properties/PropertiesPanel'
import { TipHistory } from '@/components/tips/TipHistory'

type Tab = 'properties' | 'tips'

export function RightPanel() {
  const [tab, setTab] = useState<Tab>('properties')

  return (
    <div className="h-full bg-surface-base border-l border-edge flex flex-col">
      {/* Tab bar */}
      <div className="flex border-b border-edge-subtle">
        {(['properties', 'tips'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 px-4 py-2.5 text-xs font-medium transition-colors duration-150 cursor-pointer ${
              tab === t
                ? 'text-ink border-b-2 border-accent'
                : 'text-ink-tertiary hover:text-ink-secondary'
            }`}
          >
            {t === 'properties' ? 'Properties' : 'Design Tips'}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {tab === 'properties' ? <PropertiesPanel /> : <TipHistory />}
      </div>
    </div>
  )
}
