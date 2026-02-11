import { Shuffle } from 'lucide-react'

interface Props {
  active?: boolean
  color?: string
}

export function ShuffleButton({ active = true, color = '#1DB954' }: Props) {
  return (
    <div className="px-4 py-2">
      <button className="flex items-center justify-center w-8 h-8 hover:scale-110 transition-transform">
        <Shuffle size={20} color={active ? color : '#B3B3B3'} />
        {active && (
          <span className="absolute bottom-0 w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
        )}
      </button>
    </div>
  )
}
