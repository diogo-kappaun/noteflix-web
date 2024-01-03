import { ChevronRight } from 'lucide-react'
import { Button } from '../../Components/Button'
import { Brand } from '../../Components/Brand'

export function Start() {
  return (
    <div className="mx-auto grid h-screen max-w-[1440px] grid-rows-app items-center justify-center">
      <Brand />

      <main className="flex max-w-[1440px] flex-1 flex-col items-center justify-center space-y-6 px-6 text-center">
        <h2 className="text-3xl font-bold text-kashmir-950 md:text-4xl dark:text-kashmir-50">
          Filmes, séries e muito mais, sem limites
        </h2>
        <p className="text-md text-kashmir-900 md:text-lg dark:text-kashmir-200">
          Explore o mundo do cinema em minutos, resumos envolventes dos seus
          filmes favoritos, tudo em um só lugar!
        </p>
        <Button className="border-kashmir-900 bg-transparent hover:bg-kashmir-900 hover:text-kashmir-100 dark:border-kashmir-100 dark:text-kashmir-100 dark:hover:border-kashmir-100 dark:hover:bg-kashmir-100 dark:hover:text-kashmir-900">
          Vamos lá <ChevronRight />
        </Button>
      </main>
    </div>
  )
}
