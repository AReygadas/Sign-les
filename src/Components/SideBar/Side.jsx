import React,{useContext} from "react";
import { DataContext } from "../../Context";
import { MDBIcon } from 'mdb-react-ui-kit';
import {SbBg, Cristal, Titulo} from '../../Styles/GlobalStyles'
import { ItemSb } from "../Items/SideBarItem";


export const Side=()=>{
    const ctxt = useContext(DataContext);

    const handleClick=()=>{
        ctxt.changeSideB()
    }

    return(
        <SbBg>
            <Cristal>
            <h1 onClick={()=>handleClick()}><MDBIcon fas icon="bars"  /></h1>
                <ItemSb name={"DashBoard"} />
                <Titulo>dasdas</Titulo>
            </Cristal>
        </SbBg>
    )
}