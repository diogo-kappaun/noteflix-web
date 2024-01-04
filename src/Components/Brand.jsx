import { cn } from '../Utils/cn'

export function Brand({ className }) {
  return (
    <header className={cn('w-full bg-zinc-950 py-6 shadow-sm', className)}>
      <h1 className="font-roboto font-black tracking-wide text-zinc-950 md:text-3xl dark:text-zinc-100">
        NoteFlix
      </h1>
    </header>
  )
}
