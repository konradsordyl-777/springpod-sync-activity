interface Props {
  color?: string
  height?: number
}

export function GradientBackground({ color = '#1E3264', height = 200 }: Props) {
  return (
    <div
      className="w-full rounded-t-md"
      style={{
        height,
        background: `linear-gradient(180deg, ${color} 0%, ${color}88 40%, #12121200 100%)`,
      }}
    />
  )
}
