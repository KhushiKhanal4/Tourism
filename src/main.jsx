import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import PlacesToVisit from './components/PlacesToVisit'
import Stay from './components/Stay'
import ContactUs from './components/ContactUs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
     <Route index element={<Home />} /> 
      <Route path='PlacesToVisit' element={<PlacesToVisit/>}></Route>
      <Route path='Stay' element={<Stay />}></Route>
      <Route path='ContactUs' element={<ContactUs/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
