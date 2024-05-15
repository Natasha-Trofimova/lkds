import './App.css'
import Main from './Pages/Main'
import Show from './Pages/Show'
import { Device } from './Context/Device'
import { useState } from 'react'
import Footer from './Components/Header-Footer/Footer'
import Header from './Components/Header-Footer/Header'

function App() {

  const [nameDevice, setNameDevice] = useState('')
  const [addressDevice, setAddressDevice] = useState('')
  const [switches7, setSwitches7] = useState('')
  const [switches8, setSwitches8] = useState('')

  return (
    <>
      <div className='app'>
        <Header/>
        <Device.Provider
          value={{
            nameDevice,
            toggleName: setNameDevice,
            addressDevice,
            toggleAddress: setAddressDevice,
            switches7,
            toggleSwitches7: setSwitches7,
            switches8,
            toggleSwitches8: setSwitches8
          }}
        >
          <div className='pag'>
            <Main />
            <Show />
          </div>
        </Device.Provider>
        <Footer/>
      </div>
    </>
  )
}

export default App
