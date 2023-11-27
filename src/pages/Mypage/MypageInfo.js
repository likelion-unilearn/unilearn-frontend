import './MypageInfo.css';
import temper from '../../img/temper.png';
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';
import {useNavigate} from "react-router-dom";



function MypageInfo(){
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <h4 className="pageName">마이페이지</h4>
            <div className="under"> </div>
            <div className="border" style={{width: '390.001px', height: '1px', background: '#E1E9E2'}}></div>


            <div className="info">
                <div className="photo">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="72" viewBox="0 0 71 71" fill="none">
                <path d="M70.5 35.5C70.5 54.83 54.83 70.5 35.5 70.5C16.17 70.5 0.5 54.83 0.5 35.5C0.5 16.17 16.17 0.5 35.5 0.5C54.83 0.5 70.5 16.17 70.5 35.5Z" stroke="#BFBFBF"/>
                </svg>
                <button className="recer">재인증</button>
                </div>
                <div className="profile">
                    <p className="user">김멋사</p>
                    <p className="major">소프트웨어융합학과</p>
                    <p className="academicNumber">20학번</p>
                </div>
            </div>
            
            <br/>

            <div className='temper' >
            <img style={{width:'304px', height:'41px'}} src={temper}/>
            </div>
            <br/>

            <div className="container">
            <div className="introduce-text"></div>
            <button className="modify">수정</button>
            </div>
            <div className="introduce">
            <p style={{marginLeft:'20px', marginRight:'20px'}}>현재 기업 코딩 스터디 및 C++ 기초 단기완성 스터디에 참여 중입니다!</p>
            </div>

            <button className="studyList" onClick={()=>{navigate("/MypageStudy");}}>스터디 목록</button>
            <button className="subjectList" onClick={()=>{navigate("/SubjectList");}}>수강 과목</button>
            <button className="studyRecruit" onClick={()=>{navigate("/RecruitStudy");}}>스터디 모집</button>

        <NavD/>
        </div>

    );
}
export default MypageInfo;