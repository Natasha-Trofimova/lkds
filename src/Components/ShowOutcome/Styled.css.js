import styled from "styled-components"

const css = {
  DlineCSS: styled.div`
  margin: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: solid black 2px;
`,
DlineCSS2: styled.div`
height: 50%;
border: solid black 2px;
margin: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`,
Cell: styled.p`
display: flex;
border: solid black 2px;
margin: 0;
padding: 2px;
min-width: 6%;
justify-content: center;
`,

TableCSS: styled.div`
height: 50%;
width: 100%;
display: flex;
border: solid black 2px;
flex-direction: column;
`,
// вертикальное положение
TableVerticallyCSS: styled.div`
transform: rotate(90deg);
height: 66%;
width: 61%;
display: flex;
border: solid black 2px;
flex-direction: column;
justify-content: center;
`,
CellVertically: styled.p`
transform: rotate(-90deg);
display: flex;
margin: 0;
padding: 2px;
width: 58%;
justify-content: center;
`,
CellVertically2: styled.p`
display: flex;
transform: rotate(-90deg);
margin: 0;
`,
// дизайн для вертикадьных переключателей
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
}
export default css
