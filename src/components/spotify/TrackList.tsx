import { Play } from 'lucide-react'
import { sampleTracks } from '@/data/sampleData'

interface Props {
  rows?: number
  showImages?: boolean
  showAlbum?: boolean
  compact?: boolean
}

export function TrackList({ rows = 5, showImages = true, showAlbum = true, compact = false }: Props) {
  const tracks = sampleTracks.slice(0, rows)

  return (
    <div className="flex flex-col">
      {tracks.map((track, i) => (
        <div
          key={track.id}
          className={`group flex items-center gap-4 px-4 ${compact ? 'py-1.5' : 'py-2'} rounded-md hover:bg-white/10 transition-colors`}
        >
          <div className="w-4 text-right text-sm text-spotify-text-sub shrink-0">
            <span className="group-hover:hidden">{i + 1}</span>
            <Play size={14} className="hidden group-hover:block" fill="white" color="white" />
          </div>

          {showImages && (
            <div className="w-10 h-10 rounded bg-spotify-surface-light flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-spotify-text-dim" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">{track.title}</div>
            <div className="text-xs text-spotify-text-sub truncate">{track.artist}</div>
          </div>

          {showAlbum && (
            <div className="hidden sm:block flex-1 min-w-0">
              <span className="text-sm text-spotify-text-sub truncate">{track.album}</span>
            </div>
          )}

          <div className="text-sm text-spotify-text-sub shrink-0">{track.duration}</div>
        </div>
      ))}
    </div>
  )
}
