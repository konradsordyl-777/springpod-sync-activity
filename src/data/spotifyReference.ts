import type { ComponentType } from '@/types'

// The "ideal" Spotify playlist page layout for comparison on the completion screen
export const referenceLayout: ComponentType[] = [
  'GradientBackground',
  'PlaylistCover',
  'PlaylistTitle',
  'PlaylistDescription',
  'PlaylistMeta',
  'Spacer',
  'ActionBar',
  'Divider',
  'TrackListHeader',
  'TrackList',
]

export const referenceLabels: Record<string, string> = {
  GradientBackground: 'Gradient header background',
  PlaylistCover: 'Prominent album artwork',
  PlaylistTitle: 'Bold playlist title',
  PlaylistDescription: 'Descriptive subtitle',
  PlaylistMeta: 'Creator & stats info',
  Spacer: 'Breathing room (white space)',
  ActionBar: 'Primary action buttons',
  Divider: 'Visual section separator',
  TrackListHeader: 'Column headers for scanability',
  TrackList: 'Track listing with consistent rows',
}
