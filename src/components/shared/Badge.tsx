interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'surface'
}

export function Badge({ children, variant = 'green' }: BadgeProps) {
  const styles = {
    green: 'bg-accent text-surface-base',
    surface: 'bg-surface-2 text-ink-tertiary border border-edge-subtle',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold ${styles[variant]}`}>
      {children}
    </span>
  )
}
