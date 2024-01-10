import { ChevronRight } from 'lucide-react'
import { Button } from '../../Components/Button'
import { Brand } from '../../Components/Brand'

export function Start() {
  return (
    <div className="grid h-screen w-full grid-rows-app bg-gradient-to-t from-zinc-950 from-30% to-zinc-800">
      <Brand className="px-6 text-xl md:px-12" />

      <main className="flex max-w-[1440px] flex-1 flex-col items-center justify-center space-y-6 px-6 text-center">
        <h2 className="text-3xl font-bold text-zinc-100 md:text-4xl">
          Filmes, séries e muito mais, sem limites
        </h2>
        <p className="text-md text-zinc-200 md:text-lg ">
          Explore o mundo do cinema em minutos, resumos envolventes dos seus
          filmes favoritos, tudo em um só lugar!
        </p>
        <Button to="/signin" className="mt-4 px-6">
          Vamos lá <ChevronRight />
        </Button>
      </main>
    </div>
  )
}
