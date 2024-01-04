import { cn } from '../Utils/cn'

export function ButtonText({ className, ...props }) {
  return (
    <button className={cn('text-sm text-zinc-400', className)} {...props} />
  )
}
