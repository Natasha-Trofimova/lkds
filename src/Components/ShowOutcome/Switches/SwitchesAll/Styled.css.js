import styled from "styled-components"



const css = {
  SliderOn: styled.p`
  height: 50%;
  color: #000000;
  background-color: #cdc8c8;
  border: solid black 2px;
  margin: 0;
  padding: 4px;
  flex-direction: column;
  display: flex;
`,
  SliderOff: styled.p`
height: 50%;
color: #000000;
background-color: #cdc8c8;
border: solid black 2px;
  margin: 0;
  padding: 4px;
  flex-direction: column;
display: flex;
justify-content: flex-end;
`,
  Slider: styled.p`
  color: #000000;
  background-color: white;
display: flex;
border: solid black 2px;
margin: 0;
padding: 4px;
`,
Cell: styled.p`
display: flex;
border: solid black 2px;
margin: 0;
padding: 2px;
min-width: 6%;
justify-content: center;
`,
}
export default css
