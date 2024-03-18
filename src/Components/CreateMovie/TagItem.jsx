import { X } from 'lucide-react'

export function TagItem({ value, onClick }) {
  return (
    <div className="flex w-auto rounded-sm+ border border-zinc-700 bg-transparent px-4 py-2 text-base text-zinc-500 placeholder-zinc-500 outline-none">
      <span>{value}</span>

      <button className="ml-2" onClick={onClick} type="button">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
