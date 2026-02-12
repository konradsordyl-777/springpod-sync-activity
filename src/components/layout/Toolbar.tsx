import { Eye, EyeOff, RotateCcw, CheckCircle2 } from 'lucide-react'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { TipBadge } from '@/components/tips/TipBadge'

export function Toolbar() {
  const canvas = useSandboxStore((s) => s.canvas)
  const previewMode = useSandboxStore((s) => s.previewMode)
  const togglePreview = useSandboxStore((s) => s.togglePreview)
  const reset = useSandboxStore((s) => s.reset)
  const setScreen = useSandboxStore((s) => s.setScreen)

  return (
    <div className="h-12 bg-surface-1 border-b border-edge flex items-center justify-between px-5">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <span className="text-[13px] font-semibold tracking-tight text-ink">Design Sandbox</span>
        <div className="w-px h-4 bg-edge" />
        <span className="text-xs text-ink-tertiary tabular-nums">{canvas.length} component{canvas.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Center: Tip badge */}
      <TipBadge />

      {/* Right: Actions */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={togglePreview}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 cursor-pointer ${
            previewMode
              ? 'bg-accent text-surface-base'
              : 'bg-surface-2 text-ink-secondary hover:bg-surface-3 hover:text-ink'
          }`}
        >
          {previewMode ? <EyeOff size={13} /> : <Eye size={13} />}
          {previewMode ? 'Edit' : 'Preview'}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-surface-2 text-ink-secondary hover:bg-surface-3 hover:text-ink transition-all duration-150 cursor-pointer"
        >
          <RotateCcw size={13} />
          Reset
        </button>
        <button
          onClick={() => setScreen('completion')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-accent text-surface-base hover:bg-accent-hover transition-all duration-150 cursor-pointer"
        >
          <CheckCircle2 size={13} />
          Finish
        </button>
      </div>
    </div>
  )
}
