import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'

import './App.css'
import Wrapper from './layouts/Wrapper'
import LandingPage from './Pages/LandingPage'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Wrapper></Wrapper>}>
      <Route index element={<LandingPage></LandingPage>}></Route>
    </Route>
  )
)
function App() {

  return (

        <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App
