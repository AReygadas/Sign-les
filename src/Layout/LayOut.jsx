import React from "react";
import Nav from '../Components/Nav/Nav'
import { Side } from "../Components/SideBar/Side";
import {MDBCol, MDBContainer, MDBRow} from 'mdb-react-ui-kit'

function LayOut(props){

    return(
      <> 
         <MDBRow>
            <Nav />
         </MDBRow>
         <MDBRow>
            <MDBCol size="2">
               <Side />  
            </MDBCol>
            <MDBCol size="10">
               {props.children}
            </MDBCol>
         </MDBRow>
      </>
    )
}

export default LayOut
