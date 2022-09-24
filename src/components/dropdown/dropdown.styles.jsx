import styled from "styled-components";


// export const Select = styled.select`
//     margin-right: 20px;
//     border: none;
//     height: 35px;
//     width: 200px;
//     font-size: 18px;
//     border-radius: 3px;
//     font-weight: 200;



// `

// export const Option  = styled.option`
//     height: 35px;
//     width: 100px;
//     border: none;
//     font-size: 15px;
//     margin-right: 20px;


// `


export const DropdownContainer = styled.div`
margin-top: 10px;
 margin-right: 30px;
 
 display: flex;
 flex-direction: column;
 align-items: center;
 border: 1px solid rgb(221, 221, 221);
 border-radius: 5px;




`

export const FilterSelect = styled.div`
    padding: 5px;
    font-size: 20px;
    user-select: none;
    cursor: pointer;
    text-align: justify;
    height: 30px;
    width: 200px;
    color: rgb(51, 51, 51);
    display:flex;
    justify-content: space-between;
    margin-top:5px;
    
   

`

export const ContentContainer  = styled.div`
    user-select: none;
    position: absolute;
    margin-left:-100px;
    height: 150px;
    width: 200px;
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(244,244,244);
    border-radius: 5px;
    
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 12%), 0 2px 2px 0 rgb(0 0 0 / 24%);
    


    span{
        
        margin-top: 10px;
        color:black ;
        height: 40px;
        font-size: 18px;
        text-align: center;
        width: 100%;
        &:hover{
            background-color:gray;
            color: white;
            
        }
    }
    
`