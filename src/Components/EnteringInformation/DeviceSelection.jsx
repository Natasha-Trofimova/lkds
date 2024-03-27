import { useState } from "react"
import { useContext } from "react"
import { Device } from "../../Context/Device"

const devices = [
  {
    id: 0,
    name: 'Устройства',
  },
  {
    id: 1,
    name: 'ModBUS',
  },
  {
    id: 2,
    name: 'АПУ-1 ОЕМ',
  },
  {
    id: 3,
    name: 'АЗО-1',
  },
  {
    id: 4,
    name: 'АТУ8х2',
  },
  {
    id: 5,
    name: 'АСК-16',
  },
  {
    id: 6,
    name: 'АПИ-1',
  },
  {
    id: 7,
    name: 'АЛИ-2',
  },
  {
    id: 8,
    name: 'АРВ8х6',
  },
  {
    id: 9,
    name: 'АТС4х4',
  },
  {
    id: 10,
    name: 'АПУ-2Н',
  },
  {
    id: 11,
    name: 'ПКД 2х2',
  },
  {
    id: 12,
    name: 'ПКД 2х16',
  }
]

import css from './Styled.css'

const { DeviceSelectionCSS, DeviceSelectionS} = css

function DeviceSelection() {

  const [tType] = useState()
  // context
  const { toggleName } = useContext(Device)



  return (
    <>
      <DeviceSelectionCSS>
        <>Выберите устройство</>
        <DeviceSelectionS
          value={tType}
          onChange={event => {
            toggleName(event.target.value)
          }}
        >
          {
            devices.map((dev, ) => (
              <option
                key={dev.id}
                value={dev.name}
              >
                {dev.name}
              </option>
            ))
          }
        </DeviceSelectionS>
      </DeviceSelectionCSS>
    </>
  )
}

export default DeviceSelection