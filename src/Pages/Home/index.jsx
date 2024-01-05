import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { FiPlus } from 'react-icons/fi'
import { MovieItem } from '../../Components/Home/MovieItem'

export function Home() {
  return (
    <div className="w-full pb-12 text-zinc-100">
      <Header />

      <div className="mx-auto mt-6 w-page space-y-6 px-6">
        <form className="flex" action="">
          <Input
            type="text"
            placeholder="Pesquisar pelo título"
            className="w-full"
          />
        </form>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl">Meus filmes</h2>
          <Button className="flex items-center justify-center gap-2 bg-zinc-100 px-2">
            <FiPlus className="h-4 w-4" />
            Novo filme
          </Button>
        </div>

        <div className="flex flex-col gap-6 overflow-auto">
          <MovieItem
            title="Caminhos Cruzados"
            text="Em um mundo pós-apocalíptico, duas almas solitárias, Eli e Maya, cruzam seus caminhos em busca de um santuário legendário. Eli é um sobrevivente resiliente, mestre na arte da sobrevivência e guarda de um livro sagrado que pode conter a chave para a salvação da humanidade."
            rating="4"
            tags="Pós-apocalíptico"
          />
          <MovieItem
            title="Caminhos Cruzados"
            text="Em um mundo pós-apocalíptico, duas almas solitárias, Eli e Maya, cruzam seus caminhos em busca de um santuário legendário. Eli é um sobrevivente resiliente, mestre na arte da sobrevivência e guarda de um livro sagrado que pode conter a chave para a salvação da humanidade."
            rating="4"
            tags="Pós-apocalíptico"
          />
        </div>
      </div>
    </div>
  )
}
