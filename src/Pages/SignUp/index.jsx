import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { Brand } from '../../Components/Brand'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Label } from '../../Components/Label'
import { Line } from '../../Components/Line'
import { api } from '../../services/api.js'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const navigate = useNavigate()

  const regexName = /^[a-zA-ZÀ-ÿ' -]+$/
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  function handleSignUp() {
    if (!name || !email || !password || !passwordConfirm) {
      return toast.error('Preencha todos os campos!')
    }

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

    if (password.length < 8) {
      return toast.error('A senha deve conter no mínimo 8+ caracteres!')
    }

    if (!regexPassword.test(password)) {
      return toast.error(
        'A senha deve conter pelo menos uma letra minúscula, maiúscula, um dígito (0-9) e caracteres especiais (@$!%*?&).',
      )
    }

    if (password !== passwordConfirm) {
      return toast.error('As senhas informadas não são iguais!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!')
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message)
        } else {
          toast.error('Não foi possível realizar o cadastro!')
        }
      })
  }

  return (
    <div className="grid h-screen w-full grid-rows-app bg-gradient-to-t from-zinc-950 from-30% to-zinc-800">
      <Brand className="px-6 text-xl md:px-12" />

      <div className="mx-auto grid w-cardWidth grid-rows-card bg-zinc-950 px-6 pb-16 md:mt-12 md:rounded-lg  md:px-12 md:pb-0 md:pt-20">
        <h2 className="mb-12 text-start text-3xl font-semibold text-zinc-100 md:text-center md:text-5xl">
          Crie uma conta
        </h2>
        <Line />
        <div className="mx-auto mt-12 w-[100%] shadow-sm md:w-[20rem]">
          <form id="signup" className="flex flex-col gap-4">
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="passwordConfirm" title="Confirme sua senha" />
              <Input
                type="password"
                id="passwordConfirm"
                placeholder="Confirme sua senha"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <Button
              form="signup"
              type="submit"
              className="mt-4"
              onClick={handleSignUp}
            >
              Criar
            </Button>
          </form>
          <p className="mt-12 text-center text-zinc-400">
            Já tem uma conta?{' '}
            <Link
              to="/signin"
              className="text-nowrap text-zinc-100 underline transition-opacity duration-150 hover:opacity-95"
            >
              Entre agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
