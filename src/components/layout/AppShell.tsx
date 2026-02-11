import { Toolbar } from './Toolbar'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from './RightPanel'
import { Canvas } from './Canvas'
import { useSandboxStore } from '@/stores/useSandboxStore'

export function AppShell() {
  const previewMode = useSandboxStore((s) => s.previewMode)

  return (
    <div className="h-full flex flex-col">
      <Toolbar />
      <div className="flex-1 flex overflow-hidden">
        {/* Left panel - hidden in preview mode */}
        {!previewMode && (
          <div className="w-60 shrink-0">
            <LeftPanel />
          </div>
        )}

        {/* Center canvas */}
        <div className="flex-1 overflow-y-auto bg-spotify-dark">
          <Canvas />
        </div>

        {/* Right panel - hidden in preview mode */}
        {!previewMode && (
          <div className="w-72 shrink-0">
            <RightPanel />
          </div>
        )}
      </div>
    </div>
  )
}
