import React, { useState, useEffect } from 'react';
import axios from 'axios';
import unilearnLogo from '../../img/unilearn.png'; 
import backButton from '../../img/back.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  height: 71px;    
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border: 1px solid #eeeef0;
`;

const UnilearnImage = styled.img`
width: 115px;
height: 30px;
position: relative;
margin-top: 13px;
left: 50%;
transform: translateX(-50%);
`;

const StyledBackButton = styled.img`
  position: absolute;
  width: 7px;
  height: 14px;
  left: 27px;
  top: 26px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const SurveySubmit = () => {
  const navigate = useNavigate();
  const [surveyData, setSurveyData] = useState(null);

  const placeholderSurveyData = {
    title: '운영체제 뿌셔뿌셔',
    questions: [
      {
        id: 1,
        title: '김멋사',
        options: [
          { id: 1, text: '과제 제출은 성실하였는가?' },
          { id: 2, text: '과제를 시간 안에 제출하였는가?' },

        ],
      },
      {
        id: 2,
        title: '김사월',
        options: [
          { id: 3, text: '과제 제출은 성실하였는가?' },
          { id: 4, text: '과제를 시간 안에 제출하였는가?' },
       
        ],
      },
   
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setSurveyData(placeholderSurveyData);
      }, 1000);
    };

    fetchData();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSurveySubmit = (selectedOptions) => {
  
  };

  return (
    <Index>
      <Top>
        <UnilearnImage src={unilearnLogo} alt="Unilearn" />
        <BackButton onClick={handleBackClick} />
      </Top>
      <Title>설문조사</Title>
      <FormContainer>
        {surveyData ? (
          <form onSubmit={handleSurveySubmit}>
            <h2>{surveyData.title}</h2>
            {surveyData.questions.map((question) => (
              <div key={question.id}>
                <h3>{question.title}</h3>
                {question.options.map((option) => (
                  <label key={option.id}>
                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={option.id}
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            ))}
            <button type="submit">Submit Survey</button>
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </FormContainer>
    </Index>
  );
};

export default SurveySubmit;