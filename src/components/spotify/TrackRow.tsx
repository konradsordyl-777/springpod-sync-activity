import { Play } from 'lucide-react'
import { sampleTracks } from '@/data/sampleData'

interface Props {
  showImage?: boolean
  showAlbum?: boolean
  showDuration?: boolean
  trackIndex?: number
}

export function TrackRow({ showImage = true, showAlbum = true, showDuration = true, trackIndex = 0 }: Props) {
  const track = sampleTracks[trackIndex] ?? sampleTracks[0]
  const num = trackIndex + 1

  return (
    <div className="group flex items-center gap-4 px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
      {/* Track number / play icon */}
      <div className="w-4 text-right text-sm text-spotify-text-sub shrink-0">
        <span className="group-hover:hidden">{num}</span>
        <Play size={14} className="hidden group-hover:block" fill="white" color="white" />
      </div>

      {/* Cover art */}
      {showImage && (
        <div className="w-10 h-10 rounded bg-spotify-surface-light flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-spotify-text-dim" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      )}

      {/* Title + Artist */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white truncate">{track.title}</div>
        <div className="text-xs text-spotify-text-sub truncate">{track.artist}</div>
      </div>

      {/* Album */}
      {showAlbum && (
        <div className="hidden sm:block flex-1 min-w-0">
          <span className="text-sm text-spotify-text-sub truncate">{track.album}</span>
        </div>
      )}

      {/* Duration */}
      {showDuration && (
        <div className="text-sm text-spotify-text-sub shrink-0">
          {track.duration}
        </div>
      )}
    </div>
  )
}
