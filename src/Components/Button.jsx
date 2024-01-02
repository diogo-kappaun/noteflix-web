import { cn } from '../Utils/cn'

export function Button({ className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center rounded-lg border-2 p-3 text-lg font-semibold shadow-sm transition-colors duration-300',
        className,
      )}
    ></button>
  )
}
