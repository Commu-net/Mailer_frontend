import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'

import './App.css'
import Wrapper from './layouts/Wrapper'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import ResourcePage from './Pages/ResourcesPage'
// import Dashboard from './Pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './Pages/Dashboard'
import Errorpage from './Pages/ErrorPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Wrapper></Wrapper>}>
      <Route index element={<LandingPage></LandingPage>} />
      <Route path='login' element={<LoginPage />} />
      <Route path='dashboard' element={
        <PrivateRoute  >
           <Dashboard />
         </PrivateRoute >
      } />
      <Route path='resources' element={<ResourcePage /> } />
      <Route path='*' element={<Errorpage />}></Route>
      
      </Route>
  )
)
function App() {

  return (
        <RouterProvider router={router}></RouterProvider>
  )
}

export default App
