import { useEffect, useRef } from 'react'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { tipMap } from '@/data/designTips'
import type { TipTrigger } from '@/types'

export function useTipTrigger() {
  const canvas = useSandboxStore((s) => s.canvas)
  const discoveredTips = useSandboxStore((s) => s.discoveredTips)
  const hasChangedColor = useSandboxStore((s) => s.hasChangedColor)
  const hasResized = useSandboxStore((s) => s.hasResized)
  const discoverTip = useSandboxStore((s) => s.discoverTip)
  const prevLength = useRef(0)

  useEffect(() => {
    const trigger = (id: TipTrigger) => {
      if (discoveredTips.includes(id)) return
      const tip = tipMap.get(id)
      if (tip) discoverTip(tip)
    }

    // First drop
    if (canvas.length > 0 && prevLength.current === 0) {
      trigger('first-drop')
    }

    // Specific component triggers
    const types = canvas.map((c) => c.type)

    if (types.includes('PlaylistCover')) trigger('playlist-cover')
    if (types.includes('PlayButton') || types.includes('ActionBar')) trigger('play-button')
    if (types.includes('TrackList') || types.includes('TrackRow')) trigger('track-list')

    // 5+ components
    if (canvas.length >= 5) trigger('five-components')

    // No spacers after 3+ components
    if (canvas.length >= 3 && !types.includes('Spacer')) trigger('no-spacers')

    // Color change
    if (hasChangedColor) trigger('color-change')

    // Resized
    if (hasResized) trigger('component-resized')

    prevLength.current = canvas.length
  }, [canvas, discoveredTips, hasChangedColor, hasResized, discoverTip])
}
