import { Link } from 'react-router-dom'
import { cn } from '../Utils/cn'

export function ButtonText({ className, ...props }) {
  return <Link className={cn('text-sm text-zinc-400', className)} {...props} />
}
