import React,{useContext} from "react";
import { DataContext } from "../../Context";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
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
                <h3 onClick={()=>handleClick()}><MDBIcon fas icon="bars" /></h3>
                <Link to='/'><ItemSb name={"DashBoard"} icon={"chart-line"} /></Link>
                <Link to='/MyFile'><ItemSb name={"My FIles"} icon={"folder-open"} /></Link>
                <Link to='/Docs'><ItemSb name={"Sign Doc"} icon={"pen-nib"} /></Link>
                <Link to='/Settings'><ItemSb name={"Settings"} icon={"cogs"} /></Link>
            </Cristal>
        </SbBg>
    )
}