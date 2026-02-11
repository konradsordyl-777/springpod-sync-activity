interface Props {
  color?: string
  thickness?: number
}

export function Divider({ color = '#282828', thickness = 1 }: Props) {
  return (
    <div className="px-4 py-1">
      <hr style={{ borderColor: color, borderWidth: thickness, borderStyle: 'solid' }} className="border-0 border-t" />
    </div>
  )
}
