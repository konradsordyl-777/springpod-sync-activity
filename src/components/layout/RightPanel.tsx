import { useState } from 'react'
import { PropertiesPanel } from '@/components/properties/PropertiesPanel'
import { TipHistory } from '@/components/tips/TipHistory'

type Tab = 'properties' | 'tips'

export function RightPanel() {
  const [tab, setTab] = useState<Tab>('properties')

  return (
    <div className="h-full bg-spotify-black border-l border-white/5 flex flex-col">
      {/* Tab bar */}
      <div className="flex border-b border-white/5">
        <button
          onClick={() => setTab('properties')}
          className={`flex-1 px-4 py-2.5 text-xs font-semibold transition-colors ${
            tab === 'properties'
              ? 'text-white border-b-2 border-spotify-green'
              : 'text-spotify-text-sub hover:text-white'
          }`}
        >
          Properties
        </button>
        <button
          onClick={() => setTab('tips')}
          className={`flex-1 px-4 py-2.5 text-xs font-semibold transition-colors ${
            tab === 'tips'
              ? 'text-white border-b-2 border-spotify-green'
              : 'text-spotify-text-sub hover:text-white'
          }`}
        >
          Design Tips
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {tab === 'properties' ? <PropertiesPanel /> : <TipHistory />}
      </div>
    </div>
  )
}
