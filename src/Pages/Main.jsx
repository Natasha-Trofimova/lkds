import AddressSelection from '../Components/EnteringInformation/AddressSelection'
import DeviceSelection from '../Components/EnteringInformation/DeviceSelection'

import css from './Styled.css'

const {MainCss} =css
function Main() {

  return (
    <>
      <MainCss>
        <DeviceSelection/><br />
        <AddressSelection/><br />
      </MainCss>
    </>
  )
}

export default Main