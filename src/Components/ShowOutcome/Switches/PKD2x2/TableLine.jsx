import css from "../../Styled.css";
import Switches1 from "../SwitchesAll/Switches1";
import Switches2 from "./Switches2";
import Switches3 from "./Switches3";
import Switches4 from "./Switches4";
import Switches5 from "./Switches5";
import Switches6 from "./Switches6";
import Switches7 from "./Switches7";
import Switches8 from "./Switches8";

import { useContext } from "react";
import { Device } from "../../../../Context/Device";

const { TableCSS, DlineCSS2, Cell } = css;

function TableLinePKD2x2() {
  const { addressDevice } = useContext(Device);

  return (
    <>
      <TableCSS>
        <DlineCSS2>
          <Cell>0</Cell>
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
          <Cell>Т</Cell>
          <Cell>М</Cell>
        </DlineCSS2>
        {addressDevice === "" && (
          <Cell>адрес для данного устройства не выбран</Cell>
        )}
        {addressDevice < 64 && addressDevice !== "" && (
          <Cell>адрес для данного устройства не выбран</Cell>
        )}
        {addressDevice > 127 && (
          <Cell>адрес для данного устройства не выбран</Cell>
        )}
        {addressDevice !== "" &&
          addressDevice >= 64 &&
          addressDevice <= 127 && (
            <DlineCSS2>
              <Switches1 />
              <Switches2 />
              <Switches3 />
              <Switches4 />
              <Switches5 />
              <Switches6 />
              <Switches7 />
              <Switches8 />
            </DlineCSS2>
          )}
      </TableCSS>
    </>
  );
}

export default TableLinePKD2x2;
