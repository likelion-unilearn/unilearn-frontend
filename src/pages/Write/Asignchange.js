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
function Assignchange() {
    const userNickname = "사용자 닉네임 데이터";
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const location = useLocation(); 
    const assignmentId = location.state?.assignmentId;
  


    seEffect(() => {
        const fetchAssignmentData = async () => {
          try {
            const response = await axios.get(`/api/assignments/${assignmentId}`, {
              headers: {
                Authorization: 'YOUR_AUTH_TOKEN',
              },
            });
            setContent(response.data.content);
          } catch (error) {
            console.error('Error fetching assignment data:', error);
          }
        };
    
        fetchAssignmentData();
      }, [assignmentId]);
    
      const handleComplete = async () => {
        try {
          await axios.put(
            `/api/assignments/${assignmentId}`,
            {
              content: content,
            },
            {
              headers: {
                Authorization: 'YOUR_AUTH_TOKEN',
                'Content-Type': 'application/json',
              },
            }
          );
    
          // 수정 완료 후 페이지 이동
          navigate('/Assign');
        } catch (error) {
          console.error('Error updating assignment:', error);
        }
      };
    
     

  
    return (
      <div id="body">
      <div id="iphone-frame">
        <Header></Header>
      <Framediv>
        <Title>퀴즈 피드</Title>
       <Back onClick={()=>{navigate("/Assign");}}>{'<'}</Back> 
       <Content>게시글 수정</Content>
       <Complete  onClick={handleComplete}>수정</Complete>
       <Line></Line>
      </Framediv>
      <WriteFrame>
        <Profile></Profile>
        <Nickname>{userNickname}</Nickname>
        <Posttext
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Posttext>
      </WriteFrame>
      <></>
      <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default Assignchange;
  