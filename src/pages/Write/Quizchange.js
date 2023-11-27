import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import { useNavigate, useLocation } from 'react-router-dom';
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
function Quizchange() {
    const userNickname = "김멋사";
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const location = useLocation(); 
    const quizId = location.state?.quizId;
  


  // useEffect(() => {
  //   // 해당 퀴즈의 정보를 가져와서 content에 설정
  //   const fetchQuizData = async () => {
  //     try {
  //       const response = await axios.get(`/api/quiz/${quizId}`, {
  //         headers: {
  //           Authorization: "YOUR_AUTH_TOKEN", // 토큰값 넣어야함!!
  //         },
  //       });
  //       setContent(response.data.content);
  //     } catch (error) {
  //       console.error("Error fetching quiz data:", error);
  //     }
  //   };

  //   fetchQuizData();
  // }, [quizId]);

  // const handleComplete = async () => {
  //   try {
  //     await axios.put(
  //       `/api/quiz/${quizId}`,
  //       {
  //         content: content,
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
  //     console.error('Error updating quiz:', error);
  //   }
  // };
     

  
    return (
      <div id="body">
      <div id="iphone-frame">
        <Header></Header>
      <Framediv>
        <Title>퀴즈 피드</Title>
       <Content>게시글 수정</Content>
       <Complete onClick={()=>{navigate("/QuizCommentView");}}>수정</Complete>
       <Line></Line>
      </Framediv>
      <WriteFrame>
        <Profile></Profile>
        <Nickname>{userNickname}</Nickname>
        {/* <Posttext
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Posttext> */}
          <Posttext>퀴즈 진짜 어렵지 않았어?? 난 너무 어렵다.</Posttext> 
      </WriteFrame>
      <></>
      <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default Quizchange;
  