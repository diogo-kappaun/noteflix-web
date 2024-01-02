import { ChevronRight } from 'lucide-react'

export function Start() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <header className="p-4">
        <h1 className="font-anton text-kashmir-950 dark:text-kashmir-50 text-3xl">
          ROCKETMOVIES
        </h1>
      </header>
      <main className="flex flex-col items-center space-y-6 px-6 text-center">
        <h2 className="text-kashmir-950 dark:text-kashmir-50 text-3xl font-bold">
          Filmes, séries e muito mais, sem limites
        </h2>
        <p className="text-kashmir-900 dark:text-kashmir-200 text-lg">
          Explore o mundo do cinema em minutos, resumos envolventes dos seus
          filmes favoritos, tudo em um só lugar!
        </p>
        <button className="text-kashmir-50 bg-kashmir-500 hover:bg-kashmir-600 flex items-center rounded-lg p-4 text-lg font-semibold shadow-sm transition-colors">
          Vamos lá <ChevronRight />
        </button>
      </main>
      <footer className="p-4 text-center">
        <span className="text-kashmir-900 dark:text-kashmir-100 text-sm">
          © 2024 RocketMovies. Todos os direitos reservados.
        </span>
      </footer>
    </div>
  )
}
