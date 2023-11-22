import React from "react";
import styled from 'styled-components';

const Postdiv=styled.div`
display: flex;
flex-direction: row;
width: 390px;
height: 165px;
`
const Profile=styled.div`
position: absolute;
width: 33px;
height: 33px;
margin:1px 0px 20px 20px;
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
position: absolute;
width: 280px;
height: 69px;
margin:60px 0px 65px 65px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 23px;
letter-spacing: -0.025em;
color: #000000;
`
const PostLine=styled.div`
position: absolute;
width: 390px;
height: 1px;
margin: 140px 0px 0px 0px;
background: #EFEFEF;

`

function PostComponent() {
    return (
      <div>
      <Postdiv>
        <Profile></Profile>
        <Nickname>유니런(닉네임 데이터)</Nickname>
        <PostTitle>과제 관련 제목 데이터</PostTitle>
        <Postcontent>과제 관련 글 데이터가 들어오는 부분과제 관련 글 데이터가 들어오는 부분과제 관련 글 데이터가 들어오는 부분</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      </div>
    );
  }
  
  export default PostComponent;