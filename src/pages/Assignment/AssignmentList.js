import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "../../HeaderNavComponent/Nav";
import Header from "../../HeaderNavComponent/Header";

const AfterLabel = styled.p`

  position: absolute;
  width: 40px;
  height: 16px;
  left: 264px;
  top: 198px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #C2D6C5' : 'none')};
`;

const BeforeLabel = styled.p`

  position: absolute;
  width: 40px;
  height: 16px;
  left: 104px;
  top: 198px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #C2D6C5' : 'none')};
`;


const TopLine = styled.div`
  position: absolute;
  width: 390px;
  height: 1px;
  left: -1px;
  top: 225px;
`;

const TopLineBackground = styled.div`
  position: absolute;
  width: 390px;
  height: 1px;
  left: -1px;
  top: 225px;
  background: #FFF4F4;
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

const AssignmentContainer = styled.div`
  width: 390px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
  margin-top: 20px;
`;

const FormField = styled.div`
  width: 300px;
  padding-left: 10px;
  font-family: 'Inter';
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.333333px;
  color: #303434;
`;
const SectionTitle = styled.p`
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #231E1E;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  border: none;
  padding: 5px;
  text-align: center;
  width: 100%;
`;



const ImageUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  margin-top:35px;

  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & > span {
    margin-top: 10px;
    font-size: 14px;
    color: #555;
  }
`;


const HiddenInput = styled.input`
  display: none;
`;


const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 195px;
  height: 139px;
  margin: 0 auto; /* Added margin to horizontally center */
  background: #FFFFFF;
  border: 0.349621px dashed #A7A5A5;
  box-shadow: 0px 0px 3.99567px rgba(0, 0, 0, 0.25);
  border-radius: 5.9935px;
`;


const TextAreaField = styled.textarea`
  width: 100%;
  height: 100px;
  resize: vertical;
  padding: 5px;
  border:none;
//   width: 340px;
// height: 169px;

background: rgba(84, 121, 128, 0.1);
border-radius: 6px;
`;



const Rectangle3463805 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 334px;
  height: 158px;
  left: 27px;
  top: 248px;
  background: #FFFFFF;
  border: 1px solid #9EB7AB;
  border-radius: 10px;
`;
const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  width: 100%;
`;

const CustomSubmitButton = styled(Link)`
  position: absolute;
  right: 20px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 8px;
  border: 0.5px solid #C7CBC9;
  border-radius: 5px;
  background: #FFFFFF;
  text-decoration: none; 
`;
const AssignmentList = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: '과제 1',
      deadline: '2023-12-01',
      status: 'before',
      submissions: 20,
      submitters: ['김멋사', '김부각', '홍길동'],
    },
    {
      id: 2,
      title: '과제 2',
      deadline: '2023-11-25',
      status: 'after',
      submissions: 15,
      submitters: ['김사월', '김비서'],
    },

  ]);
  const [viewStatus, setViewStatus] = useState('before');

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.status === viewStatus
  );
  
  return (
    <div>
      <Header />
      <Top>
        <Title>과제 목록</Title>
      </Top>
      <TopLine />
      <TopLineBackground />
      <BeforeLabel onClick={() => setViewStatus('before')} isActive={viewStatus === 'before'}>
        마감 전
      </BeforeLabel>
      <AfterLabel onClick={() => setViewStatus('after')} isActive={viewStatus === 'after'}>
        마감 후
      </AfterLabel>
      <AssignmentContainer>
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id}>
            <Rectangle3463805>
              <SectionTitle>{assignment.title}</SectionTitle>
              <FormField>
                <p>기간: {assignment.deadline}</p>
                <p>제출 인원: {assignment.submissions}</p>
                <p>제출자: {assignment.submitters.join(', ')}</p>
                {/* CustomSubmitButton을 Link로 변경 */}
                <SubmitButtonWrapper>
                  <CustomSubmitButton to="/AssignmentForm">
                    제출하기
                  </CustomSubmitButton>
                </SubmitButtonWrapper>
              </FormField>
            </Rectangle3463805>
          </div>
        ))}
      </AssignmentContainer>

      <Nav />
    </div>
  );
};

export default AssignmentList;