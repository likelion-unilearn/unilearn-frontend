import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import styled from "styled-components";

import unilearnLogo from '../../img/unilearn.png'; // 로고 이미지 가져오기
import backButton from '../../img/back.png';

const BackButton = ({ onClick }) => {
    return (
      <img
        src={backButton}
        alt="Back"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
    );
  };
  
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
      // navigate('/signup'); // 실제 회원가입 페이지로 이동하는 코드
    };
  
    const handleBackClick = () => {
      // 뒤로가기 기능을 수행할 코드를 작성합니다.
      // 예를 들어, navigate('/') 등으로 이전 페이지로 이동할 수 있습니다.
      console.log('뒤로 가기 버튼 클릭됨');
      // navigate('/');
    };
  
    return (
      <div className="index">
        <div className="top">
          <div className="backbutton">
            <BackButton onClick={handleBackClick} />
            <span>로그인</span>
          </div>
        </div>
        <img className="unilearn" alt="Unilearn" src={unilearnLogo} />
        <div className="login-container">
          <form className="login-form1" onSubmit={handleFormSubmit}>
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
            </form>
            <form className="login-form">
            <button type="submit">로그인</button>
          </form>
          <p className="signup-link">
            <span>모각공 계정이 없으신가요?</span>
            <span onClick={handleSignupClick} className="text-wrapper-4">
              회원가입
            </span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Loginform;