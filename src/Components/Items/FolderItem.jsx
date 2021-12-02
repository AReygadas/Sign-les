import React from "react";
import f1 from '../../images/f1.png'
import  {Folder,Con1} from '../../Styles/GlobalStyles'

export const FolderItem=(props)=>{

    return(
        <Con1>
            <Folder src={f1} alt="" />
            <h5>{props.desc}</h5>
        </Con1>
    )
}