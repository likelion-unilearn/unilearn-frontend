import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ButtonB from "../../BoradComponent/ButtonB";
import simg from '../../img/search.png';
import plus from '../../img/plusB.png';

const SearchContainer = styled.div`
  position: absolute;
  top:2px;
  left:4px;
  width: 350px;
`;

const SearchInput = styled.input`
  width: 70%;
  padding: 5px;
  outline: none;
  box-shadow:none;
  border:none;
`;

const SearchButton = styled.button`
  padding:11px 6px 10px 7px;
  border:none;
  background-color: white;
  cursor: pointer;
  background-image: url(${simg}); 
  background-size: 15px;
  background-repeat: no-repeat;
`;

const Line=styled.div`
  width: 100%;
  height: 1.5px;
  top: 50px;
  background-color: #C2D6C5;
  margin-top: 30px; 
`;

const FrameA2=styled.div`
  position: absolute;
  width: 350px;
  height: 580px;
  left: 50%;
  transform: translateX(-50%);
  top: 136px;
  background: #FFFFFF;
  border: 2px solid #C2D6C5;
  border-radius: 10px;
  max-height: 580px;
  overflow-y: auto; 
  &::-webkit-scrollbar {
  width:0px;
`;

const FrameA1=styled.div``;

const FrameText=styled.div`
  position: absolute;
  width: 130px;
  height: 22px;
  left: 25px;
  top: 103px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #575C62;
`;

const FrameButtonA=styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 85px;
  height: 28px;
  left: 201px;
  top: 102px;
  background:#E7E7E7;
  border-radius: 5px 0px 0px 5px;
  border:none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
`;

const FrameButtonB=styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 85x;
  height: 28px;
  left: 286px;
  top: 102px;
  background: #C2D6C5;
  border-radius: 0px 5px 5px 0px;
  border:none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
`;

const PostButton=styled.button`
  width: 107px;
  height: 36px;
  background: #C2D6C5;
  border: 2px solid white;
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.024em;
`;
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

function UnopenedCourses() {
  const [filter, setFilter] = useState('');
  const [studyData, setStudyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/studies/freedom/all', {
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

    fetchData();
  }, []);

  const filteredData = () => {
    return studyData.filter(study => {
      return (
        study['study_name'].toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  return (
    <div>
      <FrameA1>
        <FrameText>서울여자대학교</FrameText>
        <FrameButtonA>개설 과목</FrameButtonA>
        <FrameButtonB>비개설 과목</FrameButtonB>
      </FrameA1>
      <FrameA2>
        <SearchContainer>
          <SearchButton></SearchButton>
          <SearchInput
            type="text"
            placeholder="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </SearchContainer>
        <Line></Line>
         {filteredData().map(study => (
          <ButtonB
            key={study.study_id}
            study_name={study.study_name}
            is_offline={study.is_offline}
            study_recruited_num={study.study_recruited_num}
          />
        ))}
      </FrameA2>
      <PlusButton></PlusButton>
    </div>
  );
}

export default UnopenedCourses;
