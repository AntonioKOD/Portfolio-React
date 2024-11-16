import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='flex flex-col min-h-screen'>
     <main className='flex-grow'>
      <Header/>

      <Outlet/>
      </main>

      <Footer/>
      </div>
    </>
  )
}

export default App
