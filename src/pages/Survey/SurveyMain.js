import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "../../HeaderNavComponent/Nav";
import Header from "../../HeaderNavComponent/Header";
import SurveyList from './SurveyList';

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
const Contents  = styled.div`

width: 255px;
height: 24px;
left: 71px;
top: 115px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 12px;
text-align: center;

color: #7B7878;
p {
  margin: 2px 0; 
}
  
`;
const SurveyMain = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '운영체제뿌시자' },
    { id: 2, name: '소프트웨어보안 A+' },
    { id: 3, name: '개발은힘들어요' },
    // 가상의 데이터 예시
  ]);

  return (
    <IphoneFrame>
      <Header />
      <Top>
        <Title>설문조사</Title>
      </Top>
      <Board>
        <Contents><p>스터디가 종료되었습니다</p>
          <p>해당 설문조사는 스터디원의 온도에 반영되는 설문조사입니다.</p>
        </Contents>
      
        <SurveyList subjects={subjects} />
      </Board>
      <Nav />
    </IphoneFrame>
  );
};

export default SurveyMain;