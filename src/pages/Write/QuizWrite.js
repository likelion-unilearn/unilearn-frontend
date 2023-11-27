import React, { useState } from 'react';
import styled from 'styled-components';
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

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

const Complete=styled.button`
position:absolute;
top:52px;
left:300px;
border:none;
background-color:#FFEFEF;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
border-radius:20px;
height:20px;
width:50px;
`
const Content=styled.div`
position:absolute;
top:50px;
left:39%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;

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
position:relative;
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

const Posttext=styled.textarea`
position: absolute;
top: 70px;
left:40px;
width: 300px;
height: 500px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 28px;
letter-spacing: -0.025em;
border:none;
color: #000000;
text-align: left;
  resize: none; 
  overflow-y: auto;
  max-height: 660px;
overflow-y: auto; 
&::-webkit-scrollbar {
width:0px;
}
overflow-wrap: break-word;
&:focus {
    outline: none;
    border-color: #000000;
}
`
function QuizWrite() {
  const userNickname = "사용자 닉네임 데이터"; 
  // const [content, setContent] = useState('');
  const navigate = useNavigate();
  
  // const handleComplete = async () => {
  //   try {
  //     // API 호출 및 데이터 전송
  //     await axios.post(
  //       '/api/quiz/create',
  //       {
  //         title: title,
  //         content: content,
  //         author: userNickname,
  //       },
  //       {
  //         headers: {
  //           Authorization: 'YOUR_AUTH_TOKEN', // 실제 토큰 값으로 대체
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     // 완료 후 페이지 이동
  //     navigate('/Quiz');
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //   }
  // };
  
  //   return (
  //     <div id="body">
  //     <div id="iphone-frame">
  //       <Header></Header>
  //     <Framediv>
  //       <Title>퀴즈 피드</Title>
  //      <Content>게시글 작성</Content>
  //      <Complete>완료</Complete>
  //      <Line></Line>
  //     </Framediv>
  //     <WriteFrame>
  //       <Profile></Profile>
  //       <Nickname>김멋사</Nickname>
  //       <Posttext  placeholder="퀴즈에 대한 내용을 작성해보세요."
  //       value={content}
  //       onChange={(e) => setContent(e.target.value)}></Posttext>
  //     </WriteFrame>
  //     <></>
  //     <Nav></Nav>
  //     </div>
  //     </div>
  //   );
  // }

  return (
    <div id="body">
    <div id="iphone-frame">
      <Header></Header>
    <Framediv>
      <Title>퀴즈 피드</Title>
     <Content>게시글 작성</Content>
     <Complete onClick={()=>{navigate("/Quiz");}}>완료</Complete>
     <Line></Line>
    </Framediv>
    <WriteFrame>
      <Profile></Profile>
      <Nickname>김멋사</Nickname>
      <Posttext  placeholder="퀴즈에 대한 내용을 작성해보세요."></Posttext>
    </WriteFrame>
    <></>
    <Nav></Nav>
    </div>
    </div>
  );
}
  
  export default QuizWrite;
  