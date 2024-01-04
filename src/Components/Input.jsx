import { cn } from '../Utils/cn'

export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={cn(
        'rounded-sm+ border border-zinc-700 bg-transparent px-4 py-2 text-base text-zinc-500 placeholder-zinc-500 outline-none transition-all duration-300 focus-within:border-zinc-100',
        className,
      )}
    />
  )
}
