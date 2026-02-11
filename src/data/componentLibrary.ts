import type { ComponentDefinition } from '@/types'

const SPOTIFY_COLORS = ['#1DB954', '#FFFFFF', '#B3B3B3', '#121212', '#282828', '#E8115B', '#1E3264', '#E13300', '#8D67AB', '#477D95']

const WIDTH_PROP = { key: 'width', label: 'Width', type: 'select' as const, defaultValue: '100%', options: ['25%', '33%', '50%', '75%', '100%'] }

export const componentLibrary: ComponentDefinition[] = [
  // ─── Header ───────────────────────────────
  {
    type: 'PlaylistCover',
    label: 'Playlist Cover',
    category: 'Header',
    icon: 'Image',
    description: 'Large playlist artwork image',
    props: [
      WIDTH_PROP,
      { key: 'size', label: 'Size', type: 'size', defaultValue: 'large' },
      { key: 'shadow', label: 'Shadow', type: 'toggle', defaultValue: true },
    ],
  },
  {
    type: 'PlaylistTitle',
    label: 'Playlist Title',
    category: 'Header',
    icon: 'Type',
    description: 'Large bold playlist name',
    props: [
      WIDTH_PROP,
      { key: 'text', label: 'Title', type: 'text', defaultValue: 'Today\'s Top Hits' },
      { key: 'size', label: 'Size', type: 'size', defaultValue: 'large' },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#FFFFFF', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'PlaylistMeta',
    label: 'Playlist Meta',
    category: 'Header',
    icon: 'Info',
    description: 'Creator, likes, duration info',
    props: [
      WIDTH_PROP,
      { key: 'creator', label: 'Creator', type: 'text', defaultValue: 'Spotify' },
      { key: 'likes', label: 'Likes', type: 'text', defaultValue: '35,234,586' },
      { key: 'duration', label: 'Duration', type: 'text', defaultValue: '2 hr 45 min' },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#B3B3B3', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'PlaylistDescription',
    label: 'Description',
    category: 'Header',
    icon: 'AlignLeft',
    description: 'Playlist description text',
    props: [
      WIDTH_PROP,
      { key: 'text', label: 'Description', type: 'text', defaultValue: 'The most played songs right now. Cover: Sabrina Carpenter' },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#B3B3B3', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'GradientBackground',
    label: 'Gradient BG',
    category: 'Header',
    icon: 'Paintbrush',
    description: 'Gradient background section',
    props: [
      WIDTH_PROP,
      { key: 'color', label: 'Gradient Color', type: 'color', defaultValue: '#1E3264', colors: SPOTIFY_COLORS },
      { key: 'height', label: 'Height', type: 'slider', defaultValue: 200, min: 100, max: 400, step: 8 },
    ],
  },

  // ─── Actions ──────────────────────────────
  {
    type: 'PlayButton',
    label: 'Play Button',
    category: 'Actions',
    icon: 'Play',
    description: 'Large green play/shuffle button',
    props: [
      WIDTH_PROP,
      { key: 'size', label: 'Size', type: 'size', defaultValue: 'large' },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#1DB954', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'ShuffleButton',
    label: 'Shuffle',
    category: 'Actions',
    icon: 'Shuffle',
    description: 'Shuffle toggle button',
    props: [
      WIDTH_PROP,
      { key: 'active', label: 'Active', type: 'toggle', defaultValue: true },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#1DB954', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'LikeButton',
    label: 'Like Button',
    category: 'Actions',
    icon: 'Heart',
    description: 'Heart/save button',
    props: [
      WIDTH_PROP,
      { key: 'liked', label: 'Liked', type: 'toggle', defaultValue: false },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#1DB954', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'MoreOptionsButton',
    label: 'More Options',
    category: 'Actions',
    icon: 'MoreHorizontal',
    description: 'Three-dot menu button',
    props: [
      WIDTH_PROP,
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#B3B3B3', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'ActionBar',
    label: 'Action Bar',
    category: 'Actions',
    icon: 'LayoutList',
    description: 'Combined play, shuffle, like, and more actions',
    props: [
      WIDTH_PROP,
      { key: 'showShuffle', label: 'Show Shuffle', type: 'toggle', defaultValue: true },
      { key: 'showLike', label: 'Show Like', type: 'toggle', defaultValue: true },
      { key: 'showMore', label: 'Show More', type: 'toggle', defaultValue: true },
      { key: 'accentColor', label: 'Accent Color', type: 'color', defaultValue: '#1DB954', colors: SPOTIFY_COLORS },
    ],
  },

  // ─── Track List ───────────────────────────
  {
    type: 'TrackRow',
    label: 'Track Row',
    category: 'Track List',
    icon: 'Music',
    description: 'Single track with number, image, title, artist, album, duration',
    props: [
      WIDTH_PROP,
      { key: 'showImage', label: 'Show Image', type: 'toggle', defaultValue: true },
      { key: 'showAlbum', label: 'Show Album', type: 'toggle', defaultValue: true },
      { key: 'showDuration', label: 'Show Duration', type: 'toggle', defaultValue: true },
      { key: 'trackIndex', label: 'Track #', type: 'slider', defaultValue: 0, min: 0, max: 9, step: 1 },
    ],
  },
  {
    type: 'TrackListHeader',
    label: 'Track Header',
    category: 'Track List',
    icon: 'ListOrdered',
    description: 'Column headers: #, Title, Album, Duration',
    props: [
      WIDTH_PROP,
      { key: 'showAlbum', label: 'Show Album', type: 'toggle', defaultValue: true },
      { key: 'showDate', label: 'Show Date Added', type: 'toggle', defaultValue: true },
      { key: 'showDuration', label: 'Show Duration', type: 'toggle', defaultValue: true },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#B3B3B3', colors: SPOTIFY_COLORS },
    ],
  },
  {
    type: 'TrackList',
    label: 'Track List',
    category: 'Track List',
    icon: 'List',
    description: 'Full list of tracks (5 rows)',
    props: [
      WIDTH_PROP,
      { key: 'rows', label: 'Rows', type: 'slider', defaultValue: 5, min: 1, max: 10, step: 1 },
      { key: 'showImages', label: 'Show Images', type: 'toggle', defaultValue: true },
      { key: 'showAlbum', label: 'Show Album', type: 'toggle', defaultValue: true },
      { key: 'compact', label: 'Compact', type: 'toggle', defaultValue: false },
    ],
  },

  // ─── Utility ──────────────────────────────
  {
    type: 'Divider',
    label: 'Divider',
    category: 'Utility',
    icon: 'Minus',
    description: 'Horizontal line separator',
    props: [
      WIDTH_PROP,
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#282828', colors: SPOTIFY_COLORS },
      { key: 'thickness', label: 'Thickness', type: 'slider', defaultValue: 1, min: 1, max: 4, step: 1 },
    ],
  },
  {
    type: 'Spacer',
    label: 'Spacer',
    category: 'Utility',
    icon: 'Space',
    description: 'Empty vertical spacing',
    props: [
      WIDTH_PROP,
      { key: 'height', label: 'Height', type: 'slider', defaultValue: 24, min: 8, max: 64, step: 8 },
    ],
  },
  {
    type: 'SectionLabel',
    label: 'Section Label',
    category: 'Utility',
    icon: 'Tag',
    description: 'Small label for grouping content',
    props: [
      WIDTH_PROP,
      { key: 'text', label: 'Label', type: 'text', defaultValue: 'Section' },
      { key: 'size', label: 'Size', type: 'size', defaultValue: 'medium' },
      { key: 'color', label: 'Color', type: 'color', defaultValue: '#FFFFFF', colors: SPOTIFY_COLORS },
    ],
  },
]

export const componentsByCategory = componentLibrary.reduce<
  Record<string, ComponentDefinition[]>
>((acc, comp) => {
  if (!acc[comp.category]) acc[comp.category] = []
  acc[comp.category].push(comp)
  return acc
}, {})
