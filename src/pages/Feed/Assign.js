import React from "react";
import styled from 'styled-components';
import PostComponent from "../../BoradComponent/PostComponent";

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

`

function Assign() {
    return (
      <div>
        <Tiltlediv>
      <TitleLineA/>
      <TitleA>과제 피드</TitleA>
      <TitleLineB></TitleLineB>
      <TitleB>퀴즈 피드</TitleB>
      </Tiltlediv>
      <PostAssign>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      </PostAssign>
      <WriteButton>글 작성하기</WriteButton>
      </div>
    );
  }
  
  export default Assign;
  