interface Props {
  value: string
  colors: string[]
  onChange: (value: string) => void
}

export function ColorPicker({ value, colors, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
            value === color ? 'border-white scale-110' : 'border-transparent'
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  )
}
