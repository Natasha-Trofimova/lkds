import { useContext } from "react";
import { Device } from "../Context/Device";
import Table from "../Components/ShowOutcome/Table";
import css from "./Styled.css";

const { ShowCss } = css;

function Show() {
  const { nameDevice } = useContext(Device);
  const { addressDevice } = useContext(Device);

  return (
    <>
    {/* добавить дизайн строчке */}
      {nameDevice == "" && <>Выберите устройство для отображения DIP-переключателей</>}
      {nameDevice === "Устройства" && <>Выберите устройство для отображения DIP-переключателей</>}

      {nameDevice !== "" && nameDevice !== "Устройства" && (
        <ShowCss>
          Положение переключателей для
          <br />
          Устройства: {nameDevice}
          <br />
          Адресса: {addressDevice}
          <Table />
        </ShowCss>
      )}
    </>
  );
}

export default Show;