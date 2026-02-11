interface Props {
  text?: string
  color?: string
}

export function PlaylistDescription({ text = 'The most played songs right now. Cover: Sabrina Carpenter', color = '#B3B3B3' }: Props) {
  return (
    <p className="text-sm px-4 py-1" style={{ color }}>
      {text}
    </p>
  )
}
