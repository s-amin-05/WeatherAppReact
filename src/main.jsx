import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import News from './components/News.jsx'
import Forecast from './components/Forecast.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Forecast' element={<Forecast/>}/>
      <Route path='News' element={<News/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
