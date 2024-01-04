import { cn } from '../Utils/cn'

export function Button({ className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        'flex justify-center rounded-sm+ bg-zinc-100 py-2 text-base text-zinc-950 transition-opacity duration-150 hover:opacity-95',
        className,
      )}
    />
  )
}
