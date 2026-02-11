export type Screen = 'welcome' | 'sandbox' | 'completion'

export type ComponentType =
  | 'PlaylistCover'
  | 'PlaylistTitle'
  | 'PlaylistMeta'
  | 'PlaylistDescription'
  | 'GradientBackground'
  | 'PlayButton'
  | 'ShuffleButton'
  | 'LikeButton'
  | 'MoreOptionsButton'
  | 'ActionBar'
  | 'TrackRow'
  | 'TrackListHeader'
  | 'TrackList'
  | 'Divider'
  | 'Spacer'
  | 'SectionLabel'

export type ComponentCategory = 'Header' | 'Actions' | 'Track List' | 'Utility'

export type PropType = 'text' | 'select' | 'color' | 'slider' | 'toggle' | 'size'

export interface PropDefinition {
  key: string
  label: string
  type: PropType
  defaultValue: string | number | boolean
  options?: string[]      // for select
  min?: number            // for slider
  max?: number            // for slider
  step?: number           // for slider
  colors?: string[]       // for color (palette swatches)
}

export interface ComponentDefinition {
  type: ComponentType
  label: string
  category: ComponentCategory
  icon: string // lucide icon name
  description: string
  props: PropDefinition[]
}

export interface CanvasComponent {
  id: string
  type: ComponentType
  props: Record<string, string | number | boolean>
}

export type TipTrigger =
  | 'first-drop'
  | 'playlist-cover'
  | 'play-button'
  | 'track-list'
  | 'color-change'
  | 'no-spacers'
  | 'five-components'
  | 'component-resized'

export interface DesignTip {
  id: TipTrigger
  title: string
  principle: string
  description: string
  emoji: string
}

export interface SandboxState {
  screen: Screen
  canvas: CanvasComponent[]
  selectedId: string | null
  previewMode: boolean
  discoveredTips: TipTrigger[]
  activeTip: DesignTip | null
  hasChangedColor: boolean
  hasResized: boolean

  // Actions
  setScreen: (screen: Screen) => void
  addComponent: (type: ComponentType) => void
  removeComponent: (id: string) => void
  reorderComponents: (activeId: string, overId: string) => void
  selectComponent: (id: string | null) => void
  updateProp: (id: string, key: string, value: string | number | boolean) => void
  togglePreview: () => void
  discoverTip: (tip: DesignTip) => void
  dismissTip: () => void
  setHasChangedColor: () => void
  setHasResized: () => void
  reset: () => void
}

export interface Track {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  addedDate: string
  imageUrl?: string
}
