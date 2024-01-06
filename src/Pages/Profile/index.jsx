import { ArrowLeft } from 'lucide-react'

export function Profile() {
  return (
    <div>
      <header>
        <a className="flex items-center gap-2 text-zinc-100" href="#">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </a>
      </header>
    </div>
  )
}
