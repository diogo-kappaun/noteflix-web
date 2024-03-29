import { Rating } from '../Rating'

export function MovieItem({ data, ...rest }) {
  return (
    <div {...rest} className="flex flex-col gap-6">
      <div className="rounded-sm+ border border-zinc-700 p-4 md:p-8">
        <h3 className="mb-3 text-xl ">{data.title}</h3>
        <Rating count={data.rating} />
        {data.tags && (
          <div id="tags" className="mt-3 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={String(tag.id)}
                className="rounded-sm+ border border-zinc-700 px-2 py-0.5"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
