import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from "../SwitchesAll/SwitchesVerticaly/Switches2V";
import Switches3 from "../SwitchesAll/SwitchesVerticaly/Switches3V";
import Switches4 from "../SwitchesAll/SwitchesVerticaly/Switches4V";
import Switches5 from "../SwitchesAll/SwitchesVerticaly/Switches5V";
import { useContext } from "react";
import { Device } from "../../../../Context/Device";

import css from "../../Styled.css";
const { TableVerticallyCSS, DlineCSS2, DlineCSS1, CellVerticalytxt, CellVerticaly } = css;

function TableLineATY8x2() {
  const { addressDevice } = useContext(Device);
  return (
    <>
      <TableVerticallyCSS>
      {addressDevice === "" && <CellVerticalytxt>Aдрес для данного устройства не выбран</CellVerticalytxt>}
      {addressDevice < 32 &&  addressDevice !== "" &&<CellVerticalytxt>Aдрес для данного устройства не выбран</CellVerticalytxt>}
      {addressDevice > 63 && <CellVerticalytxt>Aдрес для данного устройства не выбран</CellVerticalytxt>}
        {addressDevice !== "" && 
        addressDevice >= 32 &&
        addressDevice <= 63 &&(
          <>
        <DlineCSS1>
          <CellVerticaly>A0</CellVerticaly>
          <CellVerticaly>A1</CellVerticaly>
          <CellVerticaly>A2</CellVerticaly>
          <CellVerticaly>A3</CellVerticaly>
          <CellVerticaly>A4</CellVerticaly>
        </DlineCSS1>
        <DlineCSS2>
          <Switches1 />
          <Switches2 />
          <Switches3 />
          <Switches4 />
          <Switches5 />
        </DlineCSS2>
          </>
        )}
      </TableVerticallyCSS>
    </>
  );
}

export default TableLineATY8x2;
