import { Link } from 'react-router-dom'
import { ButtonText } from './ButtonText'

export function Header() {
  return (
    <header className="border-b border-zinc-700 bg-zinc-950 shadow-sm">
      <div className="mx-auto flex w-page items-center justify-end gap-8 p-6 smartphone:justify-between">
        <Link
          to="/home"
          className="hidden font-roboto text-xl font-black tracking-wide text-zinc-100 smartphone:block"
        >
          NoteFlix
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-sm text-zinc-100">Diogo Kappaun</span>
            <ButtonText to="/signin" className="hover:underline">
              sair
            </ButtonText>
          </div>
          <Link to="/profile">
            <img
              src="https://github.com/diogo-kappaun.png"
              alt="Foto de Diogo"
              className="w-12 rounded-full border border-zinc-700"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
