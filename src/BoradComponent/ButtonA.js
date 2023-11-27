import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonDiv=styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 24px;
gap: 8px;
`
const ButtonText=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 203px;
height: 50%;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 20px;
color: rgba(15, 22, 30, 0.7);
`
const PostButton=styled.button`
width: 107px;
height: 36px;
background: #FFE2E2;
border: 2px solid white;
border-radius: 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.024em;
`;

function ButtonA({ subjectName, professorName }) {
  const navigate = useNavigate();
  return (
    <div>
      {/* <ButtonDiv>
        <ButtonText>{subjectName}-{professorName}</ButtonText>
        <PostButton>게시판</PostButton>
      </ButtonDiv> */}
      <ButtonDiv>
        <ButtonText>운영체제-유니런 교수님</ButtonText>
        <PostButton  onClick={()=>{navigate("/ClassBoard")}}>게시판</PostButton>
      </ButtonDiv>
      <ButtonDiv>
        <ButtonText>C++프로그래밍-유니런 교수님</ButtonText>
        <PostButton onClick={()=>{navigate("/ClassBoard")}}>게시판</PostButton>
      </ButtonDiv>
    </div>
  );
}
  
  export default ButtonA;
  