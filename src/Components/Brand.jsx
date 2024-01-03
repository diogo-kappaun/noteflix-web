import { cn } from '../Utils/cn'

export function Brand({ className }) {
  return (
    <header className={cn('w-full bg-zinc-950 py-6 shadow-sm', className)}>
      <h1 className="font-anton tracking-wide text-zinc-950 md:text-3xl dark:text-zinc-100">
        RocketMovies
      </h1>
    </header>
  )
}
