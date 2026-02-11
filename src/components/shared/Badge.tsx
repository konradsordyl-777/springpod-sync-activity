interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'surface'
}

export function Badge({ children, variant = 'green' }: BadgeProps) {
  const styles = {
    green: 'bg-spotify-green text-spotify-black',
    surface: 'bg-spotify-surface text-spotify-text-sub',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${styles[variant]}`}>
      {children}
    </span>
  )
}
