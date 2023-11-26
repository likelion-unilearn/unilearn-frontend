import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Commenter from '../../BoradComponent/Commenter';
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
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

const Change=styled.button`
position:absolute;
top:54px;
left:230px;
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
top:60px;
left:40px;
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

const PostLine=styled.div`
position: absolute;
width: 388px;
height: 0px;
left:-70px;
border: 1px solid #EFEFEF;
`
const Wr=styled.div`
position:relative;
`

const Postarea=styled.div`
position: absolute;
top: 740px;
left:20px;
width: 350px;
height: 30px;
border: 1px solid #C4C4C4;
`
const Post=styled.textarea`
position: absolute;
width: 300px;
height: 25px;
z-index:1;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 28px;
border-radius:5px;
border:none;
letter-spacing: -0.025em;
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
const Postbtn=styled.button`
position: absolute;
left:311px;
width: 38px;
height: 30px;
border:none;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 10px;
background:#FFE2E2;
`

function QuizCommentView() {
  const navigate = useNavigate();
  const location = useLocation();
  const quizId = location.state?.quizId;
  const [quizData, setQuizData] = useState({}); // 받아온 퀴즈 데이터를 저장한 state임
  const [currentUser, setCurrentUser] = useState({}); 
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); 

  const handleDeleteComment = async (commentId) => {
    try {
      // 댓글 삭제 API 호출
      await axios.delete(`/api/comments/${commentId}`, {
        headers: {
          Authorization: "YOUR_AUTH_TOKEN", // 토큰값 넣어야함!!
        },
      });
  
      // 삭제된 댓글을 현재 상태에서 제거
      setComments(comments.filter(comment => comment.comment_id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handlePostComment = async () => {
    try {
      // 댓글 작성 API 호출
      const response = await axios.post(`/api/quiz/${quizId}/comments`, {
        text: newComment, // 사용자가 입력한 댓글 내용을 여기에 넣어야 합니다.
      }, {
        headers: {
          Authorization: "YOUR_AUTH_TOKEN", // 토큰값 넣어야함!!
          "Content-Type": "application/json",
        },
      });
  
      // 작성된 댓글을 현재 상태에 추가
      setComments([...comments, response.data]);
  
      // 입력 창 비우기
      setNewComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/quiz/${quizId}/comments`, {
          headers: {
            Authorization: "YOUR_AUTH_TOKEN", // 토큰값 넣어야함!!
          },
        });
        setComments(response.data.comments); // API 응답 데이터를 상태에 설정
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [quizId]);  

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`/api/quiz/${quizId}`, {
          headers: {
            Authorization: "YOUR_AUTH_TOKEN", // 토큰값 넣어야함!!
          },
        });
        setQuizData(response.data); // API 응답 데이터를 상태에 설정
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    fetchQuizData();
  }, [quizId]);

  const handleDeleteQuiz = async () => {
    try {
      await axios.delete(`/api/quiz/${quizId}`, {
        headers: {
          Authorization: "YOUR_AUTH_TOKEN", // 토큰값 넣어야함!!
        },
      });
      
      console.log("삭제 성공");
      navigate("/Assign"); 
    } catch (error) {
      console.error("삭제 에러", error);
    }
  };
  const handleEditQuiz = () => {
    // 수정하기 버튼 클릭 시 Quizchange 페이지로 이동하도록!
    navigate('/Quizchange', { state: { quizId: quizId } });
  };
    return (
      <div id="body">
      <div id="iphone-frame">
        <Header></Header>
      <Framediv>
      <Title>퀴즈 피드</Title>
      {currentUser.id === quizData.authorId && (
            <Complete onClick={handleDeleteQuiz}>삭제하기</Complete>
          )}
          {currentUser.id === quizData.authorId && (
            <Change onClick={handleEditQuiz}>수정하기</Change>
          )}
          <Line></Line>
      </Framediv>
      <WriteFrame>
        <Wr>
        <Profile></Profile>
        <Nickname>{quizData.author}</Nickname>
        <Posttext>{quizData.content}
            <PostLine></PostLine>
            {comments.map(comment => (
            <Commenter
              key={comment.comment_id}
              text={comment.text}
              author={comment.author}
              created_at={comment.created_at}
              onDelete={handleDeleteComment}
            />
          ))}
        </Posttext>
        </Wr>
      </WriteFrame>
      <Postarea>
        <Post 
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}></Post>
        <Postbtn  onClick={handlePostComment}>작성</Postbtn>
        </Postarea>
        
      <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default QuizCommentView;