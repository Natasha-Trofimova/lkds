import styled from "styled-components"

const css = {
TableCSS1: styled.div`
margin: 10px;
height: 60%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`,
TableCSS: styled.div`
margin: 10px;
height: 90%;
width: 100%;
display: flex;
border: solid black 2px;
flex-direction: column;
background-color: #43434363;
`,
// вертикальное положение
TableVerticallyCSS: styled.div`
margin: 10px;
transform: rotate(90deg);
height: 66%;
width: 61%;
display: flex;
border: solid black 2px;
flex-direction: column;
justify-content: center;
background-color: #43434363;
`,
DlineCSS1: styled.div`
height: 20%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`,
DlineCSS2: styled.div`
height: 72%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`,
Cell: styled.p`
display: flex;
margin: 0;
min-width: 6%;
justify-content: center;
`,
Celltxt: styled.p`
display: flex;
margin: 0;
padding: 2px;
min-width: 6%;
justify-content: center;
`,
CellVerticaly: styled.p`
display: flex;
margin: 0;
width: 6%;
justify-content: center;
  transform: rotate(270deg);
`,
CellVerticalytxt: styled.p`
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
width: 5%;
height: 90%;
color: #000000;
background-color: #cdc8c8;
border: solid black 2px;
margin: 0;
padding: 4px;
flex-direction: column;
display: flex;
`,
SliderOff: styled.p`
width: 5%;
height: 90%;
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
border: solid black 2px;
margin: 0;
padding: 4px;
display: flex;
align-items: center;
justify-content: center;
`,
SliderV: styled.p`
min-width: 10px;
transform: rotate(-90deg);
color: #000000;
background-color: white;
border: solid black 2px;
margin: 0;
display: flex;
align-items: center;
justify-content: center;
`
}
export default css
