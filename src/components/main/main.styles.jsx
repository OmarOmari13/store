import styled from "styled-components";
import { Link } from "react-router-dom";
export const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items:center;

 height: 60%;
 position: relative;

 margin-top: 100px;
 padding-top: 50px;
 h1{
    font-weight: 300;
    font-size: 40px;

 }
 p{
   font-weight: 300;
    font-size: 20px;
 }

`

export const ButtonLink = styled(Link)`
 
 font-weight: 100;
 font-size: 20px;
 text-decoration: none;
 cursor: pointer;
 color: white;
 background-color: red;
`

export const Paragraph= styled.div`

`