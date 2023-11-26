import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import unilearnLogo from '../../img/unilearn.png'; 
import backButton from '../../img/back.png';

const Title = styled.p`
  position: absolute;
  width: 59px;
  height: 19px;
  left: calc(50% - 59px/2 + 0.5px);
  top: 138px;
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #231E1E;
`;
const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Top = styled.div`
  position: absolute;
  width: 390px;
  height: 102px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border: 1px solid #eeeef0;
`;

const UnilearnImage = styled.img`
  position: absolute;
  width: 99px;
  height: 25px;
  left: 148px;
  top: 55px;
  font-family: 'Oleo Script Swash Caps';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 41px;
  color: #547980;
`;

const StyledBackButton = styled.img`
  position: absolute;
  width: 7px;
  height: 14px;
  left: 27px;
  top: 66px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top : 200px;
`;

const InputField = styled.input`
  width: 100%;
  height: 50px;
  padding: 1px 6px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  background-color: #e7e7e7;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center; 
`;
const SubmitButton = styled.button`
  width: 90%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #547980;
  background-color: #547980;
  font-size: 16px;
  color: #eeeef0;
  cursor: pointer;
  margin-top: 15px;
`;

const BackButton = ({ onClick }) => {
  return (
    <StyledBackButton
      src={backButton}
      alt="Back"
      onClick={onClick}
    />
  );
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      try {
        const response = await axios.post('http://localhost:8080/signup', {
          loginId: username,
          Password: password,
          Email: '92chanum@swu.ac.kr', 
          Username: fullName,
          Nickname: nickname,
        });

        console.log('회원가입 성공:', response.data);
       
        navigate('/SignupVerification');
      } catch (error) {
        console.error('회원가입 실패:', error);
     
      }
    }
  };

  const handleBackClick = () => {
    console.log('뒤로 가기 버튼 클릭됨');
    navigate('/Login'); 
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://15.164.143.187:8080/signup');
      console.log('응답 데이터:', response.data);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };
  fetchData();

  return (
    <Index>
      <Top>
        <UnilearnImage src={unilearnLogo} alt="Unilearn" />
        <BackButton onClick={handleBackClick} />
      </Top>
      <Title>회원가입</Title>
   <FormContainer>
        <LoginForm onSubmit={handleFormSubmit}>
          <InputField
            type="text"
            id="username"
            placeholder="아이디"
            value={username}
            onChange={handleUsernameChange}
          />
          <InputField
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
           <InputField
              type="password"
              id="confirmPassword"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          <InputField
              type="text"
              id="fullName"
              placeholder="이름"
              value={fullName}
              onChange={handleFullNameChange}
            />
          <InputField
              type="text"
              id="nickname"
              placeholder="닉네임"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </LoginForm>
          {passwordMismatch && (
            <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>
          )}
           <SubmitButton type="submit">다음</SubmitButton>
      
          </FormContainer>
    </Index>

  );
};

export default SignUpForm;
