import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import { MoviePreview } from '../Pages/MoviePreview'
import { CreateMovie } from '../Pages/CreateMovie'
import { Start } from '../Pages/Start'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview" element={<MoviePreview />} />
      <Route path="/create" element={<CreateMovie />} />
    </Routes>
  )
}
