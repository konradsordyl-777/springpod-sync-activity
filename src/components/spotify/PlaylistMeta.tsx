interface Props {
  creator?: string
  likes?: string
  duration?: string
  color?: string
}

export function PlaylistMeta({ creator = 'Spotify', likes = '35,234,586', duration = '2 hr 45 min', color = '#B3B3B3' }: Props) {
  return (
    <div className="flex items-center gap-1 px-4 py-1 text-sm" style={{ color }}>
      <span className="font-semibold text-white">{creator}</span>
      <span>•</span>
      <span>{likes} likes</span>
      <span>•</span>
      <span>50 songs, {duration}</span>
    </div>
  )
}
