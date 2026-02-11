import { AnimatePresence, motion } from 'framer-motion'
import { useSandboxStore } from '@/stores/useSandboxStore'
import { WelcomeScreen } from '@/components/screens/WelcomeScreen'
import { SandboxScreen } from '@/components/screens/SandboxScreen'
import { CompletionScreen } from '@/components/screens/CompletionScreen'

export default function App() {
  const screen = useSandboxStore((s) => s.screen)

  return (
    <div className="h-full">
      <AnimatePresence mode="wait">
        {screen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <WelcomeScreen />
          </motion.div>
        )}
        {screen === 'sandbox' && (
          <motion.div
            key="sandbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <SandboxScreen />
          </motion.div>
        )}
        {screen === 'completion' && (
          <motion.div
            key="completion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <CompletionScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
