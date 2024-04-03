import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { Header } from '../../Components/Header'
import { MovieItem } from '../../Components/Home/MovieItem'
import { Input } from '../../Components/Input'
import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movies?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [search])

  return (
    <div className="h-screen w-full pb-12 text-zinc-100">
      <Header />

      <div className="mx-auto mt-6 grid h-home w-page grid-rows-card space-y-6 px-6">
        <form className="flex" action="">
          <Input
            type="text"
            placeholder="Pesquisar pelo título"
            className="w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl">Meus filmes</h2>
          <Button
            to="/create"
            className="flex items-center justify-center gap-2 bg-zinc-100 px-2"
          >
            <FiPlus className="h-4 w-4" />
            Novo filme
          </Button>
        </div>

        <section className="flex flex-col gap-6 overflow-y-auto">
          {notes.map((note) => (
            <MovieItem
              key={String(note.id)}
              data={note}
              onClick={() => handlePreview(note.id)}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
