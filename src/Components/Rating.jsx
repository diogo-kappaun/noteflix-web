import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md'

export function Rating({ count }) {
  return (
    <div id="rating" className="flex gap-0.5">
      {[...Array(count)].map((_, index) => (
        <MdOutlineStarPurple500 key={index} className="h-4 w-4" />
      ))}
      {[...Array(5 - count)].map((_, index) => (
        <MdOutlineStarOutline key={index + count} className="h-4 w-4" />
      ))}
    </div>
  )
}
