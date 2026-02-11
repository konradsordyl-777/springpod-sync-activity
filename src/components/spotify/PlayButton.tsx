import { Play } from 'lucide-react'

interface Props {
  size?: string
  color?: string
}

export function PlayButton({ size = 'large', color = '#1DB954' }: Props) {
  const sizeMap: Record<string, { btn: string; icon: number }> = {
    small: { btn: 'w-10 h-10', icon: 18 },
    medium: { btn: 'w-12 h-12', icon: 22 },
    large: { btn: 'w-14 h-14', icon: 26 },
  }
  const s = sizeMap[size] ?? sizeMap.large

  return (
    <div className="px-4 py-2">
      <button
        className={`${s.btn} rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg`}
        style={{ backgroundColor: color }}
      >
        <Play size={s.icon} fill="#000" color="#000" className="ml-0.5" />
      </button>
    </div>
  )
}
