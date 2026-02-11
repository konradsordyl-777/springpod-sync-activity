interface Props {
  text?: string
  size?: string
  color?: string
}

export function PlaylistTitle({ text = "Today's Top Hits", size = 'large', color = '#FFFFFF' }: Props) {
  const sizeMap: Record<string, string> = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-5xl',
  }

  return (
    <h1 className={`${sizeMap[size] ?? sizeMap.large} font-black tracking-tight px-4 py-2`} style={{ color }}>
      {text}
    </h1>
  )
}
