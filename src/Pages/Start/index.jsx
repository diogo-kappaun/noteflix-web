import { ChevronRight } from 'lucide-react'
import { Button } from '../../Components/Button'
import { Brand } from '../../Components/Brand'

export function Start() {
  return (
    <div className="grid h-screen w-full grid-rows-app bg-gradient-to-t from-zinc-950 from-30% to-zinc-800">
      <Brand className="px-6 text-xl md:px-12" />

      <main className="flex max-w-[1440px] flex-1 flex-col items-center justify-center space-y-6 px-6 text-center">
        <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl dark:text-zinc-50">
          Filmes, séries e muito mais, sem limites
        </h2>
        <p className="text-md text-zinc-900 md:text-lg dark:text-zinc-200">
          Explore o mundo do cinema em minutos, resumos envolventes dos seus
          filmes favoritos, tudo em um só lugar!
        </p>
        <Button className="mt-4 flex justify-center rounded-full bg-indigo-500 px-8 text-base text-zinc-100 transition-transform hover:scale-105">
          Vamos lá <ChevronRight />
        </Button>
      </main>
    </div>
  )
}
