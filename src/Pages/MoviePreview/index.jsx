import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

          <ButtonText
            className="w-fit rounded-sm+ border border-zinc-100 bg-zinc-100 px-2 py-1 text-zinc-950 transition-opacity duration-150 hover:opacity-95"
            onClick={handleDeleteNote}
          >
            Excluir nota
          </ButtonText>
        </main>
      )}
    </div>
  )
}
