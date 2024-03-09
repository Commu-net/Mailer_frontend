import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector} from 'react-redux'

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isLogggednIn = useSelector((state: any) => state.auth.isLogggednIn)
  return (isLogggednIn ? children : (<Navigate to="/login" />))  
}
