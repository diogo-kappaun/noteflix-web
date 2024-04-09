import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpg'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'
import { ButtonText } from './ButtonText'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholder

  return (
    <header className="border-b border-zinc-700 bg-zinc-950 shadow-sm">
      <div className="mx-auto flex w-page items-center justify-between gap-8 p-6 ">
        <Link
          to="/"
          className=" font-roboto text-xl font-black tracking-wide text-zinc-100"
        >
          NoteFlix
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-end text-sm text-zinc-100">{user.name}</span>
            <ButtonText to="/" onClick={signOut} className="hover:underline">
              sair
            </ButtonText>
          </div>
          <Link to="/profile">
            <img
              src={avatarUrl}
              alt={`Imagem de ${user.name}`}
              className="w-12 rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
