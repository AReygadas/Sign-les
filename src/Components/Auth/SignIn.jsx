import React,{useContext} from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { DataContext } from '../../Context'
import { LabelSign2 } from '../../Styles/GlobalStyles'

export const SignIn=()=>{

    const context = useContext(DataContext)

    const handleAtuh=()=>{
        console.log(context.Auth)
        context.changeAuth();
    }
    return(

    <MDBContainer>    
        <MDBRow >
            <LabelSign2>Sign In</LabelSign2>
              <MDBRow className="d-flex justify-content-center">
            <MDBCol size='9' >
              <MDBInput label='Usuario' id='fUser' type='text'/>
              <br />
                <MDBInput label='Contraseña' id='fPass' type='password' />
            </MDBCol>
            </MDBRow>
            </MDBRow>
            <br/>
            <MDBRow>              

            <MDBCol size="12" className="text-center" >
                <MDBBtn onClick={()=>handleAtuh()} >LogIn</MDBBtn>
               
            </MDBCol>
            
        </MDBRow>
    </MDBContainer>
    
    )
}