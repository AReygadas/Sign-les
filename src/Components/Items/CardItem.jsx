import React from "react";
import { Card, Val, Txt,Barra } from "./Styles";

export const CardItem=(props)=>{

    return( 
        
        <Card >
            <Val col={props.color}>{props.val}%</Val>
            <Txt>{props.text}</Txt>           
            <Barra col={props.color} por={props.val}></Barra>
        </Card>
    )
}