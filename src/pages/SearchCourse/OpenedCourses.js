import styled from 'styled-components';
import ButtonA from "../../BoradComponent/ButtonA";
import simg from '../../img/search.png';
import plus from '../../img/plusA.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../HeaderNavComponent/Header";
import NavB from "../../HeaderNavComponent/NavB";
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

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

const Dropdown = styled.select`
  border:none;
  color: #4A4040;
  outline: none;
  background-size: 20px 20px;
  font-size: 12px;
  option {
    padding: 8px;
    border:none;
    color: #A09292;
    font-size: 12px;
    background-color: #fff;
  };
`;

const Line=styled.div`
width: 100%;
height: 1.5px;
top: 50px;
background-color: #FFD6D6;
margin-top: 30px; 
`
const FrameA2=styled.div`
position: absolute;
width: 350px;
height: 580px;
left: 50%;
transform: translateX(-50%);
top: 136px;
background: #FFFFFF;
border: 2px solid #FFD6D6;
border-radius: 10px;
max-height: 580px;
overflow-y: auto; 
&::-webkit-scrollbar {
  width:0px;
`

const FrameA1=styled.div`

`
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
`
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
background: #FFEFEF;
border-radius: 5px 0px 0px 5px;
border:none;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
color: #000000;
`
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
background: #E7E7E7;
border-radius: 0px 5px 5px 0px;
border:none;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
color: #000000;
`
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

function OpenedCourses() {
  const [filter, setFilter] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('subjectName');
  const [courseData, setCourseData] = useState([]);
  // const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    // if (!isLoggedIn) {
    //   console.log('isLoggedIn:', isLoggedIn);

    //   navigate('/Login');
    // }
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/courseOfferings`);
        setCourseData(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchData();
  }, []);


  const filteredData = () => {
    return courseData.filter(course => {
      return (
        course[selectedFilter].toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

    return (
      <div id="body">
      <div id="iphone-frame">
        <Header></Header>
        <FrameA1>
          <FrameText>서울여자대학교</FrameText>
          <FrameButtonA>개설 과목</FrameButtonA>
          <FrameButtonB onClick={()=>{navigate("/UnopenedCourses");}}>비개설 과목</FrameButtonB>
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
          <Dropdown onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value="subjectName">과목명</option>
            <option value="subjectProfessor">교수명</option>
            <option value="subjectMajor">개설학과</option>
            <option value="subjectYear">개설연도</option>
          </Dropdown>
        </SearchContainer>
          <Line>
          </Line>
          {/* {filteredData().map(course => (
          <ButtonA key={course.id}>
            <p>subjectName= {course.subject_name}</p>
            <p>professorName={course.subject_professor}</p>
          </ButtonA>
         ))} */}
         <ButtonA></ButtonA>
          </FrameA2>
          <PlusButton/>
          <NavB></NavB>
      </div>
      </div>
    );
  }
  
  export default OpenedCourses;
  