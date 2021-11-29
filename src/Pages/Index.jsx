import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit'
import { SignIn } from '../Components/Auth/SignIn'
import {Lg,Dsp,Vid,Logot} from '../Styles/GlobalStyles'
import Log from '../images/Logo.png'
export const Index =()=>{

    return(
        <>
            <Lg>
                <SignIn />
            </Lg>
            <Dsp>

                <Vid loop autoPlay muted>
                    <source src='https://mdbootstrap.com/img/video/Lines.mp4' type="video/mp4" />
                </Vid>
                <Logot src={Log} />
               <h1>Sign-les</h1>
            </Dsp>
        </>
    )
}