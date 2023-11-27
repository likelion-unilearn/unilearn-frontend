import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PostComponent from "../../BoradComponent/PostComponent";
import {useNavigate} from "react-router-dom";
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import axios from 'axios'; 

const Tiltlediv=styled.div`
height:60px;
` 

const TitleLineA=styled.div`
position: absolute;
width: 100%;
height: 0px;
top: 125px;
border: 1px solid #DDDDDD;`

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
const PostAssign=styled.div`
position: absolute;
width: 380px;
height: 660px;
left: 0px;
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


function Assign() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://15.164.143.187:8080/api/assignments", {
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ", 
          },
        });
        const data = response.data;
        setPosts(data);
      } catch (error) {
        console.error("응답에러", error);
      }
    };
    fetchPosts();
  }, []);
 
  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://15.164.143.187:8080/api/assignments/${postId}`, {
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ", 
        },
      });
      console.log("삭제 성공");

      // 삭제 후 게시글 목록 갱신
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error("삭제 에러", error);
    }
  };
    return (
      <div id="body">
      <div id="iphone-frame">
      <Header></Header>
        <Tiltlediv>
      <TitleLineA/>
      <TitleA>과제 피드</TitleA>
      
      <TitleLineB></TitleLineB>
      <TitleB onClick={()=>{navigate("/Quiz");}}>퀴즈 피드</TitleB>
      </Tiltlediv>
      <PostAssign>
      {posts.map(post => (
            <PostComponent
              key={post.id}
              id={post.id}
              content={post.content}
              onDelete={handleDeletePost} 
              onEdit={() => navigate(`/Assignchange/${post.id}`, { state: { content: post.content } })}
            />
          ))}
      </PostAssign>
      <WriteButton onClick={()=>{navigate("/AssignWrite");}}>글 작성하기</WriteButton>
      <Nav></Nav>
      </div>
      </div>
    );
  }
  
  export default Assign;
  