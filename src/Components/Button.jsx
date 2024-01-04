import { cn } from '../Utils/cn'

export function Button({ className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center rounded-sm+ p-3 text-lg shadow-sm transition-opacity duration-300',
        className,
      )}
    />
  )
}
