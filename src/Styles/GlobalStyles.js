import React from "react";
import styled, {keyframes, ThemeProvider} from "styled-components";
import  BGD from '../images/bg03.jpg'
import  BGL from '../images/bg01.jpg'



export const Titulo = styled.h1`
  color:white;
  margin:25px;
  padding: 15px;

`;

export const SbBg = styled.div`
  background-image: url(${BGD});
  background-size: cover;
  width: 100%;
  height: 92vh;
  margin-top: 21%;
  border-radius: 0px 20px 20px 0px;
  
`;


export const Cristal=styled.div` 
  background-color: rgba(255,255,255,0.6);
  width: 100%;
  height: 92vh;
  backdrop-filter: blur(1px);

`;


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