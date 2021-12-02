import React,{useContext} from "react";
import {DataContext} from '../../Context';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Box, IList } from "../../Styles/GlobalStyles";
import ChartsPage from '../chart/Charts';

export const ItemSb =(props)=>{

    const sb=useContext(DataContext)

    return(
       <Box>
            <IList><h4><MDBIcon fas icon={props.icon} /></h4></IList>
            { sb.SideB && <h4> {props.name} </h4> }        
         
       </Box>
   )
}