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
  const commonPassword = [
    [
      '123456',
      'password',
      '123456789',
      '12345678',
      '12345',
      '1234567',
      '1234567890',
      'qwerty',
      'password123',
      '111111',
      '123123',
      'abc123',
      'qwerty123',
      '1q2w3e4r',
      'admin',
      'letmein',
      'welcome',
      'monkey',
      'dragon',
      'login',
      'princess',
      'abc123',
      'football',
      'iloveyou',
      'admin123',
      'welcome123',
      'adminadmin',
      '123123123',
      'solo',
      'passw0rd',
      'master',
      'shadow',
      'michael',
      'jordan',
      'superman',
      'batman',
      'trustno1',
      '123456a',
      'password1',
      'hello123',
      '1234',
      '123456789a',
      '987654321',
      'starwars',
      'whatever',
      'charlie',
      'liverpool',
      'football1',
      'baseball',
      'iloveyou1',
      'password1234',
      'letmein123',
      'iloveyou123',
      '12345678910',
      'welcome1',
      'passw0rd123',
      'abc123456',
      'qazwsx',
      'password12',
      'jennifer',
      'orange',
      'asdfgh',
      '123456789q',
      '12345678a',
      '123456789aA',
      '123456789qQ',
      '123456789qwe',
      'q1w2e3r4t5',
      'admin1234',
      'welcome1234',
      'abc123456789',
      'qwertyuiop',
      '123456789aa',
      '123123a',
      'password12345',
      '123456aA',
      '1234abcd',
      'letmein1234',
      'q1w2e3',
      'q1w2e3r4',
      '1qaz2wsx',
      '1q2w3e',
      '123456789z',
      '1234567890a',
      '123qwe',
      'abcabc',
      'password!',
      '12345a',
      'abcd1234',
      'abcd1234',
      'password!',
      'qwerty!',
      'asdfgh!',
      'admin!',
      'login!',
      'password1!',
      '123456!',
      'passw0rd!',
      'iloveyou!',
      'welcome!',
      'monkey!',
      'abc123!',
      'password123!',
      'admin123!',
      'letmein123!',
      'football!',
      'princess!',
      '1234567a',
      'adminadmin123',
      'password12345!',
      'iloveyou123!',
      '123456789123',
      'adminadmin123!',
      '1234567890123',
      '1q2w3e4r!',
      '1qaz2wsx!',
      '123qwe!',
      'zaq12wsx',
      'passw0rd!@',
      'qwerty123!',
      'abc1234!',
      '12345!',
      '1234qwer',
      '123456aa',
      '12345678aa',
      'iloveyou1234',
      '11111111',
      '1234567aa',
      '1234567aA',
      'iloveyou12345',
      'adminadminadmin',
      'password123456',
      '12345aA',
      'admin1234!',
      'adminadmin1234',
      'adminadminadmin123',
      'adminadminadmin123!',
      'iloveyou123456',
      'iloveyou1234567',
      'iloveyou123456789',
      'adminadminadmin1234',
      'adminadminadmin12345',
      'adminadminadminadmin',
      'adminadminadminadmin123',
      'adminadminadminadmin123!',
      'passwordpassword',
      'passwordpassword123',
      'passwordpassword123!',
      'passwordpassword123456',
      'passwordpasswordpassword',
      'passwordpasswordpassword123',
      'passwordpasswordpassword123!',
      'passwordpasswordpassword123456',
      'passwordpasswordpassword!',
      'passwordpasswordpassword1',
      'passwordpasswordpassword12',
      'passwordpasswordpassword123',
      'passwordpasswordpassword1234',
      'passwordpasswordpassword12345',
      'passwordpasswordpassword123456',
      'passwordpasswordpassword1234567',
      'passwordpasswordpassword12345678',
      'passwordpasswordpassword123456789',
      'passwordpasswordpassword1234567890',
      'passwordpasswordpassword!',
      'passwordpasswordpassword1!',
      'passwordpasswordpassword12!',
      'passwordpasswordpassword123!',
      'passwordpasswordpassword1234!',
      'passwordpasswordpassword12345!',
      'passwordpasswordpassword123456!',
      'passwordpasswordpassword1234567!',
      'passwordpasswordpassword12345678!',
      'passwordpasswordpassword123456789!',
      'passwordpasswordpassword1234567890!',
      'passwordpassword123!',
      'passwordpassword1234!',
      'passwordpassword12345!',
      'passwordpassword123456!',
      'passwordpassword1234567!',
      'passwordpassword12345678!',
      'passwordpassword123456789!',
      'passwordpassword1234567890!',
      'password12345!',
      'password123456!',
      'password1234567!',
      'password12345678!',
      'password123456789!',
      'password1234567890!',
      'password12345678910!',
      'password123456789a!',
      'password123456789aa!',
      'password1234567890a!',
      'password1234567890aa!',
      'password1234567890aaa!',
      'password1234567890aaaa!',
      'password1234567890aaaaa!',
      'password1234567890aaaaaa!',
      'password1234567890aaaaaaa!',
      'password1234567890aaaaaaaa!',
      'password1234567890aaaaaaaaa!',
    ],
  ]

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

    if (commonPassword.includes(password)) {
      return toast.error('A senha informada é muito comum!')
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
