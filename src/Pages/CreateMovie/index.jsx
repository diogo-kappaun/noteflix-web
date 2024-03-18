import { ArrowLeft, Plus } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { TagItem } from '../../Components/CreateMovie/TagItem'
import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { Label } from '../../Components/Label'
import { api } from '../../services/api'

export function CreateMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const regexOnlyLetters = /^[a-zA-ZÀ-ÿ\s]*$/

  const navigate = useNavigate()

  async function handleCreateNote() {
    if (!title || !rating || !description || tags.length === 0) {
      return toast.error('Preencha todos os campos!')
    }

    if (title.length < 2 || title.length > 50) {
      return toast.error('O título deve ter entre 2 e 50 caracteres!')
    }

    if (rating < 0 || rating > 5 || !Number.isInteger(Number(rating))) {
      return toast.error('A nota deve ser um número inteiro entre 0 e 5.')
    }

    await api.post('/movies', {
      title,
      description,
      rating,
      tags,
    })

    toast.success('Nota criada com sucesso!')
    navigate(-1)
  }

  function handleAddTag() {
    if (!regexOnlyLetters.test(newTag)) {
      return toast.error('O marcador deve conter apenas letras.')
    }

    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted))
  }

  return (
    <div>
      <Header />
      <main className="mx-auto flex w-page flex-col p-6 pb-12">
        <ButtonText
          to="/"
          className="flex w-max items-center gap-2 text-zinc-100 transition-opacity hover:underline hover:opacity-95"
          href="#"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </ButtonText>

        <h2 className="mt-6 text-2xl text-zinc-100">Novo filme</h2>

        <form id="createMovie" action="" className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col gap-1">
              <Label htmlFor="title" title="Título" />
              <Input
                type="text"
                id="title"
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <Label htmlFor="rating" title="Sua nota" />
              <Input
                type="number"
                id="rating"
                min="0"
                max="5"
                placeholder="Sua nota (de 0 a 5)"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="description" title="Observações" />
            <textarea
              name=""
              id="description"
              cols="30"
              rows="10"
              placeholder="Observações"
              className="rounded-sm+ border border-zinc-700 bg-transparent px-4 py-2 text-base text-zinc-500 placeholder-zinc-500 outline-none transition-all duration-300 focus-within:border-zinc-100"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm text-zinc-100">Marcadores</h3>
            <div className="flex w-full flex-wrap gap-2 rounded-sm+ border border-zinc-700 p-2">
              {tags.map((tag, index) => (
                <TagItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <div className="flex w-auto items-center rounded-sm+ border border-dashed border-zinc-700 px-4 py-2 text-base text-zinc-500">
                <input
                  placeholder="Novo marcador"
                  style={{
                    width: Math.min(Math.max(newTag.length, 15), 50) + 'ch',
                  }}
                  className="flex grow bg-transparent placeholder-zinc-500 outline-none"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                />
                <Plus
                  className="ml-2 h-4 w-4 cursor-pointer transition-colors hover:text-zinc-300"
                  onClick={handleAddTag}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <Button className="bg flex-1 border border-zinc-700 bg-transparent text-zinc-100">
              Excluir filme
            </Button>

            <Button
              onClick={handleCreateNote}
              form="createMovie"
              type="submit"
              className="flex-1"
            >
              Salvar filme
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
