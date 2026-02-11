import type { DesignTip } from '@/types'

export const designTips: DesignTip[] = [
  {
    id: 'first-drop',
    title: 'Visual Hierarchy',
    principle: 'The arrangement and sizing of elements guides the user\'s eye to what\'s most important first.',
    description: 'Great start! In UX design, the order you place components creates a visual hierarchy. Larger, bolder elements at the top grab attention first — just like how Spotify puts the playlist cover and title front and center.',
    emoji: '👁️',
  },
  {
    id: 'playlist-cover',
    title: 'F-Pattern Scanning',
    principle: 'Users scan pages in an F-shape: left to right at the top, then down the left side.',
    description: 'You placed the cover image! Research shows users scan web pages in an F-pattern. Spotify places the album art in the top-left because that\'s where eyes naturally land first. The title and metadata flow to the right.',
    emoji: '📐',
  },
  {
    id: 'play-button',
    title: 'Fitts\'s Law',
    principle: 'Important interactive elements should be large and easy to reach.',
    description: 'Nice — you added the play button! Fitts\'s Law says the time to reach a target depends on its size and distance. That\'s why Spotify\'s play button is big and green — it\'s the primary action, so it should be the easiest to click.',
    emoji: '🎯',
  },
  {
    id: 'track-list',
    title: 'Proximity & Grouping (Gestalt)',
    principle: 'Elements placed close together are perceived as belonging to the same group.',
    description: 'The track list uses the Gestalt principle of proximity. Each row groups the track number, image, title, and artist close together, making it clear they belong to the same song. Spacing between rows separates different tracks.',
    emoji: '🧩',
  },
  {
    id: 'color-change',
    title: 'Contrast & Accessibility',
    principle: 'Sufficient color contrast ensures text is readable for all users, including those with visual impairments.',
    description: 'You customized a color! In UX, color contrast is critical for accessibility. Spotify uses white text (#FFF) on dark backgrounds (#121212) for a contrast ratio over 15:1 — well above the WCAG minimum of 4.5:1.',
    emoji: '🎨',
  },
  {
    id: 'no-spacers',
    title: 'White Space',
    principle: 'Empty space between elements reduces visual clutter and improves comprehension.',
    description: 'Tip: Your design could benefit from some spacers! White space (or "negative space") isn\'t wasted space — it helps users process information by giving elements room to breathe. Spotify uses generous padding throughout.',
    emoji: '🌬️',
  },
  {
    id: 'five-components',
    title: 'Consistency',
    principle: 'Consistent patterns help users predict behavior and learn interfaces faster.',
    description: 'You\'ve placed 5+ components! Consistency is key in UX — similar elements should look and behave the same way. Notice how all Spotify buttons share the same style language, and all text follows a clear hierarchy of sizes and colors.',
    emoji: '🔄',
  },
  {
    id: 'component-resized',
    title: '8px Grid System',
    principle: 'Using a consistent spacing unit (8px) creates visual rhythm and alignment.',
    description: 'You resized a component! Spotify and most modern apps use an 8px grid system. All spacing, sizing, and padding use multiples of 8 (8, 16, 24, 32...). This creates a subtle but important visual rhythm that makes designs feel polished.',
    emoji: '📏',
  },
]

export const tipMap = new Map(designTips.map(t => [t.id, t]))
