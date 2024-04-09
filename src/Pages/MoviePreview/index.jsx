import * as AlertDialog from '@radix-ui/react-alert-dialog'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Header } from '../../Components/Header'
import { MarkerView } from '../../Components/MoviePreview/MarkerView'
import { Rating } from '../../Components/Rating'
import placeholder from '../../assets/placeholder.jpg'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

dayjs.extend(relativeTime)

export function MoviePreview() {
  const [data, setData] = useState(null)
  const { user } = useAuth()

  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholder

  const params = useParams()

  async function handleDeleteNote() {
    console.log(user.id)
    await api.delete(`/movies/${params.id}`)
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }
    fetchMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="h-screen text-zinc-100">
      <Header />

      {data && (
        <main className="mx-auto flex w-page flex-col space-y-6 p-6 pb-12">
          <ButtonText
            to="/"
            className="flex w-max items-center gap-2 text-zinc-100 transition-opacity hover:underline hover:opacity-95"
            href="#"
          >
            <ArrowLeft className="h-3 w-3" />
            Voltar
          </ButtonText>

          <div className="flex flex-wrap items-center gap-2 text-zinc-100">
            <h2 className="text-2xl">{data.note.title}</h2>
            <Rating count={data.note.rating} />
          </div>

          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex items-center gap-2">
              <img
                src={avatarUrl}
                alt={`Foto de ${user.name}`}
                className="h-5 w-5 rounded-full"
              />
              <span className="text-sm">
                Por <span>{user.name}</span>
              </span>
              <span className="text-xs text-zinc-400">
                {dayjs(data.note.updated_at)
                  .locale('pt-br')
                  .subtract(3, 'hours')
                  .fromNow()}
              </span>
            </div>
          </div>

          {data && (
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <MarkerView key={tag.id} title={tag.name} />
              ))}
            </div>
          )}

          <p className="text-justify">{data.note.description}</p>

          <AlertDialog.Root>
            <AlertDialog.Trigger className="flex" asChild>
              <ButtonText className="w-fit rounded-sm+ border border-zinc-100 bg-zinc-100 px-2 py-1 text-zinc-950 transition-opacity duration-150 hover:opacity-95">
                Excluir nota
              </ButtonText>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay />
              <AlertDialog.Content
                className="fixed left-[50%] top-[50%] min-w-[230px] -translate-x-2/4 -translate-y-2/4 rounded-sm+
              border
              border-zinc-700 bg-zinc-950 p-4"
              >
                <AlertDialog.AlertDialogTitle className="mb-2 font-poppins font-bold text-zinc-100">
                  Têm certeza de que deseja excluir esta nota?
                </AlertDialog.AlertDialogTitle>
                <AlertDialog.Description className="mb-6 font-poppins text-zinc-100">
                  Esta ação não pode ser desfeita!
                </AlertDialog.Description>
                <div className="flex flex-col gap-2 md:flex-row md:justify-end md:gap-6">
                  <AlertDialog.Cancel asChild>
                    <Button className="border border-zinc-700 bg-transparent px-4 py-2 text-zinc-100">
                      Cancelar
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <Button className="px-4 py-2" onClick={handleDeleteNote}>
                      Confirmar
                    </Button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </main>
      )}
    </div>
  )
}
