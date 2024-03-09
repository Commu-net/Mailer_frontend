import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { RootState } from '../redux/store'

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isLogggednIn = useSelector((state: RootState) => state.authorization.isLoggedIn)
  // const isLogggednIn = true

  return (isLogggednIn ? children : (<Navigate to="/login" />))  
}
