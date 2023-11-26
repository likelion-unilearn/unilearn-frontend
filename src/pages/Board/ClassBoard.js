import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios'; 
import pin from '../../img/pin.jpg';
import PostButton from '../../BoradComponent/ButtonD';
import QuizButton from '../../BoradComponent/ButtonE';
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import {useNavigate} from "react-router-dom";

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
left: 44px;
top: 123px;
border: 2.5px solid #547980;
border-radius:10px;
`

const PlusA=styled.button`
position: absolute;
height: 13px;
left: 311px;
top: 165px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 11px;
line-height: 13px;
color: #A1A1A1;
border:none;
background:white;

`

const PlusB=styled.button`
position: absolute;
height: 13px;
left: 309px;
top: 471px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 11px;
line-height: 13px;
color: #A1A1A1;
border:none;
background:white;


`

const BoardA=styled.div`
position: absolute;
width: 320px;
height: 260px;
left: 35px;
top: 184px;
background: #FFFFFF;
border: 1.5px solid #C2D6C5;
border-radius: 15px;
`
const BoardB=styled.div`
position: absolute;
width: 320px;
height: 260px;
left: 35px;
top: 490px;
background: #FFFFFF;
border: 1.5px solid #C2D6C5;
border-radius: 15px;
`

const BoradTitle=styled.div`
position: absolute;
height: 15px;
left: 63px;
top: 162px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
color: #000000;
`
const StudyTitle=styled.div`
position: absolute;
width: 69px;
height: 21px;
left: 63px;
top: 468px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
color: #000000;
`
const PinA=styled.img`
position: absolute;
width: 15px;
height: 15px;
left: 40px;
top: 162px;
`
const PinB=styled.img`
position: absolute;
width: 15px;
height: 15px;
left: 40px;
top: 468px;
`


function ClassBoard() {
  const [assignments, setAssignments] = useState([]);
  const [quiz, setquiz]=useState([]);

  useEffect(()=>{
    const fetchQuiz=async()=>{
      try{
        const response=await axios.get('/api/quiz',
        {
          headers: {
            Authorization: "YOUR_AUTH_TOKEN", //토큰값넣어야함!!
          },
        }
        );
        setquiz(response.data.slice(0,6));
      }catch(error){
        console.error('퀴즈게시판 에러!',error);
      }
    };
    fetchQuiz();
  },[]);


  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('/api/assignments',{
          headers: {
            Authorization: "YOUR_AUTH_TOKEN", //토큰값넣어야함!!
          },
        });
        setAssignments(response.data.slice(0, 6));
      } catch (error) {
        console.error('과제 게시판 에러!', error);
      }
    };

    fetchAssignments();
  }, []); 

    return (
      <div id="body">
      <div id="iphone-frame">
      <Header></Header>
      <TitleLineA/>
     
      <TitleA>과목 게시판</TitleA> 
      <TitleLineB></TitleLineB>
      <TitleB onClick={()=>{navigate("/StudyBoard");}}>스터디 게시판</TitleB>
      <BoradTitle>과제 게시판</BoradTitle>
      <BoardA>
        {assignments.map((assignment) => (
          <PostButton key={assignment.id} content={assignment.content} />
        ))}
         </BoardA>
      <PlusA onClick={()=>{navigate("/Assign");}}>더보기</PlusA>
      <BoardB>
        {quiz.map((q)=>(
           <QuizButton key={q.id} content={q.content}></QuizButton>
        )
        )}
       
      </BoardB>
      <PlusB onClick={()=>{navigate("/Quiz");}}>더보기</PlusB>
      <StudyTitle>퀴즈 게시판</StudyTitle>
      <PinA img src={pin}></PinA>
      <PinB img src={pin}></PinB>
      <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default ClassBoard;
  