import './RecruitStudymember.css'
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';
import {useNavigate} from "react-router-dom";
import emailCer from "../../img/emailCer.png";

function RecruitStudymember(){
    let navigate = useNavigate();
    return(
        <div>
            <Header/>
            <h4 className="pageName">스터디원 모집</h4>
            <div className="under"> </div>
            <div style={{textAlign:"center", fontWeight:'bold', marginTop:'15px'}}>취업을 위한 리액트 스터디</div>
            <div className='detail_box'>

                <div style={{marginLeft:'20px', marginTop:'5px'}} className='user1'>
                    신청자<img style={{width:'93px', height:'23px'}} src={emailCer}></img>
                </div>
                <button onClick={()=>{navigate("/StudyApplicant");}}
                className='infoCheckBtn'>개인정보확인</button>
                
                <div style={{marginLeft:'20px', marginTop:'-15px'}}>
                <div className='nickname'>닉네임: 푸바오</div>
                <div className='school'>학교: 서울여자대학교</div>
                <div className='major1'>전공: 디지털미디어학과</div>

            </div>

                
            </div>


            <NavD/>
        </div>
    );
}
export default RecruitStudymember;