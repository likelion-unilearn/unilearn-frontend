import React from "react";
import styled from 'styled-components';

const Postdiv=styled.div`
position: relative;
width: 390px;
`
const Profile=styled.div`
position: absolute;
width: 28px;
height: 28px;
left:-50px;
margin:3px 0px 10px 20px;
background: #D4D4D4;
border-radius:20px;
`
const Nickname=styled.div`
left:-60px;
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


const Postcontent=styled.div`
position: relative;
top:33px;
left:-25px;
display:flex;
width: 290px;
margin:20px 0px 30px 0px;
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
top:10px;
left:-50px;
width: 450px;
height: 0px;
border: 1px solid #EFEFEF;
`
const Complete=styled.button`
position:absolute;
top:7px;
left:270px;
border:none;
background-color:#ffffff;
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 10px;
border:none;
height:20px;
width:80px;
color:#8B8B8B;
`

function Commenter() {
    return (
      <div>
      <Postdiv>
        <Profile></Profile>
        <Nickname>익명</Nickname>
        <Complete>삭제하기</Complete>
        <Postcontent>데이터가 들어오는 거에따라서 높이가 달라지게끔 설정해 두었음</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      </div>
    );
  }
  
  export default Commenter;