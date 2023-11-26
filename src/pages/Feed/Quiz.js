import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import QuizComponent from "../../BoradComponent/QuizComponent";
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import {useNavigate} from "react-router-dom";
import axios from 'axios'; 

const Tiltlediv=styled.div`
height:60px;
` 
const TitleLineA=styled.div`
position: absolute;
width: 100%;
height: 0px;
top: 125px;
border: 1px solid #DDDDDD;
`
const TitleA=styled.button`
position: absolute;
width: 50%;
height: 20px;
top: 96px;
font-family: 'Inter';
font-style: normal;
font-weight: 1000;
font-size: 15px;
line-height: 18px;
color: #000000;
background:white;
border:none;
`
const TitleB=styled.button`
position: absolute;
width: 50%;
height: 20px;
left: 50%;
top: 96px;
font-family: 'Inter';
font-style: normal;
font-weight: 1000;
font-size: 15px;
line-height: 18px;
color: #000000;
background:white;
border:none;
`
const TitleLineB=styled.div`
position: absolute;
width: 100px;
height: 0px;
left: 240px;
top: 123px;
border: 2.5px solid #547980;
border-radius:10px;
`


const PostAssign=styled.div`
position: absolute;
width: 389px;
height: 660px;
max-height: 660px;
overflow-y: auto; 
&::-webkit-scrollbar {
width:0px;
`
const WriteButton=styled.button`
position:absolute;
font-family: 'Inter';
font-style: normal;
font-weight: 1000;
font-size: 11px;
top:730px;
left:35%;
width: 100px;
height: 25px;
border:none;
border-radius:30px;
background:#FFEFEF;
z-index: 1;
`
function Quiz() {
  const navigate = useNavigate();

  
  const [quizs, setQuiz] = useState([]);

  useEffect(() => {
    const QuizPosts = async () => {
      try {
        const response = await axios.get("/api/quiz", {
          headers: {
            Authorization: "YOUR_AUTH_TOKEN", //토큰값넣어야함!!
          },
        });
        const data = response.data;
        setQuiz(data); // API 응답 데이터를 상태에 설정
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    QuizPosts();
  }, []);


    return (
      <div id="body">
      <div id="iphone-frame">
      <Header></Header>
       <Tiltlediv>
      <TitleLineA/>
      <TitleA onClick={()=>{navigate("/Assign");}}>과제 피드</TitleA>
      <TitleLineB></TitleLineB>
      <TitleB>퀴즈 피드</TitleB>
      </Tiltlediv> 
      <PostAssign>
      {quizs.map(quiz => (
            <QuizComponent onClick={()=>{ navigate('/QuizCommentView', { state: { quizId: quiz.id } });;}}
            key={quiz.id}
            id={quiz.id}
            content={quiz.content}
            ></QuizComponent>
          ))}
      </PostAssign>
      <WriteButton onClick={()=>{navigate("/QuizWrite");}}>글 작성하기</WriteButton>
     <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default Quiz;
  