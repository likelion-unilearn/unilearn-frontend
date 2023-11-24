import React from "react";
import styled from 'styled-components';

const ButtonDiv=styled.div`
display: absolute;
padding: 14px 10px;
width: 270px;
height: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const TitleLineA=styled.div`
position: absolute;
width: 93%;
height: 0px;
border: 1px solid #DDDDDD;
`
const ButtonText=styled.div`
display: flex;
padding: 7px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 20px;
color: #C4C4C4;
`


function ButtonE({ content }) {
    return (
      <div>
        <ButtonDiv>
          <ButtonText>{content}</ButtonText>
          <TitleLineA></TitleLineA>
        </ButtonDiv>
      </div>
    );
  }
  
  export default ButtonE;
  