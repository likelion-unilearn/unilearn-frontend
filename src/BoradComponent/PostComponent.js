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
function PostComponent({ id, content,onDelete,onEdit }) {

  const handleDelete = () => {
    // 삭제 버튼 클릭 시 onDelete 함수 호출
    onDelete(id);
  };
  
  const handleEdit = () => {
    onEdit();
  };

    return (
      <div>
      <Postdiv>
        <Profile></Profile>
       
            <Change onClick={handleEdit}>수정하기</Change>
            <Complete onClick={handleDelete}>삭제하기</Complete>
        
        <Nickname>{id}</Nickname>
        <Postcontent>{content}</Postcontent>
        <PostLine></PostLine>
      </Postdiv>
      </div>
    );
  }
  
  export default PostComponent;