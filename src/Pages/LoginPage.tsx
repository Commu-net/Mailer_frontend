
import './css/LoginPage.css'
import { GoogleLogin } from '@react-oauth/google'
import {login, logout} from '../redux/slices/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  // added for testing purpose
  const isLogged = useSelector((state: any) => state.authorization.isLoggedIn);

  {/*  doing mannualy for testing purpose */}
  {/* <GoogleLogin onSuccess={()=>{
    console.log("success")
  }}
  onError={()=>{
    console.log("error")
  }}></GoogleLogin> */}
  
  return (
    <div className='login h-[1000px] w-[1304px]'>
     
      <button onClick={()=>{
        dispatch(login())
        navigate('/dashboard')
      }}> Log in </button>
       
    </div> 
  )
}
