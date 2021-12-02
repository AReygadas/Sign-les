import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { T1, T2 } from "../Styles/GlobalStyles";
import { CardItem } from "../Components/Items/CardItem";
import {Chart} from '../Components/chart/Charts'

export const Home=()=>{
    return(
    <>
        <T1>Sign Less</T1>
        <T2>Web App</T2>
        <MDBRow>
            <MDBCol size="3">
                <CardItem val={87} color={"#13CC1C"} text={"Espacio Disponible"} />
            <CardItem val={7} color={"#0986AA"} text={"Doc. Firmados"} />            
            </MDBCol>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="4">
                <Chart />
            </MDBCol>
        </MDBRow>
        <MDBRow>            
        </MDBRow>
    </>
    )
}