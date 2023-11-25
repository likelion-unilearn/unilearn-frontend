import React from 'react';
import styled from 'styled-components';
import Commenter from '../../BoradComponent/Commenter';
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";

const Framediv=styled.div`
position:relative;

`

const Title=styled.div`
position:absolute;
top:10px;
left:41%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
color: #7B7878;
`

const Back=styled.button`
position:absolute;
top:48px;
left:20px;
border:none;
background-color:#ffffff;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 17px;
`
const Complete=styled.button`
position:absolute;
top:54px;
left:300px;
border:none;
background-color:#ffffff;
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 12px;
border:none;
height:20px;
width:80px;
color:#8B8B8B;
`


const Line=styled.div`
position:absolute;
top:80px;
width: 390px;
height: 0px;
border: 1px solid #EFEFEF;
`

const WriteFrame=styled.div`
top:80px;
width:380px;
height:620px;
position:relative;
max-height:620px;
overflow-y: auto; 
overflow-x: hidden; 
&::-webkit-scrollbar {
    display: none;
}

`
const Profile=styled.button`
position: absolute;
width: 33px;
height: 33px;
top:20px;
left:30px;
border:none;
background: #FFEFEF;
border-radius:20px;
`
const Nickname=styled.div`
top:27px;
left:73px;
position: absolute;
width: 200px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 13px;
`

const Posttext=styled.div`
position: absolute;
top:90px;
left:30px;
width: 335px;
height: 500px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 28px;
letter-spacing: -0.025em;
color: #000000;
text-align: left;
`
const PostTitle=styled.div`
position: absolute;
top:60px;
left:30px;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 13px;
line-height: 28px;
letter-spacing: -0.025em;
`

const PostLine=styled.div`
position: absolute;
width: 388px;
height: 0px;
left:-30px;
border: 1px solid #EFEFEF;
`
const Wr=styled.div`
position:relative;
`


function QuizWrite() {
    return (
      <div id="body">
      <div id="iphone-frame">
        <Header></Header>
      <Framediv>
        <Title>퀴즈 피드</Title>
       <Back>{'<'}</Back> 
       <Complete>삭제하기</Complete>
       <Line></Line>
      </Framediv>
      <WriteFrame>
        <Wr>
        <Profile></Profile>
        <Nickname>닉네임 데이터</Nickname>
        <PostTitle>제목데이터</PostTitle>
        <Posttext>게시글내용데이터게시글내용데이터게시게시글내용글내용데이터게시게시글내용데이터게시글내용데이터게시글내용데이터게시글내용데이터게시글내용데이터게시글내용데이터게글내용데이터게시글내용데이터게시글내용데이터게시글내용데이터게시글내용데이터게시글내용데이터게시글내용데이터
            <PostLine></PostLine>
            <Commenter></Commenter>
            
        </Posttext>
        </Wr>
       
      </WriteFrame>
    
      <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default QuizWrite;