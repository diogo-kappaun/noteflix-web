import { Brand } from '../../Components/Brand'
import { Button } from '../../Components/Button'

export function SignIn() {
  return (
    <div className="grid h-screen w-full grid-rows-app bg-gradient-to-t from-zinc-950 from-30% to-zinc-800">
      <Brand className="px-6 text-xl sm:px-12" />

      <div className="grid-cols-card grid-rows-card mx-auto grid bg-zinc-950 px-6 sm:mt-12  sm:rounded-lg sm:px-12 sm:pt-20">
        <h2 className="mb-12 text-start text-3xl font-semibold text-zinc-100 sm:text-center sm:text-5xl">
          Entrar no <br /> RocketMovies
        </h2>
        <div className="border-b border-zinc-700"></div>
        <div className="mx-auto mt-12 w-[100%] shadow-sm sm:w-[20rem]">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-zinc-100">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="E-mail"
                className="rounded-md border border-zinc-500 bg-zinc-900 px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm text-zinc-100">
                Senha
              </label>
              <input
                type="text"
                id="password"
                placeholder="Senha"
                className="rounded-md border border-zinc-500 bg-zinc-900 px-4 py-2"
              />
            </div>
            <Button className="mt-4 flex justify-center rounded-full bg-indigo-500 text-base text-zinc-100 transition-transform hover:scale-105">
              Entrar
            </Button>
          </form>
          <p className="mt-12 text-center text-zinc-100">
            Novo por aqui?{' '}
            <a href="#" className="text-zinc-400">
              Cadastre-se agora
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
