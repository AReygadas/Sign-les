import React from "react";
import styled, {keyframes, ThemeProvider} from "styled-components";
import  BGD from '../images/bg2.jpg'
import  BGL from '../images/bg01.jpg'

const fadein = keyframes` 
  0% { height: 0vh; width: 25%; opacity: 0.1 }
  100% { height: 92vh; width: 100%; opacity: 1 }
 `

const rotateAnimation =keyframes`
	from {transform: rotateY(0deg);}
	to {transform: rotateY(360deg);}
`

export const Logot=styled.img`
   width: 200px;
   height: auto;
   z-index: 100;
   animation: ${rotateAnimation} 5s linear infinite;
`;

export const C1=styled.div`
  margin-top: 15%;
  margin-left: 33%;

`
export const LabelSign=styled.div`
    font-size: 4rem;
`;

 export const T1 =styled.div`
  color:rgba(0,0,0,0.5);
  font-size: 3rem;
  text-align: center;
  padding-top: 10%;
 `
  export const T2 =styled.div`
  color:rgba(0,0,0,0.5);
  font-size: 2rem;
  text-align: center;
  
 `
export const SideBar =styled.div`
  width: 20vw;
`;

export const Content =styled.div`
width: 80vw;
`;


export const Titulo = styled.h1`
  color:white;
  margin:25px;
  padding: 15px;

`;

export const SbBg = styled.div`
  animation: ${fadein} 1s  ;
  background-image: url(${BGD});
  background-size: cover;
  width: 100%;
  height: 90vh;
  margin-top: 21%;
  border-radius: 0px 20px 20px 0px;
`;


export const Cristal=styled.div`  
  background-color: rgba(255,255,255,0.4);
  width: 100%;
  height: 92vh;
  backdrop-filter: blur(1px);
  padding:5%;

`;
export const COnt=styled.div`
  position: relative;
  display: flex;
`
export const Lg = styled.div`
  background-color:rgba(0,0,0,0.8);
  width: 25vw;
  height: 100vh;
  display: flex;
  align-items: center;
  float: left;
  box-shadow: 10px 10px 10px 10px;

`
export const Dsp = styled.div`
 background: transparent;
  width: 75vw;
  height: 100vh;
  display: block;
  align-items: center;
  float: right;
`
export const Vid = styled.video`
  position: fixed;
  height:100vh;
  width: auto;
  z-index: -10;
`
//animation-name: breath-animation;
// animation-duration: 8s;
//   animation-iteration-count: infinite;



const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
  isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;



const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  
  },

  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};



const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;