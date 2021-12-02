import React,{useContext} from "react";
import {DataContext} from '../../Context';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Box, IList } from "../../Styles/GlobalStyles";
export const ItemSb =(props)=>{

    const sb=useContext(DataContext)

    return(
       <Box>
            <IList><MDBIcon fas icon="bars" /></IList>
            { sb.SideB && <h4> {props.name} </h4> }
        
         <br/>
         <br/>
         <br/>
       </Box>
   )
}