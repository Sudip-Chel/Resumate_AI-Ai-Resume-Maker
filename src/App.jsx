import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/custom/Header.jsx'
import { Outlet , Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [count, setCount] = useState(0)
  const {user , isLoaded , isSignedIn} = useUser();

  if (!isSignedIn && isLoaded) {
  return <Navigate to="/sign-in" replace />;
}

  return (
    <>
      <Header/>
      <Outlet/>
      <Toaster/>
    </>
  )
}

export default App

