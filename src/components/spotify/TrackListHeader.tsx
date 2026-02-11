import { Clock } from 'lucide-react'

interface Props {
  showAlbum?: boolean
  showDate?: boolean
  showDuration?: boolean
  color?: string
}

export function TrackListHeader({ showAlbum = true, showDate = true, showDuration = true, color = '#B3B3B3' }: Props) {
  return (
    <div className="flex items-center gap-4 px-4 py-2 text-xs font-medium uppercase tracking-wider border-b border-white/10" style={{ color }}>
      <div className="w-4 text-right shrink-0">#</div>
      <div className="w-10 shrink-0" /> {/* image spacer */}
      <div className="flex-1">Title</div>
      {showAlbum && <div className="hidden sm:block flex-1">Album</div>}
      {showDate && <div className="hidden md:block flex-1">Date Added</div>}
      {showDuration && (
        <div className="shrink-0">
          <Clock size={14} />
        </div>
      )}
    </div>
  )
}
