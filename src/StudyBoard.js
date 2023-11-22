import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonC from "./BoradComponent/ButtonC";
import axios from "axios";

const TitleLineA = styled.div`
  position: absolute;
  width: 100%;
  height: 0px;
  top: 125px;
  border: 1px solid #dddddd;
`;
const TitleA = styled.button`
  position: absolute;
  width: 50%;
  height: 20px;
  top: 96px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 1000;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  background: white;
  border: none;
`;
const TitleB = styled.button`
  position: absolute;
  width: 50%;
  height: 20px;
  left: 50%;
  top: 96px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 1000;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  background: white;
  border: none;
`;
const TitleLineB = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 240px;
  top: 123px;
  border: 2.5px solid #547980;
  border-radius: 10px;
`;
const Main = styled.div`
  position: absolute;
  width: 350px;
  height: 580px;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  background: #ffffff;
`;

function StudyBoard() {
  const [studyData, setStudyData] = useState([]);

  useEffect(() => {
    const fetchStudyData = async () => {
      try {
        const response = await axios.get('/studies/{subject_id}/all', {
          headers: {
            Authorization: 'Your_Auth_Key',
            'Content-Type': 'application/json',
          },
        });

        setStudyData(response.data);
      } catch (error) {
        console.error('Error fetching study data:', error);
      }
    };

   
    fetchStudyData();
  }, []);

  return (
    <div>
      <TitleLineA />
      <TitleA>과목 게시판</TitleA>
      <TitleLineB></TitleLineB>
      <TitleB>스터디 게시판</TitleB>
      <Main>
        {studyData.map(study => (
          <ButtonC
            key={study.study_id}
            study_name={study.study_name}
            is_offline={study.is_offline}
            study_recruited_num={study.study_recruited_num}
          />
        ))}
      </Main>
    </div>
  );
}

export default StudyBoard;
