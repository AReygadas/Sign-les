import React,{useContext} from "react";
import {DataContext} from '../../Context';
import { MDBIcon } from 'mdb-react-ui-kit';

export const ItemSb =(props)=>{

    const sb=useContext(DataContext)
    
    return(
        <>
            <MDBIcon fas icon="bars" />
            { sb.SideB && <h3>{props.name}</h3> }
        </>
    )
}