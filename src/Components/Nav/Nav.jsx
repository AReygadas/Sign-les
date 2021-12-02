import React,{useContext} from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
} from 'mdb-react-ui-kit';
import { DataContext } from '../../Context';
import Logo from '../../images/Logo.png'
import foto from '../../images/cjo.jpg'
import {FotoPerfil} from '../../Styles/GlobalStyles'

export default function App() {
  const contx = useContext(DataContext);

  const handleAthu=()=>{
    contx.changeAuth();
  }
  return (
    <>
      <MDBNavbar fixed='top' light bgColor='light'>
        <MDBContainer fluid  className="d-flex justify-content-center">
        <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='30'
              alt=''
              loading='lazy'

            />
            SignLess
          </MDBNavbarBrand>
          <FotoPerfil src={foto} />
          <MDBNavbarItem onClick={()=>handleAthu()}>LogOut</MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}