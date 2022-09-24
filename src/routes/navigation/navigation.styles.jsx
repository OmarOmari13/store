import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegHeart, FaUserCircle} from 'react-icons/fa';
import { CgShoppingBag} from 'react-icons/cg';
import { TbTriangle} from 'react-icons/tb';
export const NavigationContainer = styled.div`
    height: 100vh;
    position: relative;
`

export const Navigator = styled.div`
height: 12%;

display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;


`

export const LogoContainer = styled.div`
margin-left:30px;
 
`


export const NavLinkContainer = styled.div`
margin-right: 40px;
width: 15%;


display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Heart = styled(FaRegHeart)`
  
  color: black; 
  font-size: 30px;

`
export const AddTOCart = styled(CgShoppingBag)`
  color: black; 
  font-size: 30px;

`
export const User = styled(FaUserCircle)`
  color: black; 
  font-size: 30px;

`
export const Logo = styled(TbTriangle)`
margin-top: 50px;
color: white;
font-size: '20px';
background-color: blue;
border-radius:5px;
width:25px;
height: 25px;
padding:8px;


    
    -webkit-text-decoration: none;
    text-decoration: none;
    
    border: none;
    
    background: linear-gradient(to right,rgb(142,45,226),rgb(74,0,224));
    color: white;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;

`

export const LogoText = styled.p`

margin-top: 0;
font-weight: 300;
font-size: 15px;
`

// const fontStyles = {color: 'black', fontSize: '30px'};
//     const logofontStyles = {color: 'white', fontSize: '20px', backgroundColor: 'blue',borderRadius:'5px', width:'40px', height: '30px', padding:"5px"};