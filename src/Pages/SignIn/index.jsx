import { Brand } from '../../Components/Brand'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Label } from '../../Components/Label'
import { Line } from '../../Components/Line'

export function SignIn() {
  return (
    <div className="grid h-screen w-full grid-rows-app bg-gradient-to-t from-zinc-950 from-30% to-zinc-800">
      <Brand className="px-6 text-xl md:px-12" />

      <div className="w-cardWidth mx-auto grid grid-rows-card bg-zinc-950 px-6 md:mt-12  md:rounded-lg md:px-12 md:pt-20">
        <h2 className="mb-12 text-start text-3xl font-semibold text-zinc-100 md:text-center md:text-5xl">
          Entrar no <br /> RocketMovies
        </h2>
        <Line />
        <div className="mx-auto mt-12 w-[100%] shadow-sm md:w-[20rem]">
          <form id="signin" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="email" title="E-mail" />
              <Input type="text" id="email" placeholder="E-mail" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="password" title="Senha" />
              <Input type="text" id="password" placeholder="Senha" />
            </div>
            <Button
              form="signin"
              type="submit"
              className="mt-4 flex justify-center rounded-full bg-indigo-500 text-base text-zinc-100 transition-transform hover:scale-105"
            >
              Entrar
            </Button>
          </form>
          <p className="mt-12 pb-16 text-center text-zinc-400">
            Novo por aqui?{' '}
            <a href="#" className="text-nowrap text-zinc-100 underline">
              Cadastre-se agora
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
