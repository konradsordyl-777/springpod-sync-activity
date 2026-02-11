import { AppShell } from '@/components/layout/AppShell'
import { TipCard } from '@/components/tips/TipCard'
import { useTipTrigger } from '@/hooks/useTipTrigger'

export function SandboxScreen() {
  useTipTrigger()

  return (
    <>
      <AppShell />
      <TipCard />
    </>
  )
}
