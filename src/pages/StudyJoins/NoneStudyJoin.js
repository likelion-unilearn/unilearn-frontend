import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from "../../HeaderNavComponent/Header";
import Nav from "../../HeaderNavComponent/Nav";
import {useNavigate} from "react-router-dom";


const Info=styled.div`
position: absolute;
width: 300px;
height: 287px;
left: 44px;
top: 150px;
`
const Infotext=styled.text`
position: absolute;
left: 39.74%;
right: 38.46%;
top: 13.51%;
bottom: 83.18%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
letter-spacing: -0.025em;
color: #000000;

`

const InfoDiv=styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 24px;
position: absolute;
width: 300px;
height: 254px;
background: #FFFFFF;
border: 1px solid #C2D6C5;
border-radius: 8px;


`
const StudyInfo=styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 10px;
gap: 6px;
margin: 0 auto;
width: 230px;
height: 20px;
background:  #C2D6C5;
border-radius: 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
`

const StudyInfoText=styled.div`
position: absolute;
left: 17.44%;
right: 18.46%;
top: 26.54%;
bottom: 68.48%;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 21px;
letter-spacing: -0.025em;
color: #000000;
`
const SpeakText=styled.div`
width: 300px;
height: 28px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 28px;
text-align: center;
letter-spacing: -0.025em;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`

const Speak=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
position: absolute;
width: 300px;
height: 160px;
left: 44px;
top: 412px;
`
const SpeakFrame=styled.textarea`
display: flex;
  width: 290px;
  height: 132px;
  padding: 5px;
  background: #FFFFFF;
  border: 1px solid  #C2D6C5;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px; 
  color: #000000;
  text-align: left;
  resize: none; 
  overflow-y: auto;
  overflow-wrap: break-word;
  &:focus {
    outline: none;
    border-color: #FFE2E2;
}
`
const Checking=styled.div`
position: absolute;
width: 311px;
height: 164px;
left: 44px;
top: 582px;
`

const Place=styled.div`
position: absolute;
width: 35px;
height: 14px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;

`
const PlaceText=styled.div`
position: absolute;
width: 200px;
left:80px;
height: 14px;
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;

`
const Person=styled.div`
position: absolute;
width: 60px;
height: 14px;
top:30px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;


`
const PersonText=styled.div`
position: absolute;
width: 200px;
left:80px;
top:30px;
height: 14px;
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;

`
const Dstudy=styled.div`
position: absolute;
width: 70px;
height: 14px;
top:60px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;
`
const DstudyText=styled.div`
position: absolute;
width: 200px;
left:80px;
top:60px;
height: 14px;
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;
`
const Money=styled.div`
position: absolute;
width: 40px;
height: 14px;
top:30px;
left:170px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;
`

const MoneyText=styled.div`
position: absolute;
width: 90px;
height: 14px;
top:30px;
left:225px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;
`
const MoneyInfo=styled.div`
position: absolute;
width: 300px;
height: 14px;
left:30px;
top:94px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
letter-spacing: -0.025em;
color: #000000;
`
const MoneyCheck=styled.input`
appearance: none;
position: absolute;
top:88px;
width: 1.3rem;
height: 1.3rem;
border: 1.5px solid  #C2D6C5;
border-radius: 0.35rem;
&:checked {
  border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #FFE2E2;
}

`
const ApplyButton=styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
top:120px;
position: absolute;
width: 303px;
height: 48px;
border-radius: 5px;
border: 1.5px solid #ffffff;
background-color: ${props => props.isActive ? '#FFE2E2' : '#FFEFEF'};
`
const ApplyText=styled.text`
width: 130px;
height: 28px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
text-align: center;
color: ${props => props.isActive ? '#645D5D;' : '#C8C1C1'};

`
const ApplyStudyText=styled.text`
position: absolute;
width: 300px;
height: 14px;
left:50px;
top:174px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
letter-spacing: -0.025em;
color: ${props => props.isActive ? '#958F8F;' : '#ffffff'};
`



function NoneStudyJoin() {
 const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [studyData, setStudyData] = useState({
    studyName: '',
    studyDescription: '',
    place: '',
    recruitedNum: '',
    studyPeriod: '',
    deposit: '',
    hasDepositSystem: false,
  });
  useEffect(() => {
    
    const fetchStudyData = async () => {
      try {
        
        const response = await axios.get('/studies/{study_id}', {
          headers: {
            Authorization: '인증키',
            'Content-Type': 'application/json',
          },
        });

        // API에서 받은 데이터로 state 업데이트
        setStudyData({
          studyName: response.data.study_name,
          studyDescription: response.data.study_detail,
          place: response.data.study_location,
          recruitedNum: response.data.study_current_num,
          studyPeriod: `${response.data.study_start_day}~${response.data.study_deadline}`,
          deposit: response.data.study_deposit,
          hasDepositSystem: response.data.study_deposit > 0,
        });
      } catch (error) {
        console.error('스터디 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchStudyData();
  }, []);

    return (
      <div id="body">
      <div id="iphone-frame">
        <Header></Header>
        <Infotext>스터디 정보</Infotext>
        <Info> 
          <InfoDiv>
          <StudyInfo>{studyData.studyName}</StudyInfo>
          <StudyInfoText>{studyData.studyDescription}</StudyInfoText>
            </InfoDiv></Info>
            <Speak>
            <SpeakText>스터디장에게 하고싶은 한마디</SpeakText>
            <SpeakFrame value={inputValue} onChange={handleInputChange} placeholder="입력해주세요.">
            </SpeakFrame>
            </Speak>

            <Checking>
               <Place>장소</Place>
               <PlaceText>{studyData.place}</PlaceText>
               <Person>모집인원</Person>
               <PersonText>{studyData.recruitedNum}명</PersonText>
               <Dstudy>스터디 기간</Dstudy>
               <DstudyText>{studyData.studyPeriod}</DstudyText>
               <Money>예치금</Money>
               <MoneyText>{studyData.deposit}원</MoneyText>
               <MoneyInfo>해당 스터디에는 예치금 제도가 {studyData.hasDepositSystem ? '있습니다' : '없습니다'}. 확인하셨나요?</MoneyInfo>
               <MoneyCheck type="checkbox"    checked={isChecked}  onChange={handleCheckboxChange}></MoneyCheck>
               <ApplyButton onClick={()=>{navigate("/UnopenedCourses");}} isActive={isChecked}  >
                <ApplyText>스터디 지원하기</ApplyText>
               </ApplyButton>
               <ApplyStudyText isActive={isChecked} >스터디 참여가 확정되면 알림을 보내드려요!</ApplyStudyText>
            </Checking>
           
            
            <Nav></Nav>
      </div>
      </div>
     
    );
  }
  
  export default  NoneStudyJoin;
  