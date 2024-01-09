import './App.css'

import { Navbar } from '@/components'
import UnauthenticatedView from './components/layout/unauthenticated';
import AuthenticatedView from './components/layout/authenticated';

import { useAuth } from '@/util/auth/context';

function App() {
  
  const { authenticated } = useAuth()

  
  return (
    <>
      <Navbar />

      {
        !authenticated ? (
          <UnauthenticatedView />
        ) : (
          <AuthenticatedView />
        )
      }
      
    </>
  )
}

export default App
