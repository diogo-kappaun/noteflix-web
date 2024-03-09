import { ArrowLeft, Plus } from 'lucide-react'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Marker } from '../../Components/CreateMovie/Marker'
import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Label } from '../../Components/Label'

export function CreateMovie() {
  return (
    <div>
      <Header />
      <main className="mx-auto flex w-page flex-col p-6 pb-12">
        <ButtonText
          to="/"
          className="flex w-max items-center gap-2 text-zinc-100 transition-opacity hover:underline hover:opacity-95"
          href="#"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </ButtonText>

        <h2 className="mt-6 text-2xl text-zinc-100">Novo filme</h2>

        <form id="createMovie" action="" className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col gap-1">
              <Label htmlFor="title" title="Título" />
              <Input type="text" id="title" placeholder="Título" />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <Label htmlFor="rating" title="Sua nota" />
              <Input
                type="number"
                id="rating"
                min="0"
                max="5"
                placeholder="Sua nota (de 0 a 5)"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="details" title="Observações" />
            <textarea
              name=""
              id="details"
              cols="30"
              rows="10"
              placeholder="Observações"
              className="rounded-sm+ border border-zinc-700 bg-transparent px-4 py-2 text-base text-zinc-500 placeholder-zinc-500 outline-none transition-all duration-300 focus-within:border-zinc-100"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm text-zinc-100">Marcadores</h3>
            <div className="flex flex-wrap gap-2 rounded-sm+ border border-zinc-700 p-2">
              <Marker title="React" />
              <span className="flex w-max items-center gap-2 rounded-sm+ border border-dashed border-zinc-700 px-2 py-1 text-sm text-zinc-100">
                Novo marcador <Plus className="h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <Button className="bg flex-1 border border-zinc-700 bg-transparent text-zinc-100">
              Excluir filme
            </Button>

            <Button to="/" form="createMovie" type="submit" className="flex-1">
              Salvar filme
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
