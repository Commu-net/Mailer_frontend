import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children, isLogggednIn }: { children: React.ReactNode, isLogggednIn: boolean }) {
  return (isLogggednIn ? children : (<Navigate to="/login" />))
}
