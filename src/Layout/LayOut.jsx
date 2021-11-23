import React from "react";
import Nav from '../Components/Nav/Nav'
import { Side } from "../Components/SideBar/Side";
import {MDBCol, MDBRow} from 'mdb-react-ui-kit'

function LayOut(props){

    return(
       <MDBRow>
         <MDBRow>
            <Nav />
         </MDBRow>
         <MDBRow>
            <MDBCol size="3">
               <Side />  
            </MDBCol>
            <MDBCol size="9">
               {props.children}
            </MDBCol>
         </MDBRow>
       </MDBRow>
    )
}

export default LayOut
