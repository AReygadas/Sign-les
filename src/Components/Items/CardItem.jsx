import React from "react";
import { Card, Icon, Texto } from "./Styles";

export const CardItem=(props)=>{

    return(
        <Card>
            <Icon />
            <Texto>props.txt</Texto>
        </Card>
    )
}