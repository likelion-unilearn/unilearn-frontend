import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavA from "../../HeaderNavComponent/NavA";
import Header from "../../HeaderNavComponent/Header";

const Title = styled.p`

width: 82px;
height: 18px;
left: 157px;
top: 90px;
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #231E1E;
  margin-bottom: 20px;
  margin-top:30px;

  &:after {
    content: '';
    position: absolute;
    width: 69px;
    height: 2px;
    left: 158px;
    top: 126px;
    background: #C2D6C5;
    bottom: -5px; /* 텍스트 아래에서의 거리 조절 */
    left: 50%; /* 텍스트 가로 중앙 정렬을 위한 설정 */
    transform: translateX(-50%); /* 텍스트 가로 중앙 정렬을 위한 설정 */
  }

`;


const IphoneFrame = styled.div`
  width: 390px;
  height: 844px;
  background: #ffffff;
  position: relative;
  justify-content: center;
  align-items: center;

`;
const Top = styled.div`
width: 390px;
height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`;
const Board = styled.div`
width: 390px;
height: 570px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto; /* 스크롤 추가 */
  
`;

const StudyPost = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

const StudyTitle = styled.h3`
  margin-bottom: 5px;
`;

const StudyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
`;

const MystudyList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  
    const mockData = [
      {
        imageUrl: 'https://via.placeholder.com/150',
        title: 'Sample Study Title',
        dateTime: '월요일 14:00-15:00',
        nickname: 'Jiyoon',
        participants: 5,
        createdAt: '1일전',
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        title: 'Sample Study Title 2',
        dateTime: '화요일 14:00-15:00',
        nickname: '홍길동',
        participants: 8,
        createdAt: '3일전',
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        title: 'Sample Study Title 2',
        dateTime: '화요일 14:00-15:00',
        nickname: '홍길동',
        participants: 8,
        createdAt: '3일전',
      }
      
      

    ];

    setPosts(mockData);
  }, []);

  return (
      <IphoneFrame>
        <Header />
        <Top>
        <Title>나의 스터디</Title>
        </Top>
        <Board>
          {posts.map((post, index) => (
            <StudyPost key={index}>
              <ImageContainer>
                <img src={post.imageUrl} alt={`Study ${index}`} />
              </ImageContainer>
              <StudyTitle>{post.title}</StudyTitle>
              <StudyDetails>
                <span style={{  color: '#F9AAAA' }}>{post.dateTime}</span>
                <span> {post.nickname}</span>
                <span> {post.participants}명</span>
                <span>{post.createdAt}</span>
              </StudyDetails>
            </StudyPost>
          ))}
        </Board>
        <NavA />
      </IphoneFrame>
  );
};

export default MystudyList;
