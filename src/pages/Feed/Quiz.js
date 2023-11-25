import React from "react";
import styled from 'styled-components';
import QuizComponent from "../../BoradComponent/QuizComponent";
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import {useNavigate} from "react-router-dom";

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
const Back=styled.button`
position:absolute;
top:90px;
left:10px;
border:none;
background-color:#ffffff;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 17px;
z-index=1;
`
function Quiz() {
  const navigate = useNavigate();
    return (
      <div id="body">
      <div id="iphone-frame">
      <Header></Header>
       <Tiltlediv>
      <TitleLineA/>
      <TitleA onClick={()=>{navigate("/Assign");}}>과제 피드</TitleA>
      <TitleLineB></TitleLineB>
      <TitleB>퀴즈 피드</TitleB>
      <Back onClick={()=>{navigate("/ClassBoard");}}>{'<'}</Back> 
      </Tiltlediv> 
      <PostAssign>
      <QuizComponent onClick={()=>{navigate("/QuizCommentView");}}></QuizComponent>
      <QuizComponent></QuizComponent>
      <QuizComponent></QuizComponent>
      <QuizComponent></QuizComponent>
      <QuizComponent></QuizComponent>
      <QuizComponent></QuizComponent>
      </PostAssign>
      <WriteButton onClick={()=>{navigate("/QuizWrite");}}>글 작성하기</WriteButton>
     <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default Quiz;
  