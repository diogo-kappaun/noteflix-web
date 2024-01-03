import { twMerge } from 'tailwind-merge'

export function Input({ ...props }) {
  return (
    <input
      {...props}
      className={twMerge(
        'rounded-sm+ border border-zinc-500 bg-zinc-900 px-4 py-2 text-base text-zinc-500 placeholder-zinc-500 outline-none transition-all duration-300',
        'focus-within:shadow-input focus-within:border-zinc-100',
      )}
    />
  )
}
