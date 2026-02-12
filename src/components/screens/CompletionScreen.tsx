import { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowLeft, CheckCircle2, XCircle, Lightbulb } from 'lucide-react'
import { toPng } from 'html-to-image'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { referenceLayout, referenceLabels } from '@/data/spotifyReference'
import { designTips } from '@/data/designTips'
import { CanvasItem } from '@/components/canvas/CanvasItem'
import { componentLibrary } from '@/data/componentLibrary'

function getDefaultProps(type: string) {
  const def = componentLibrary.find((c) => c.type === type)
  if (!def) return {}
  const props: Record<string, any> = {}
  for (const p of def.props) props[p.key] = p.defaultValue
  return props
}

export function CompletionScreen() {
  const canvas = useSandboxStore((s) => s.canvas)
  const discoveredTips = useSandboxStore((s) => s.discoveredTips)
  const setScreen = useSandboxStore((s) => s.setScreen)
  const designRef = useRef<HTMLDivElement>(null)

  const userTypes = canvas.map((c) => c.type)

  const matched = referenceLayout.filter((type) => userTypes.includes(type))
  const score = Math.round((matched.length / referenceLayout.length) * 100)

  const handleDownload = useCallback(async () => {
    if (!designRef.current) return
    try {
      const dataUrl = await toPng(designRef.current, {
        backgroundColor: '#121212',
        pixelRatio: 2,
      })
      const link = document.createElement('a')
      link.download = 'my-spotify-design.png'
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Screenshot failed:', err)
    }
  }, [])

  return (
    <div className="h-full overflow-y-auto bg-surface-base">
      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-black text-ink mb-2 tracking-tight">Design Review</h1>
          <p className="text-sm text-ink-secondary">How your playlist page compares to Spotify's design</p>
        </motion.div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* User design */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <h2 className="text-[11px] font-semibold text-accent mb-3 uppercase tracking-widest">Your Design</h2>
            <div
              ref={designRef}
              className="bg-surface-base rounded-xl border border-edge min-h-[400px] overflow-hidden"
            >
              {canvas.length === 0 ? (
                <div className="flex items-center justify-center h-64 text-ink-muted text-sm">
                  No components placed
                </div>
              ) : (
                <div className="flex flex-wrap">
                  {canvas.map((comp) => {
                    const w = String(comp.props.width ?? '100%')
                    const wMap: Record<string, string> = { '25%': 'w-1/4', '33%': 'w-1/3', '50%': 'w-1/2', '75%': 'w-3/4', '100%': 'w-full' }
                    return (
                      <div key={comp.id} className={wMap[w] ?? 'w-full'}>
                        <CanvasItem type={comp.type} props={comp.props} />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.div>

          {/* Reference design */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <h2 className="text-[11px] font-semibold text-ink-tertiary mb-3 uppercase tracking-widest">Spotify Reference</h2>
            <div className="bg-surface-base rounded-xl border border-edge min-h-[400px] overflow-hidden">
              <div className="flex flex-col">
                {referenceLayout.map((type, i) => (
                  <CanvasItem key={`${type}-${i}`} type={type} props={getDefaultProps(type)} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {/* Score */}
          <div className="bg-surface-2 border border-edge-subtle rounded-xl p-6 text-center">
            <div className="text-5xl font-black text-accent mb-2 tabular-nums">{score}%</div>
            <div className="text-[13px] text-ink-secondary font-medium">Component Match</div>
            <div className="text-[11px] text-ink-muted mt-1 tabular-nums">
              {matched.length}/{referenceLayout.length} reference components used
            </div>
          </div>

          {/* Components used */}
          <div className="bg-surface-2 border border-edge-subtle rounded-xl p-6">
            <h3 className="text-[13px] font-semibold text-ink mb-3">Component Checklist</h3>
            <div className="space-y-1.5">
              {referenceLayout.map((type) => {
                const has = userTypes.includes(type)
                return (
                  <div key={type} className="flex items-center gap-2 text-[11px]">
                    {has ? (
                      <CheckCircle2 size={13} className="text-accent shrink-0" />
                    ) : (
                      <XCircle size={13} className="text-ink-muted shrink-0" />
                    )}
                    <span className={has ? 'text-ink' : 'text-ink-muted'}>
                      {referenceLabels[type] ?? type}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tips discovered */}
          <div className="bg-surface-2 border border-edge-subtle rounded-xl p-6">
            <h3 className="text-[13px] font-semibold text-ink mb-3">
              <Lightbulb size={13} className="inline mr-1.5 text-accent" />
              Design Principles ({discoveredTips.length}/{designTips.length})
            </h3>
            <div className="space-y-1.5">
              {designTips.map((tip) => {
                const found = discoveredTips.includes(tip.id)
                return (
                  <div key={tip.id} className="flex items-center gap-2 text-[11px]">
                    <span className="text-sm">{found ? tip.emoji : '🔒'}</span>
                    <span className={found ? 'text-ink' : 'text-ink-muted'}>
                      {found ? tip.title : '???'}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <button
            onClick={() => setScreen('sandbox')}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface-2 border border-edge text-ink font-medium text-[13px] hover:bg-surface-3 transition-all duration-150 cursor-pointer"
          >
            <ArrowLeft size={15} />
            Keep Editing
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-surface-base font-medium text-[13px] hover:bg-accent-hover transition-all duration-150 cursor-pointer"
          >
            <Download size={15} />
            Download Design
          </button>
        </motion.div>
      </div>
    </div>
  )
}
