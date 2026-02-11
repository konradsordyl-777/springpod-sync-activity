interface Props {
  height?: number
}

export function Spacer({ height = 24 }: Props) {
  return <div style={{ height }} className="w-full" />
}
