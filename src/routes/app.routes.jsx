import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';

import { Home } from '../pages/Home';

import { Movie } from '../pages/Movie';

import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/movie/:id' element={<Movie />} />
    </Routes>
  )
}
