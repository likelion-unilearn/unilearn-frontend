import React from "react";
import styled from 'styled-components';
//버튼 D참고해서 할것
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
top:70px;
left:64px;
display:flex;
width: 290px;
margin:60px 0px 65px 0px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 23px;
letter-spacing: -0.025em;
color: #000000;
overflow-wrap: break-word;
`
const PostLine=styled.div`
position: relative;
top:30px;
width: 389px;
height: 0px;
border: 1px solid #EFEFEF;
`

function PostComponent({ id, title, content }) {
    return (
      <div>
      <Postdiv>
        <Profile></Profile>
        <Nickname>{id}</Nickname>
        <PostTitle>{title}</PostTitle>
        <Postcontent>{content}</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      </div>
    );
  }
  
  export default PostComponent;