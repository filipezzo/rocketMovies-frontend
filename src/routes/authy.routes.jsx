import { Routes, Route } from 'react-router-dom';

import { Signin } from '../pages/Signin';

import { SignUp } from '../pages/SignUp';



export function AuthyRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/register' element={<SignUp />} />

    </Routes>
  )
}
