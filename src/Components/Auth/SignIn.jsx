import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit'

export const SignIn=()=>{

    return(
    <MDBContainer>    
        <MDBRow >
            <MDBInput label='Usuario' id='fUser' type='text'/>
        <br/><br/><br/><br/>
            <MDBInput label='Contraseña' id='fPass' type='password' />
        </MDBRow>
    </MDBContainer>
    )

}