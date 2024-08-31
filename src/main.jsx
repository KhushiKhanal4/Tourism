import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import PlacesToVisit from './components/PlacesToVisit'
import Weather, { weatherInfoLoader } from './components/Weather'
import ContactUs from './components/ContactUs'
import Location from './components/Location'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
     <Route path='' element={<Home />} /> 
      <Route path='PlacesToVisit' element={<PlacesToVisit/>}></Route>
      <Route 
      loader={weatherInfoLoader}
      path='Weather' 
      element={<Weather />}
      ></Route>
      <Route path='ContactUs' element={<ContactUs/>}></Route>
      <Route path='location/:locationid' element={<Location/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
