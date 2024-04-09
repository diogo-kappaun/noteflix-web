import { Link } from 'react-router-dom'
import { cn } from '../Utils/cn'

export function Button({ className, ...props }) {
  return (
    <Link
      {...props}
      className={cn(
        'flex justify-center rounded-sm+ bg-zinc-100 py-2 font-poppins text-base text-zinc-950 transition-opacity duration-150 hover:opacity-95',
        className,
      )}
    />
  )
}
