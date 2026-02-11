import { Play, Shuffle, Heart, MoreHorizontal } from 'lucide-react'

interface Props {
  showShuffle?: boolean
  showLike?: boolean
  showMore?: boolean
  accentColor?: string
}

export function ActionBar({ showShuffle = true, showLike = true, showMore = true, accentColor = '#1DB954' }: Props) {
  return (
    <div className="flex items-center gap-4 px-4 py-3">
      <button
        className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
        style={{ backgroundColor: accentColor }}
      >
        <Play size={26} fill="#000" color="#000" className="ml-0.5" />
      </button>
      {showShuffle && (
        <button className="flex items-center justify-center w-8 h-8 hover:scale-110 transition-transform">
          <Shuffle size={22} color={accentColor} />
        </button>
      )}
      {showLike && (
        <button className="flex items-center justify-center w-8 h-8 hover:scale-110 transition-transform">
          <Heart size={24} color="#B3B3B3" />
        </button>
      )}
      {showMore && (
        <button className="flex items-center justify-center w-8 h-8 hover:scale-110 transition-transform">
          <MoreHorizontal size={24} color="#B3B3B3" />
        </button>
      )}
    </div>
  )
}
