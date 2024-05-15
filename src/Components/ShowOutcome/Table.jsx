import { useContext } from "react"
import { Device } from "../../Context/Device"
import TableLineALI2 from "./Switches/ALI2/TableLine"
import TableLineModBUS from "./Switches/ModBUS/TableLine"
import TableLineAPY1OEM from "./Switches/SwitchesAPY1OEM/TableLine"
import TableLineApy2n from "./Switches/APY2N/TableLine"
import TableLineAzo1 from "./Switches/AZO1/TableLine"
import TableLinePKD2x16 from "./Switches/PKD2x16/TableLine"
import TableLinePKD2x2 from "./Switches/PKD2x2/TableLine"
import TableLineATY8x2 from "./Switches/ATY8x2/TableLineATY8x2"
import TableLineACK16 from "./Switches/ACK16/TableLineACK16"
import TableLineAPI1 from "./Switches/API1/TableLineAPI1"
import TableLineARV86 from "./Switches/ARV86/TableLineARV86"
import TableLineATC44 from "./Switches/ATC44/TableLineATC44"


function Table() {

  const { nameDevice } = useContext(Device)

  return (
    <>
        {nameDevice === 'АПУ-2Н' && <TableLineApy2n/>}
        {nameDevice === 'АЗО-1' && <TableLineAzo1 />}
        {nameDevice === 'АПУ-1 ОЕМ' && <TableLineAPY1OEM />}
        {nameDevice === 'АЛИ-2' && <TableLineALI2 />}
        {nameDevice === 'ПКД 2х2' && <TableLinePKD2x2 />}
        {nameDevice === 'ПКД 2х16' && <TableLinePKD2x16 />}
        {nameDevice === 'ModBUS' && <TableLineModBUS />}
        {nameDevice === 'АТУ8х2' && <><TableLineATY8x2 /></>}
        {nameDevice === 'АСК-16' && <> <TableLineACK16 /></>}
        {nameDevice === 'АПИ-1' && <><TableLineAPI1 /></>}
        {nameDevice === 'АРВ8х6' && <><TableLineARV86 /></>}
        {nameDevice === 'АТС4х4' && <><TableLineATC44 /></>}
    </>
  )
}

export default Table 