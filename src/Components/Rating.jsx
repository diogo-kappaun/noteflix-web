import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md'

export function Rating() {
  return (
    <div id="rating" className="flex gap-0.5">
      <MdOutlineStarPurple500 className="h-4 w-4" />
      <MdOutlineStarPurple500 className="h-4 w-4" />
      <MdOutlineStarPurple500 className="h-4 w-4" />
      <MdOutlineStarPurple500 className="h-4 w-4" />
      <MdOutlineStarOutline className="h-4 w-4" />
    </div>
  )
}
