import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Pages/Root/Root'
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'project/:id',
    element: <ProjectDetail />
  },
],
  { basename: '/Portfolio/' }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
