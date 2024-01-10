import { ArrowLeft, CameraIcon } from 'lucide-react'
import { Input } from '../../Components/Input'
import { Label } from '../../Components/Label'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'

export function Profile() {
  return (
    <div className="mx-auto w-page px-6 pb-12 pt-6">
      <header>
        <ButtonText
          to="/home"
          className="flex w-max items-center gap-2 text-zinc-100 transition-opacity hover:underline hover:opacity-95"
          href="#"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </ButtonText>
      </header>

      <main className="mt-12 flex flex-col items-center justify-center">
        <label htmlFor="avatar" className="group relative">
          <img
            src="https://github.com/diogo-kappaun.png"
            alt="Foto de Diogo"
            className="group-hover h-avatar w-avatar rounded-full transition-opacity group-hover:opacity-60"
          />

          <Input id="avatar" type="file" className="sr-only" />

          <CameraIcon className="absolute bottom-[50%] right-[50%] hidden h-6 w-6 translate-x-[50%] translate-y-[50%] text-zinc-400 group-hover:inline" />
        </label>

        <form className="mt-6 flex w-full flex-col gap-4 md:w-card" action="">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" title="Nome" />
            <Input type="text" id="name" placeholder="Nome" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" title="E-mail" />
            <Input type="email" id="email" placeholder="E-mail" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="password" title="Senha" />
            <Input type="password" id="password" placeholder="Senha" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="new-password" title="Nova senha" />
            <Input type="password" id="new-password" placeholder="Nova senha" />
          </div>

          <Button form="signin" type="submit" className="mt-4">
            Salvar
          </Button>
        </form>
      </main>
    </div>
  )
}
