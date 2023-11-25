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
top:3px;
width: 200px;
height: 16px;
margin: 7px 0px 65px 65px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 16px;
`

const Postcontent=styled.div`
position: relative;
top:40px;
left:64px;
display:flex;
width: 290px;
margin:60px 0px 50px 0px;
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

function PostComponent({ id, content }) {
    return (
      <div>
      <Postdiv>
        <Profile></Profile>
        <Nickname>{id}</Nickname>
        <Postcontent>{content}</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      </div>
    );
  }
  
  export default PostComponent;