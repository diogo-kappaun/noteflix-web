import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md'

export function MovieItem({ title, text, rating, tags }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-sm+ border border-zinc-700 p-4 md:p-8">
        <h3 className="text-xl">{title}</h3>
        <div id="rating" className="mt-2 flex gap-0.5">
          <MdOutlineStarPurple500 className="h-5 w-5" />
          <MdOutlineStarPurple500 className="h-5 w-5" />
          <MdOutlineStarPurple500 className="h-5 w-5" />
          <MdOutlineStarPurple500 className="h-5 w-5" />
          <MdOutlineStarOutline className="h-5 w-5" />
          {rating}
        </div>
        <p className="mt-3">{text}</p>
        <div id="tags" className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-sm+ border border-zinc-700 px-2 py-0.5">
            {tags}
          </span>
        </div>
      </div>
    </div>
  )
}
