import { MoreHorizontal } from 'lucide-react'

interface Props {
  color?: string
}

export function MoreOptionsButton({ color = '#B3B3B3' }: Props) {
  return (
    <div className="px-4 py-2">
      <button className="flex items-center justify-center w-8 h-8 hover:scale-110 transition-transform">
        <MoreHorizontal size={24} color={color} />
      </button>
    </div>
  )
}
