import { Heart } from 'lucide-react'

interface Props {
  liked?: boolean
  color?: string
}

export function LikeButton({ liked = false, color = '#1DB954' }: Props) {
  return (
    <div className="px-4 py-2">
      <button className="flex items-center justify-center w-8 h-8 hover:scale-110 transition-transform">
        <Heart
          size={24}
          color={liked ? color : '#B3B3B3'}
          fill={liked ? color : 'transparent'}
        />
      </button>
    </div>
  )
}
