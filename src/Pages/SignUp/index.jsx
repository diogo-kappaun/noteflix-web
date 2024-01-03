import { Brand } from '../../Components/Brand'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Label } from '../../Components/Label'
import { Line } from '../../Components/Line'

export function SignUp() {
  return (
    <div className="grid h-screen w-full grid-rows-app bg-gradient-to-t from-zinc-950 from-30% to-zinc-800">
      <Brand className="px-6 text-xl md:px-12" />

      <div className="w-cardWidth mx-auto grid grid-rows-card bg-zinc-950 px-6 pb-16 md:mt-12 md:rounded-lg  md:px-12 md:pb-0 md:pt-20">
        <h2 className="mb-12 text-start text-3xl font-semibold text-zinc-100 md:text-center md:text-5xl">
          Crie uma conta
        </h2>
        <Line />
        <div className="mx-auto mt-12 w-[100%] shadow-sm md:w-[20rem]">
          <form id="signup" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" title="Nome" />
              <Input type="text" id="name" placeholder="Nome" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email" title="E-mail" />
              <Input type="text" id="email" placeholder="E-mail" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="password" title="Senha" />
              <Input type="text" id="password" placeholder="Senha" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="passwordConfirm" title="Confirme sua senha" />
              <Input
                type="text"
                id="passwordConfirm"
                placeholder="Confirme sua senha"
              />
            </div>
            <Button
              form="signup"
              type="submit"
              className="mt-4 flex justify-center rounded-full bg-indigo-500 text-base text-zinc-100 transition-transform hover:scale-105"
            >
              Criar
            </Button>
          </form>
          <p className="mt-12 text-center text-zinc-400">
            Já tem uma conta?{' '}
            <a href="#" className="text-nowrap text-zinc-100 underline">
              Entre agora
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
