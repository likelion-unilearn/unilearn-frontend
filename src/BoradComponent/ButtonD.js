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


function ButtonD({ content }) {
    return (
      <div>
        <ButtonDiv>
          <ButtonText>운영체제 너무 어렵다.</ButtonText>
          <TitleLineA></TitleLineA>
        </ButtonDiv>
        <ButtonDiv>
          <ButtonText>이거 과제 푼 사람들 어떤식으로 풀었어??알려주면 좋을 것 같은데</ButtonText>
          <TitleLineA></TitleLineA>
        </ButtonDiv>
        <ButtonDiv>
          <ButtonText>운영체제 5주차 때 교수님이 내주신 과제에서 이 부분 참고할까?</ButtonText>
          <TitleLineA></TitleLineA>
        </ButtonDiv>
      </div>
    );
  }
  
  export default ButtonD;
  