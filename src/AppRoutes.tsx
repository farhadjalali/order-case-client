import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageHome } from './pages/page-home/PageHome'
import { PageSignin } from './pages/page-signin/PageSignin'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="signin" element={<PageSignin />} />
      <Route path="*" element={<PageHome />} />
    </Routes>
  </BrowserRouter>
)
