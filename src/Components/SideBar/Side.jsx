import React,{useContext} from "react";
import { DataContext } from "../../Context";
import { MDBIcon } from 'mdb-react-ui-kit';
import {SbBg, Cristal, Titulo} from '../../Styles/GlobalStyles'
export const Side=()=>{

    const theme = useContext(DataContext);

    return(
        <SbBg>
            <Cristal>
            <MDBIcon fas icon="bars" />

                <Titulo>dasdas</Titulo>
            </Cristal>
        </SbBg>
    )
}