import './App.css'
import Main from './Pages/Main'
import Show from './Pages/Show'
import { Device } from './Context/Device'
import { useState } from 'react'
import Hat from './Components/Hat-Basement/Hat'
import Basement from './Components/Hat-Basement/Basement'

function App() {

  const [nameDevice, setNameDevice] = useState('')
  const [addressDevice, setAddressDevice] = useState('')
  const [switches7, setSwitches7] = useState('')
  const [switches8, setSwitches8] = useState('')

  return (
    <>
      <div className='app'>
        <Hat/>
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
        <Basement/>
      </div>
    </>
  )
}

export default App
