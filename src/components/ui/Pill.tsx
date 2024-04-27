export function Pill({ children, color }: { color: string; children: React.ReactNode }) {
  return (
    <span className="p-1 px-2 text-white mr-2 text-xs rounded" style={{ backgroundColor: color }}>
      {children}
    </span>
  )
}
