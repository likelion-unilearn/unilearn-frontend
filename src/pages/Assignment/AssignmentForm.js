import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components';
import Nav from "../../HeaderNavComponent/Nav";
import Header from "../../HeaderNavComponent/Header";
const Title = styled.p`
  width: 82px;
  height: 18px;
  left: 157px;
  top: 90px;
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #231E1E;
  margin-bottom: 20px;
  margin-top:30px;

  &:after {
    content: '';
    position: absolute;
    width: 69px;
    height: 2px;
    left: 158px;
    top: 126px;
    background: #C2D6C5;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Title2 = styled.p`
  width: 82px;
  height: 18px;
  left: 157px;
  top: 90px;
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  color:#FF9A9A;
  margin-bottom: 20px;
  margin-top:30px;

  &:after {
    content: '';
    position: absolute;
    width: 69px;
    height: 2px;
    left: 158px;
    top: 126px;
    background: #C2D6C5;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Top = styled.div`
width: 390px;
height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`;
const Middle = styled.div`
width: 390px;
height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`;
const IphoneFrame = styled.div`
  width: 390px;
  height: 844px;
  background: #ffffff;
  position: relative;
  justify-content: center;
  align-items: center;
`;
const AssignmentContainer = styled.div`
  width: 390px;
  height: 570px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
  margin-top: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.p`
  font-family: 'Abhaya Libre ExtraBold';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #231E1E;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  border: none;
  padding: 5px;
  text-align: center;
  width: 100%;
`;



const ImageUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  margin-top:35px;

  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & > span {
    margin-top: 10px;
    font-size: 14px;
    color: #555;
  }
`;


const HiddenInput = styled.input`
  display: none;
`;


const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 195px;
  height: 139px;
  margin: 0 auto; /* Added margin to horizontally center */
  background: #FFFFFF;
  border: 0.349621px dashed #A7A5A5;
  box-shadow: 0px 0px 3.99567px rgba(0, 0, 0, 0.25);
  border-radius: 5.9935px;
`;


const TextAreaField = styled.textarea`
  width: 100%;
  height: 100px;
  resize: vertical;
  padding: 5px;
  border:none;
//   width: 340px;
// height: 169px;

background: rgba(84, 121, 128, 0.1);
border-radius: 6px;
`;

const SubmitButton = styled.button`
  padding: 10px 120px;
  background-color: #9EB7AB;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #547980;
  }
`;
const AssignmentForm = () => {
  const [studyName, setStudyName] = useState('');
  const [title, setTitle] = useState('');
  const [assignmentName, setAssignmentName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [file, setFile] = useState(null);
  

  useEffect(() => {
    //API
    //임의데이터
    const fetchedData = {
      studyName: 'React Study Group',
      title: 'React Hooks',
      assignmentName: 'Assignment 3',
      deadline: '2023-12-01',

    };

    setStudyName(fetchedData.studyName);
    setTitle(fetchedData.title);
    setAssignmentName(fetchedData.assignmentName);
    setDeadline(fetchedData.deadline);
   
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 넣어 한 번만 실행되도록 설정
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

 //이미지 미리보기
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const [imagePreview, setImagePreview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 데이터 처리,전송로직
    console.log({
      studyName,
      title,
      assignmentName,
      deadline,
      description,
      imageFile,
      file,
    });
  };

  return (
    <IphoneFrame>
      <Header />
      <Top>
        <Title>과제 제출</Title>
      </Top>
      <AssignmentContainer>
        <form onSubmit={handleSubmit}>
          <FormField>
            <SectionTitle>스터디명</SectionTitle>
            <InputField type="text" value={studyName} onChange={(e) => setStudyName(e.target.value)} />
          </FormField>
          <FormField>
            <SectionTitle>제목</SectionTitle>
            <InputField type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormField>
          <FormField>
            <SectionTitle>과제명</SectionTitle>
            <InputField type="text" value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)} />
          </FormField>
          <FormField>
            <SectionTitle>제출기한</SectionTitle>
            <InputField type="text" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            <hr style={{ marginTop: '5px', border: 'none', borderBottom: '1px solid #ccc' }} />
          </FormField>
          <ImageContainer>
  <ImageUpload htmlFor="fileInput">
    <img src={imagePreview || `${process.env.PUBLIC_URL}/images/ImageButton.png`} alt="Custom Button" />
    <span>이미지를 추가해주세요</span>
  </ImageUpload>
  <HiddenInput id="fileInput" type="file" accept="image/*" onChange={handleImageChange} />
</ImageContainer>
          <FormField>
            <SectionTitle>내용</SectionTitle>
            <TextAreaField value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormField>
          <FormField>
            <SectionTitle>파일 첨부</SectionTitle>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </FormField>
          <SubmitButton type="submit">제출</SubmitButton>
        </form>
      </AssignmentContainer>
      <Nav />
    </IphoneFrame>
  );
};

export default AssignmentForm;