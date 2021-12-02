import styled,{keyframes} from "styled-components";


export const Card=styled.div`
margin: 20px;
    height: 130px;
    width: 280px;
    padding:20px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.64); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.64);
    
    `;
export const Val=styled.div`
    color:${props=>props.col};
    font-size: 2rem;
    font-weight: 800;
    display: flex;
`;
export const Barra=styled.div`
     background: #333;
    border-radius: 13px;
    height: 15px;
    width: 80%;
    padding: 3px;
    &:after {
    content: '';
    display: block;
    background:${props=>props.col};
    width: ${props=>props.por}%;
    height: 100%;
    border-radius: 9px;
    }
`;

export const Txt=styled.div`

`;