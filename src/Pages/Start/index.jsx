import { ChevronRight } from 'lucide-react'

export function Start() {
  return (
    <div className="grid-rows-app grid h-screen items-center justify-center">
      <header className="flex max-w-[1440px] justify-center p-4">
        <h1 className="font-anton text-3xl text-kashmir-950 dark:text-kashmir-50">
          ROCKETMOVIES
        </h1>
      </header>
      <main className="flex max-w-[1440px] flex-1 flex-col items-center justify-center space-y-4 px-6 text-center">
        <h2 className="text-3xl font-bold text-kashmir-950 dark:text-kashmir-50">
          Filmes, séries e muito mais, sem limites
        </h2>
        <p className="text-md text-kashmir-900 dark:text-kashmir-200">
          Explore o mundo do cinema em minutos, resumos envolventes dos seus
          filmes favoritos, tudo em um só lugar!
        </p>
        <button className=" flex items-center rounded-lg border-2 border-kashmir-900 bg-transparent p-3 text-lg font-semibold shadow-sm transition-colors duration-300 hover:bg-kashmir-900 hover:text-kashmir-100 dark:border-kashmir-50 dark:text-kashmir-50 dark:hover:border-kashmir-100 dark:hover:bg-kashmir-100 dark:hover:text-kashmir-900">
          Vamos lá <ChevronRight />
        </button>
      </main>
    </div>
  )
}
