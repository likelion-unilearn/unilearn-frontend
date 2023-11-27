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
const TextDiv=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 203px;
height: 34.72px;


`
const ButtonTextA=styled.div`
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
const ButtonTextB=styled.div`
width:203px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 14px;
display: flex;
align-items: center;
letter-spacing: 0.024em;
`
const PostButton=styled.button`
width: 107px;
height: 36px;
background: #C2D6C5;
border: 2px solid white;
border-radius: 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.024em;
`;

function ButtonB({ study_name,is_offline ,study_recruited_num}) {
  const navigate = useNavigate();
  return (
    <div>
      {/* <ButtonDiv>
        <TextDiv>
          <ButtonTextA>{study_name}</ButtonTextA>
          <ButtonTextB>{is_offline},{study_recruited_num}명</ButtonTextB>
        </TextDiv>
        <PostButton>join</PostButton>
      </ButtonDiv> */}
      <ButtonDiv>
        <TextDiv>
          <ButtonTextA>sqld</ButtonTextA>
          <ButtonTextB>스터디룸 305호 ,5명</ButtonTextB>
        </TextDiv>
        <PostButton  onClick={()=>{navigate("/NoneStudyJoin")}}>join</PostButton>
      </ButtonDiv>
      <ButtonDiv>
        <TextDiv>
          <ButtonTextA>정보처리기사</ButtonTextA>
          <ButtonTextB>비대면 ,107px명</ButtonTextB>
        </TextDiv>
        <PostButton onClick={()=>{navigate("/NoneStudyJoin")}} >join</PostButton>
      </ButtonDiv>
      <ButtonDiv>
        <TextDiv>
          <ButtonTextA>취업을 위한 리액트 스터디</ButtonTextA>
          <ButtonTextB>비대면 ,100명</ButtonTextB>
        </TextDiv>
        <PostButton onClick={()=>{navigate("/NoneStudyJoin")}} >join</PostButton>
      </ButtonDiv>
  
    </div>
  );
}
  export default ButtonB;
  