import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { ArrowLeft, Clock } from 'lucide-react'
import { Rating } from '../../Components/Rating'
import { MarkerView } from '../../Components/MoviePreview/MarkerView'

export function MoviePreview() {
  return (
    <div className="text-zinc-100">
      <Header />

      <main className="mx-auto flex w-page flex-col space-y-6 p-6 pb-12">
        <ButtonText
          className="flex w-max items-center gap-2 text-zinc-100 transition-opacity hover:underline hover:opacity-95"
          href="#"
        >
          <ArrowLeft className="h-3 w-3" />
          Voltar
        </ButtonText>

        <div className="flex flex-wrap items-center gap-2 text-zinc-100">
          <h2 className="text-2xl">Interestellar</h2>
          <Rating />
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex gap-2">
            <img
              src="https://github.com/diogo-kappaun.png"
              alt="Foto de Diogo"
              className="h-5 w-5 rounded-full"
            />
            <span className="text-sm">
              Por <span>Diogo Kappaun</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="text-sm">
              <span>07/01/24</span> às <span>08:00</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <MarkerView title="React" />
          <MarkerView title="React" />
          <MarkerView title="React" />
        </div>

        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quod
          totam amet error magni, sit quibusdam. Qui, optio quaerat! Velit
          dolorem eum dolorum est! Neque illum nesciunt alias, incidunt nostrum
          quo eum. Sunt, ex. Tempore, ipsam perferendis voluptas quas
          reprehenderit inventore eligendi veniam pariatur accusamus omnis sunt
          non maiores, atque labore dolor. Sint magnam minima deleniti expedita
          nam nobis, quas ipsam blanditiis? Nemo dignissimos consequuntur
          laudantium quos aspernatur, in veniam nulla deserunt itaque libero,
          reiciendis, incidunt ullam deleniti blanditiis odit provident autem
          dolorum! Optio est error nobis velit possimus quis tenetur suscipit
          voluptate laboriosam quibusdam eum ut, quisquam eaque vitae.
        </p>
      </main>
    </div>
  )
}
