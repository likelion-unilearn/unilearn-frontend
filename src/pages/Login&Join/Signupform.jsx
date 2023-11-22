import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import unilearnLogo from '../../img/unilearn.png'; 
import backButton from '../../img/back.png';

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      // 비밀번호 일치하는 경우
      console.log('아이디:', username);
      console.log('비밀번호:', password);
      console.log('이름:', fullName);
      console.log('닉네임:', nickname);
      navigate('/SignupVerification'); // 다음 페이지로 이동
    }
  };

  const handleBackClick = () => {
    console.log('뒤로 가기 버튼 클릭됨');
    navigate('/Login'); 
  };

  return (
    <Index>
      <Top>
        <UnilearnImage src={unilearnLogo} alt="Unilearn" />
        <BackButton onClick={handleBackClick} />
      </Top>
      <p style={{
        position: 'absolute',
        width: '59px',
        height: '19px',
        left: 'calc(50% - 59px/2 + 0.5px)',
        top: '138px',
        fontFamily: 'Abhaya Libre ExtraBold',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '16px',
        lineHeight: '19px',
        textAlign: 'center',
        color: '#231E1E',
      }}>회원가입</p>
      <div className="login-container">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <div className="form-login">
            <input
              type="text"
              id="username"
              placeholder="아이디"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-password">
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-password">
            <input
              type="password"
              id="confirmPassword"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="form-login">
            <input
              type="text"
              id="fullName"
              placeholder="이름"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="form-login">
            <input
              type="text"
              id="nickname"
              placeholder="닉네임"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
          {passwordMismatch && (
            <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>
          )}
          <button type="submit">다음</button>
        </form>
      </div>

    </Index>
  );
};

export default SignUpForm;
