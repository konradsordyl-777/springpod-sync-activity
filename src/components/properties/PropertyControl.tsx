import type { PropDefinition } from '@/types'
import { ColorPicker } from './ColorPicker'

interface Props {
  definition: PropDefinition
  value: string | number | boolean
  onChange: (value: string | number | boolean) => void
}

export function PropertyControl({ definition, value, onChange }: Props) {
  const { type, label } = definition

  return (
    <div>
      <label className="block text-[11px] font-medium text-ink-tertiary mb-1.5">{label}</label>

      {type === 'text' && (
        <input
          type="text"
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-surface-base border border-edge rounded-md px-3 py-1.5 text-[13px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent/50 transition-colors duration-150"
        />
      )}

      {type === 'select' && definition.options && (
        <select
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-surface-base border border-edge rounded-md px-3 py-1.5 text-[13px] text-ink focus:outline-none focus:border-accent/50 transition-colors duration-150"
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
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={definition.min ?? 0}
            max={definition.max ?? 100}
            step={definition.step ?? 1}
            value={Number(value)}
            onChange={(e) => onChange(Number(e.target.value))}
            className="flex-1 accent-accent h-1"
          />
          <span className="text-[11px] text-ink-tertiary tabular-nums w-8 text-right">{value}</span>
        </div>
      )}

      {type === 'toggle' && (
        <button
          onClick={() => onChange(!value)}
          className={`relative w-9 h-5 rounded-full transition-colors duration-150 cursor-pointer ${
            value ? 'bg-accent' : 'bg-surface-4'
          }`}
        >
          <div
            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-150 ${
              value ? 'translate-x-4.5' : 'translate-x-0.5'
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
              className={`flex-1 px-2 py-1 text-[11px] rounded-md transition-all duration-150 cursor-pointer ${
                value === s
                  ? 'bg-accent text-surface-base font-semibold'
                  : 'bg-surface-2 border border-edge-subtle text-ink-tertiary hover:bg-surface-3 hover:text-ink-secondary'
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
