import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'


import About from './components/About.jsx'

import ProjectSection from './components/ProjectSection.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <About/>
      },
      {
        path: '/projects',
        element: <ProjectSection/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/resume',
        element: <Resume/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
