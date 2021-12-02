import React from "react";
import { T1,T2 } from "../Styles/GlobalStyles";
import {
    MDBInputGroup,
    MDBInputGroupText,
    MDBInputGroupElement,
    MDBIcon,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import {Tree,Folder} from '../Styles/GlobalStyles';
import {FolderItem} from '../Components/Items/FolderItem'
export const MyFiles = () =>{
    
    return(
        <>
        <T1>My Files</T1>
        <T2>& Documents</T2>

        <MDBRow>
            <MDBCol size="3">

                <MDBInputGroup className='mb-3'>
                <MDBInputGroupText noBorder>
                  <MDBIcon fas icon='search' />
                </MDBInputGroupText>
                <MDBInputGroupElement type='text' placeholder='Search' />
                </MDBInputGroup>



            </MDBCol>
            <MDBCol size="2">
           <h5> <i class="fas fa-chevron-circle-right"></i>Advance</h5>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size="3">
                <Tree>
                   <FolderItem fol={"f1"} desc={"Documents PDFs"} />
                   <FolderItem fol={"f1"} desc={"Sin Clasificar"} />
               
                  <br />                              
                </Tree>
            </MDBCol>


            <MDBCol size="9">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </div>
      </th>
      <th scope="col">Nombre</th>
      <th scope="col">Fecha</th>
      <th scope="col">Ubicacion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </div>
      </th>
      <td>Sit.pdf</td>
      <td>12/09/21  12:51 pm</td>
      <td>Documentos PDF</td>
    </tr>
    <tr>
      <th scope="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </div>
      </th>
      <td>Adipisicing</td>
      <td>09/09/21 8:55 am</td>
      <td>Sin Clasificar</td>
    </tr>
    <tr>
      <th scope="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </div>
      </th>
      <td>Hic</td>
      <td>01/12/21 17:40:55</td>
      <td>Sin Clasifica</td>
    </tr>
  </tbody>
</table>
                
            </MDBCol>

        </MDBRow>
        </>
    )
}