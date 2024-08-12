
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <div>
      <UserContextProvider>
      <h1 className='p-11 pb-8'> learnt contextprovider</h1>
      <Login />
      <Profile />
      </UserContextProvider>
    <h2 className='pt-9'> Above username in welcome message is shown using contextprovider</h2>
    </div>
  )
}

export default App