import { ArrowLeft, CameraIcon } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Input } from '../../Components/Input'
import { Label } from '../../Components/Label'
import placeholder from '../../assets/placeholder.jpg'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const regexName = /^[a-zA-ZÀ-ÿ' -]+$/
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  async function handleUpdate() {
    if (name.length < 2 || name.length > 50) {
      return toast.error('O nome deve ter entre 2 a 50 caracteres!')
    }

    if (!regexName.test(name)) {
      return toast.error(
        'O nome deve conter apenas letras, espaços, hífens e apósotolos!',
      )
    }

    if (!regexMail.test(email)) {
      return toast.error('O e-mail digitado possui um formato inválido!')
    }

    if (password !== '') {
      if (password.length < 8) {
        return toast.error('A senha deve conter no mínimo 8+ caracteres!')
      }

      if (!regexPassword.test(password)) {
        return toast.error(
          'A senha deve conter pelo menos uma letra minúscula, maiúscula, um dígito (0-9) e caracteres especiais (@$!%*?&).',
        )
      }
    }

    const user = {
      name,
      email,
      password,
      old_password: oldPassword,
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }

  return (
    <div className="mx-auto w-page px-6 pb-12 pt-6">
      <header>
        <ButtonText
          to="/"
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
            src={avatar}
            alt={`Imagem de ${user.name}`}
            className="group-hover h-avatar w-avatar rounded-full transition-opacity group-hover:opacity-60"
          />

          <Input
            id="avatar"
            type="file"
            onChange={handleChangeAvatar}
            className="sr-only"
          />

          <CameraIcon className="absolute bottom-[50%] right-[50%] hidden h-6 w-6 translate-x-[50%] translate-y-[50%] text-zinc-400 group-hover:inline" />
        </label>

        <form className="mt-6 flex w-full flex-col gap-4 md:w-card" action="">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" title="Nome" />
            <Input
              type="text"
              id="name"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" title="E-mail" />
            <Input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="password" title="Senha" />
            <Input
              type="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="new-password" title="Nova senha" />
            <Input
              type="password"
              id="new-password"
              placeholder="Nova senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button onClick={handleUpdate} type="submit" className="mt-4">
            Salvar
          </Button>
        </form>
      </main>
    </div>
  )
}
