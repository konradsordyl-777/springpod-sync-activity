interface Props {
  size?: string
  shadow?: boolean
}

export function PlaylistCover({ size = 'large', shadow = true }: Props) {
  const sizeMap: Record<string, string> = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-56 h-56',
  }

  return (
    <div className="flex justify-center py-4">
      <div
        className={`${sizeMap[size] ?? sizeMap.large} rounded-md bg-gradient-to-br from-purple-600 via-blue-500 to-green-400 flex items-center justify-center ${shadow ? 'shadow-2xl shadow-black/50' : ''}`}
      >
        <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
    </div>
  )
}
