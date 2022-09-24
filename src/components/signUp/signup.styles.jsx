

import styled from "styled-components";


export const FormContent  = styled.div`
 margin-top: 100px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;

 input{
    height: 20px;
    width: 400px;
    padding: 5px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid rgb(211,211,211);
    &:focus {
        outline: none;
       
    }
 }

 

`