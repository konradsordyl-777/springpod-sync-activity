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

  // Score: how many reference components are present
  const matched = referenceLayout.filter((type) => userTypes.includes(type))
  const missing = referenceLayout.filter((type) => !userTypes.includes(type))
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
    <div className="h-full overflow-y-auto bg-spotify-dark">
      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-black text-white mb-2">Design Review</h1>
          <p className="text-spotify-text-sub">Let's see how your playlist page compares to Spotify's design</p>
        </motion.div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* User design */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-spotify-green mb-3 uppercase tracking-wider">Your Design</h2>
            <div
              ref={designRef}
              className="bg-spotify-dark rounded-xl border border-white/10 min-h-[400px] overflow-hidden"
            >
              {canvas.length === 0 ? (
                <div className="flex items-center justify-center h-64 text-spotify-text-dim text-sm">
                  No components placed
                </div>
              ) : (
                <div className="flex flex-col">
                  {canvas.map((comp) => (
                    <CanvasItem key={comp.id} type={comp.type} props={comp.props} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Reference design */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-sm font-semibold text-spotify-text-sub mb-3 uppercase tracking-wider">Spotify Reference</h2>
            <div className="bg-spotify-dark rounded-xl border border-white/10 min-h-[400px] overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {/* Score */}
          <div className="bg-spotify-surface rounded-xl p-6 text-center">
            <div className="text-5xl font-black text-spotify-green mb-2">{score}%</div>
            <div className="text-sm text-spotify-text-sub">Component Match</div>
            <div className="text-xs text-spotify-text-dim mt-1">
              {matched.length}/{referenceLayout.length} reference components used
            </div>
          </div>

          {/* Components used */}
          <div className="bg-spotify-surface rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">Component Checklist</h3>
            <div className="space-y-1.5">
              {referenceLayout.map((type) => {
                const has = userTypes.includes(type)
                return (
                  <div key={type} className="flex items-center gap-2 text-xs">
                    {has ? (
                      <CheckCircle2 size={14} className="text-spotify-green shrink-0" />
                    ) : (
                      <XCircle size={14} className="text-spotify-text-dim shrink-0" />
                    )}
                    <span className={has ? 'text-white' : 'text-spotify-text-dim'}>
                      {referenceLabels[type] ?? type}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tips discovered */}
          <div className="bg-spotify-surface rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">
              <Lightbulb size={14} className="inline mr-1 text-spotify-green" />
              Design Principles ({discoveredTips.length}/{designTips.length})
            </h3>
            <div className="space-y-1.5">
              {designTips.map((tip) => {
                const found = discoveredTips.includes(tip.id)
                return (
                  <div key={tip.id} className="flex items-center gap-2 text-xs">
                    <span>{found ? tip.emoji : '🔒'}</span>
                    <span className={found ? 'text-white' : 'text-spotify-text-dim'}>
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
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <button
            onClick={() => setScreen('sandbox')}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-spotify-surface text-white font-semibold hover:bg-spotify-surface-light transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            Keep Editing
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-spotify-green text-spotify-black font-semibold hover:bg-spotify-green-light hover:scale-105 transition-all cursor-pointer"
          >
            <Download size={16} />
            Download Design
          </button>
        </motion.div>
      </div>
    </div>
  )
}
