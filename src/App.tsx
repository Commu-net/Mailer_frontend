import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'

import './App.css'
import Wrapper from './layouts/Wrapper'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Wrapper></Wrapper>}>
      <Route path='hud' element={<div>Helloworl d</div>}></Route> 
    </Route>
  )
)
function App() {

  return (

        <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App
