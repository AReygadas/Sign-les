import React,{useContext} from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
} from 'mdb-react-ui-kit';
import { DataContext } from '../../Context';

export default function App() {
  const contx = useContext(DataContext);

  const handleAthu=()=>{
    contx.changeAuth();
  }
  return (
    <>
      <MDBNavbar fixed='top' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Fixed top</MDBNavbarBrand>
          <MDBNavbarItem onClick={()=>handleAthu()}>LogOut</MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}