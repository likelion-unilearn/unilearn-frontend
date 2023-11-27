import React from "react";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

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
top:40px;
left:64px;
display:flex;
width: 290px;
margin:60px 0px 50px 0px;
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

function QuizComponent({ author, content }) {
  const navigate = useNavigate();
    return (
      <div>
      <Postdiv onClick={()=>{navigate("/QuizCommentView");}}>
        <Profile></Profile>
        <Nickname>김멋사</Nickname>
        <Postcontent>퀴즈 진짜 어렵지 않았어?? 난 너무 어렵다.</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      <Postdiv>
        <Profile></Profile>
        <Nickname>박멋사</Nickname>
        <Postcontent>이거 퀴즈 푼 사람들 어떤식으로 풀었어??알려주면 좋을 것 같은데..</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      <Postdiv>
        <Profile></Profile>
        <Nickname>최멋사</Nickname>
        <Postcontent>운영체제 5주차 때 교수님이 내주신 과제에서 이 부분 참고할까?</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      </div>
    );
  }
  
  export default QuizComponent;