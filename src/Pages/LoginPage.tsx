
import './css/LoginPage.css'
// import { GoogleLogin } from '@react-oauth/google'
import {login} from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { 
  // NavLink,
   useNavigate
   } from 'react-router-dom'
import { useEffect } from 'react';
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  // added for testing purpose

  {/*  doing mannualy for testing purpose */}
  {/* <GoogleLogin onSuccess={()=>{
    console.log("success")
  }}
  onError={()=>{
    console.log("error")
  }}></GoogleLogin> */}
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  

  useEffect(()=>{
    console.log("login page")
    postData('https://api.api-communet.tech/api/v1/mail/', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    });
    
  })
  return (
    <div className='login h-[1000px] w-[1304px]'>
     
      <button onClick={()=>{
        dispatch(login())
        navigate('/dashboard')
      }}
      > Log in </button>
       
    </div> 
  )
}
