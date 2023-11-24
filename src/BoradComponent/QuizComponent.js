import React from "react";
import styled from 'styled-components';

const Postdiv=styled.div`
position: relative;
width: 390px;
top:-30px;
`
const Profile=styled.div`
position: absolute;
width: 33px;
height: 33px;
margin:3px 0px 10px 20px;
background: #FFEFEF;
border-radius:20px;
`
const Nickname=styled.div`
position: absolute;
width: 200px;
height: 16px;
margin: 7px 0px 65px 65px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 16px;
`
const PostTitle=styled.div`
position: absolute;
width: 300px;
height: 56px;
margin: 30px 0px 65px 65px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 28px;
letter-spacing: -0.025em;
color: #000000;
`

const Postcontent=styled.div`
position: relative;
top:70px;
left:64px;
display:flex;
width: 290px;
margin:60px 0px 65px 0px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 23px;
letter-spacing: -0.025em;
color: #000000;
overflow-wrap: break-word;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const PostLine=styled.div`
position: relative;
top:30px;
width: 389px;
height: 0px;
border: 1px solid #EFEFEF;
`

function QuizComponent() {
    return (
      <div>
      <Postdiv>
        <Profile></Profile>
        <Nickname>유니런(닉네임 데이터)</Nickname>
        <PostTitle>과제 관련 제목 데이터</PostTitle>
        <Postcontent>데이터가 들어와도 넓이에 맞춰서 텍스트가 보임 이렇게</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      </div>
    );
  }
  
  export default QuizComponent;