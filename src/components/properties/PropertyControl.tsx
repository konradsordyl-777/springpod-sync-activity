import type { PropDefinition } from '@/types'
import { ColorPicker } from './ColorPicker'

interface Props {
  definition: PropDefinition
  value: string | number | boolean
  onChange: (value: string | number | boolean) => void
}

export function PropertyControl({ definition, value, onChange }: Props) {
  const { type, label, key } = definition

  return (
    <div className="mb-3">
      <label className="block text-xs font-medium text-spotify-text-sub mb-1.5">{label}</label>

      {type === 'text' && (
        <input
          type="text"
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-spotify-dark border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-spotify-green transition-colors"
        />
      )}

      {type === 'select' && definition.options && (
        <select
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-spotify-dark border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:border-spotify-green"
        >
          {definition.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )}

      {type === 'color' && definition.colors && (
        <ColorPicker
          value={String(value)}
          colors={definition.colors}
          onChange={(v) => onChange(v)}
        />
      )}

      {type === 'slider' && (
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={definition.min ?? 0}
            max={definition.max ?? 100}
            step={definition.step ?? 1}
            value={Number(value)}
            onChange={(e) => onChange(Number(e.target.value))}
            className="flex-1 accent-spotify-green"
          />
          <span className="text-xs text-spotify-text-sub w-8 text-right">{value}</span>
        </div>
      )}

      {type === 'toggle' && (
        <button
          onClick={() => onChange(!value)}
          className={`relative w-10 h-5 rounded-full transition-colors ${
            value ? 'bg-spotify-green' : 'bg-spotify-surface-light'
          }`}
        >
          <div
            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
              value ? 'translate-x-5' : 'translate-x-0.5'
            }`}
          />
        </button>
      )}

      {type === 'size' && (
        <div className="flex gap-1">
          {['small', 'medium', 'large'].map((s) => (
            <button
              key={s}
              onClick={() => onChange(s)}
              className={`flex-1 px-2 py-1 text-xs rounded-md transition-colors ${
                value === s
                  ? 'bg-spotify-green text-spotify-black font-semibold'
                  : 'bg-spotify-dark text-spotify-text-sub hover:bg-spotify-surface'
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
