import Switches1R from "./Sw/Switches1R";
import Switches2R from "./Sw/Switches2R";
import Switches3R from "./Sw/Switches3R";
import Switches4R from "./Sw/Switches4R";
import Switches5R from "./Sw/Switches5R";
import Switches6 from "./Sw/Switches6";
import Switches7 from "./Sw/Switches7";
import Switches8 from "./Sw/Switches8";

import css from "../../Styled.css";
const { TableVerticallyCSS, DlineCSS2, CellVerticalytxt, CellVerticaly, DlineCSS1} = css;

import { useContext } from "react";
import { Device } from "../../../../Context/Device";

function TableLineAPY1OEM() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      <TableVerticallyCSS>
      {addressDevice === "" && <CellVerticalytxt>Aдрес для данного устройства не выбран</CellVerticalytxt>}
      {addressDevice < 188 &&  addressDevice !== "" &&<CellVerticalytxt>Aдрес для данного устройства не выбран</CellVerticalytxt>}
      {addressDevice > 251 && <CellVerticalytxt>Aдрес для данного устройства не выбран</CellVerticalytxt>}
      {addressDevice !== "" && addressDevice >= 188 &&addressDevice <= 251 &&
        (<>
          <DlineCSS1>
          <CellVerticaly>A0</CellVerticaly>
          <CellVerticaly>A1</CellVerticaly>
          <CellVerticaly>A2</CellVerticaly>
          <CellVerticaly>A3</CellVerticaly>
          <CellVerticaly>A4</CellVerticaly>
          <CellVerticaly>A5</CellVerticaly>
          <CellVerticaly>A6</CellVerticaly>
          <CellVerticaly>R-CAN</CellVerticaly>
        </DlineCSS1>
          <DlineCSS2>
          <Switches1R/>
          <Switches2R/>
          <Switches3R/>
          <Switches4R/>
          <Switches5R/>
          <Switches6 />
          <Switches7 />
          <Switches8 />
        </DlineCSS2>
          </>)}
      </TableVerticallyCSS>
    </>
  );
}

export default TableLineAPY1OEM;
