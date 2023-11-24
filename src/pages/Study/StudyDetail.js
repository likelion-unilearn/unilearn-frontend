import React from 'react';
import { useParams } from 'react-router-dom'; // 필요한 경우 라우터 모듈로 변경해야 할 수도 있습니다.
import styled from 'styled-components';
import Nav from "../../HeaderNavComponent/Nav";
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
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Title2 = styled.p`
  width: 82px;
  height: 18px;
  left: 157px;
  top: 90px;
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  color:#FF9A9A;
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
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Top = styled.div`
width: 390px;
height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`;
const Middle = styled.div`
width: 390px;
height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`;


const Body = styled.body`
  background-color: #dedede;
  overflow: hidden;
  margin: 0; 
  padding: 0;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IphoneFrame = styled.div`
  width: 390px;
  height: 844px;
  background: #ffffff;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.div`
width: 390px;
height: 570px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto; /* 스크롤 추가 */
  margin-top:20px;
`;

const StudyImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StudyDetail1 = styled.div`
  width: 300px;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StudyDetailTitle = styled.h2`
font-family: 'Abhaya Libre SemiBold';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 18px;
`;

const StudyDetailInfo = styled.p`
  color: #888;
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
`;

const BottomButtons = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬되도록 설정 */
  align-items: center; /* 가운데 정렬 */
  margin-bottom: 20px;
`;

const BottomButton = styled.button`
  /* 버튼 스타일 설정 */
  width: 109px;
  height: 19px;
  margin: 15px; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #28292A;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const mockData = [
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: 'Sample Study Title 1',
    dateTime: '월요일 14:00-15:00',
    nickname: 'Jiyoon',
    participants: 5,
    createdAt: '1일전',
    description: 'This is a sample description for study 1.',
    location: 'Online',
    category: 'Programming',
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: 'Sample Study Title 2',
    dateTime: '화요일 10:00-12:00',
    nickname: '홍길동',
    participants: 8,
    createdAt: '3일전',
    description: 'This is a sample description for study 2.',
    location: 'Offline',
    category: 'Language Learning',
  },

];

const StudyDetail = () => {
  const { id } = useParams();

  const isValidId = id >= 0 && id < mockData.length;
  const post = isValidId ? mockData[id] : null;

  return (
    <IphoneFrame>
      <Header />
      <Top>
      <Title>나의 스터디</Title>
      </Top>
      <DetailContainer>
        {isValidId ? (
          <>
            <StudyImage src={post.imageUrl} alt={`Study ${id}`} />
            <StudyDetail1>
              <StudyDetailTitle>{post.title}</StudyDetailTitle>
              <StudyDetailInfo>스터디시간: {post.dateTime}</StudyDetailInfo>
              <StudyDetailInfo>스터디원: {post.nickname}</StudyDetailInfo>
              {/* <StudyDetailInfo>참여 인원: {post.participants}명</StudyDetailInfo>
              <StudyDetailInfo>장소: {post.location}</StudyDetailInfo>
              <StudyDetailInfo>설명: {post.description}</StudyDetailInfo> */}

            </StudyDetail1>
            <Middle>
      <Title2>My</Title2>
      </Middle>
            <BottomButtons>
        <BottomButton>공부방</BottomButton>
        <BottomButton>과제제출</BottomButton>
        <BottomButton>일정</BottomButton>
        <BottomButton>스터디원</BottomButton>
      </BottomButtons>
          </>
        ) : (
          <div>포스트를 찾을 수 없습니다.</div>
        )}
      </DetailContainer>
      <Nav />
    </IphoneFrame>
  );
};

export default StudyDetail;