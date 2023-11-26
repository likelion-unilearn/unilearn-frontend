import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SurveyItem = styled.div`
  box-sizing: border-box;
  width: 324px;
  height: 152px;
  background: #FFFFFF;
  border: 1px solid #9EB7AB;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SurveyLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 287px;
  height: 35px;
  background: #C2D6C5;
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
`;

const SubjectTitle = styled.h3`
  width: 280px;
  height: 1px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #ACACAC;
  text-align: left; 
`;

const SurveyDescription = styled.p`
  width: 280px;
  height: 18px;
  left: 54px;
  top: 188px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #434343;
`;

const SurveyList = ({ subjects }) => {
  return (
    <SurveyContainer>
      {subjects.map((subject) => (
        <SurveyItem key={subject.id}>
          <SubjectTitle>{subject.name}</SubjectTitle>
          <SurveyDescription>설문을 진행해보세요!</SurveyDescription>
          <SurveyLink to={`/survey/${subject.id}`}>설문 하러 가기</SurveyLink>
        </SurveyItem>
      ))}
    </SurveyContainer>
  );
};

export default SurveyList;
