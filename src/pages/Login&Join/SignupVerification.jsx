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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: absolute;
  width: 200px;
  height: auto;
  left: calc(50% - 240px/2 - 59px);
  top: 296px;
`;

const Input2Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: absolute;
  width: 200px;
  height: auto;
  left: calc(50% - 240px/2 - 59px);
  top: 350px;
  margin-top:10px;
`;

const Input = styled.input`
  width: 240px;
  height: 47px;
  font-family: 'Almarai';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  text-align: center;
  color: #BABABA;
  background: #F4F4F4;
  border-radius: 5px;
  border: none; 
`;

const SubmitButton = styled.button`
  display: ${props => (props.isCodeSent ? 'none' : 'block')};
  width: 240px;
  height: 47px;
  margin-top:10px;
  background: #E8EFE9;
  border-radius: 5px;
  border:none;
  
`;

const ConfirmButton = styled.button`
  display: block;
  width: 96px;
  height: 48px;
  background: ${props => (props.isClicked ? '#547980' : '#E8EFE9')};
  border-radius: 5px;
  border:none;
  position: absolute;
  top: 20px;
  left: calc(50% - 96px/2 + 181px);
  cursor: ${props => (props.isClicked ? 'default' : 'pointer')}; // 클릭된 후에는 커서가 바뀌도록
`;

// AuthButton 컴포넌트
const AuthButton = styled.button`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 240px;
  height: 47px;
  margin-top: 10px;
  background: #547980;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 16px;
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

const SignupVerification = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isAuthVisible, setIsAuthVisible] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSendVerificationCode = () => {
    setIsCodeSent(true);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
    setIsCodeVerified(true);
  };

  const handleVerifyCode = () => {
    setIsClicked(true);
    setIsAuthVisible(true);
    setIsVerified(true);
  };

  const handleBackClick = () => {
    navigate('/Signupform'); 
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
      }}>학교인증</p>
      <div className="login-container">
        <form className="login-form">
          <InputContainer>
            <Input
              type="text"
              placeholder="이메일을 입력하세요"
              value={username}
              onChange={handleUsernameChange}
            />
             <p style={{
                position: 'absolute',
                width: '112px',
                height: '22px',
                left: '250px',
                top: '10px',
                fontFamily: 'Almarai',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '22px',
                lineHeight: '22px',
                textAlign: 'center',
                color: '#000000',
              }}>@swu.ac.kr</p>
            <SubmitButton
              type="button"
              onClick={handleSendVerificationCode}
              disabled={!username}
              isCodeSent={isCodeSent}
            >
              전송
            </SubmitButton>
          </InputContainer>
          {isCodeSent && (
            <Input2Container>
              <Input
                type="text"
                placeholder="인증번호 입력"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
              />
              {isCodeVerified && !isVerified && (
      <ConfirmButton
        type="button"
        onClick={handleVerifyCode}
        isClicked={isClicked}
        disabled={!isCodeVerified}
      >
        확인
      </ConfirmButton>
    )}
           
                  {isCodeVerified && (
        <AuthButton
          onClick={handleVerifyCode}
          visible={isCodeVerified}
        >
          인증하기
        </AuthButton>
      )}
            </Input2Container>
          )}
        </form>
      </div>
    </Index>
  );
};

export default SignupVerification;
