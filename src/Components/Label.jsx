export function Label({ title, ...props }) {
  return (
    <label {...props} className="text-sm text-zinc-100">
      {title}
    </label>
  )
}
