import React,{useContext} from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { DataContext } from '../../Context'

export const SignIn=()=>{

    const context = useContext(DataContext)

    const handleAtuh=()=>{
        console.log(context.Auth)
        context.changeAuth();
    }
    return(

    <MDBContainer>    
        <MDBRow >
            <MDBCol size='10'>
            <MDBInput label='Usuario' id='fUser' type='text'/>
            <br />
            <MDBInput label='Contraseña' id='fPass' type='password' />
            </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>              

            <MDBCol size="6" >
                <MDBBtn onClick={()=>handleAtuh()} >LogIn</MDBBtn>
            </MDBCol>
            
        </MDBRow>
    </MDBContainer>
    
    )
}