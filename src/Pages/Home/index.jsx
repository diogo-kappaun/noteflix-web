import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'

export function Home() {
  return (
    <div className="h-screen w-full bg-zinc-950">
      <Header />
      <div className="mx-auto mt-6 w-page px-6">
        <form className="flex" action="">
          <Input
            type="text"
            placeholder="Pesquisar pelo título"
            className="w-full"
          />
        </form>
        <h2>Meus filmes</h2>
      </div>
    </div>
  )
}
