import { X } from 'lucide-react'

export function Marker({ title }) {
  return (
    <span className="flex w-max items-center gap-2 rounded-sm+ border border-zinc-700 px-2 py-1 text-sm text-zinc-100">
      {title} <X className="h-4 w-4" />
    </span>
  )
}
