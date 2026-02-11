import type { ComponentType } from '@/types'
import * as Spotify from '@/components/spotify'

const componentMap: Record<ComponentType, React.ComponentType<any>> = {
  PlaylistCover: Spotify.PlaylistCover,
  PlaylistTitle: Spotify.PlaylistTitle,
  PlaylistMeta: Spotify.PlaylistMeta,
  PlaylistDescription: Spotify.PlaylistDescription,
  GradientBackground: Spotify.GradientBackground,
  PlayButton: Spotify.PlayButton,
  ShuffleButton: Spotify.ShuffleButton,
  LikeButton: Spotify.LikeButton,
  MoreOptionsButton: Spotify.MoreOptionsButton,
  ActionBar: Spotify.ActionBar,
  TrackRow: Spotify.TrackRow,
  TrackListHeader: Spotify.TrackListHeader,
  TrackList: Spotify.TrackList,
  Divider: Spotify.Divider,
  Spacer: Spotify.Spacer,
  SectionLabel: Spotify.SectionLabel,
}

interface CanvasItemProps {
  type: ComponentType
  props: Record<string, any>
}

export function CanvasItem({ type, props }: CanvasItemProps) {
  const Component = componentMap[type]
  if (!Component) return <div className="text-red-500 text-sm px-4">Unknown: {type}</div>
  return <Component {...props} />
}
