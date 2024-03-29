import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonC from "../../BoradComponent/ButtonC";
import axios from "axios";
import plus from '../../img/plusB.png';
import Header from "../../HeaderNavComponent/Header";
import NavB from "../../HeaderNavComponent/NavB";
import {useNavigate} from "react-router-dom";



const PlusButton=styled.button`
position: absolute;
top:730px;
left:340px;
background-image: url(${plus}); 
padding:20px;
border:none;
background-color: white;
cursor: pointer;
background-size: 30px;
background-repeat: no-repeat;
`

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
  height: 570px;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  background: #ffffff;
  max-height: 570px;
  overflow-y: auto; 
  &::-webkit-scrollbar {
  width:0px;
`;


function StudyBoard() {
  const navigate = useNavigate();
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
    <div id="body">
    <div id="iphone-frame">
      <Header></Header>
      <TitleLineA />
      <TitleA onClick={()=>{navigate("/ClassBoard");}}>과목 게시판</TitleA> 
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
        <ButtonC></ButtonC>
      </Main>
      <PlusButton></PlusButton>
      <NavB></NavB>
      </div>
      </div>
  );
}

export default StudyBoard;
