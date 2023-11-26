import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import unilearnLogo from '../../img/unilearn.png'; 
import { useAuth } from '../../AuthContext';


const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

const SignupLink = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #000000;
  margin-top: 10%;
`;

const SignupText = styled.span`
  color: #748c70;
  cursor: pointer;
`;
const LogoImage = styled.img`
position: absolute;
width: 150px;
height: 43px;
left: 121px;
top: 256px;
`;


const Loginform = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLoginIdChange = (event) => {
    setLoginId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "http://15.164.143.187:8080/login",{
              params:{
            "loginId": "user1234",
            "password": "qwer1234"
        }},{
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
      
      console.log('로그인 성공:', response.data);
      login();
      // 로그인 성공 시 어떤 작업 수행
      // 예를 들어 로그인 성공 시 페이지 이동
      navigate('/Mainpage');
    } catch (error) {
      console.error('로그인 실패:', error);

      if (error.response) {
        console.error('응답 데이터:', error.response.data);
      }
      // 로그인 실패 시 어떤 작업 수행
    }
  };

  const handleSignupClick = () => {
    console.log('회원가입 페이지로 이동');
    navigate('/signupform');
  };


  return (
    <Index>
      <FormContainer>
        <LogoImage src={unilearnLogo} alt="Unilearn" />
        <LoginForm onSubmit={handleFormSubmit}>
          <InputField
            type="text"
            id="username"
            placeholder="아이디"
            value={loginId}
            onChange={handleLoginIdChange}
          />
          <InputField
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <SubmitButton type="submit">로그인</SubmitButton>
        </LoginForm>
        <SignupLink>
          <span>모각공 계정이 없으신가요?</span>
          <SignupText onClick={handleSignupClick}>회원가입</SignupText>
        </SignupLink>
      </FormContainer>
    </Index>
  );
};

export default Loginform;
