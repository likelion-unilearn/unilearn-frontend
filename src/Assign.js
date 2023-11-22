import React from "react";
import styled from 'styled-components';
import PostComponent from "./BoradComponent/PostComponent";

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
const PostAssign=styled.div`
position: absolute;
width: 390px;
height: 603px;
left: 0px;
top: 140px;

`

function Assign() {
    return (
      <div>
      <TitleLineA/>
      <TitleA>과제 피드</TitleA>
      <TitleLineB></TitleLineB>
      <TitleB>퀴즈 피드</TitleB>
      <PostAssign>
      <PostComponent></PostComponent>
      <PostComponent></PostComponent>
      </PostAssign>
      </div>
    );
  }
  
  export default Assign;
  