interface Props {
  text?: string
  size?: string
  color?: string
}

export function SectionLabel({ text = 'Section', size = 'medium', color = '#FFFFFF' }: Props) {
  const sizeMap: Record<string, string> = {
    small: 'text-xs uppercase tracking-wider',
    medium: 'text-sm font-semibold',
    large: 'text-lg font-bold',
  }

  return (
    <div className={`px-4 py-2 ${sizeMap[size] ?? sizeMap.medium}`} style={{ color }}>
      {text}
    </div>
  )
}
