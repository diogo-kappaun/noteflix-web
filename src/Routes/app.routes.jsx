import { Navigate, Route, Routes } from 'react-router-dom'

import { CreateMovie } from '../Pages/CreateMovie'
import { Home } from '../Pages/Home'
import { MoviePreview } from '../Pages/MoviePreview'
import { Profile } from '../Pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview/:id" element={<MoviePreview />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
