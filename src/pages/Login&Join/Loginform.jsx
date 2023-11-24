import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import unilearnLogo from '../../img/unilearn.png'; 
import backButton from '../../img/back.png';

const BackButton = ({ onClick }) => {
  const StyledBackButton = styled.img`
    width: 7px;
    height: 14px;
    left: 27px;
    top: 66px;
    cursor: pointer;
    position: absolute;
  `;
  
  return (
    <StyledBackButton src={backButton} alt="Back" onClick={onClick} />
  );
};
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
  position: absolute;
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
`;


const Loginform = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('아이디:', username);
    console.log('비밀번호:', password);
  };

  const handleSignupClick = () => {
    console.log('회원가입 페이지로 이동');
    navigate('/signupform'); // 실제 회원가입 페이지로 이동하는 코드
  };

  const handleBackClick = () => {
    console.log('뒤로 가기 버튼 클릭됨');
    // navigate('/');
  };

  return (
    <Index>
      <Top>
        <UnilearnImage src={unilearnLogo} alt="Unilearn" />
        <BackButton onClick={handleBackClick} />
      </Top>
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
