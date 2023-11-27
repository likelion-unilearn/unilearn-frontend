import './RecruitStudymember.css'
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';

function RecruitStudymember(){
    return(
        <div>
            <Header/>
            <h4 className="pageName">스터디원 모집</h4>
            <div className="under"> </div>
            <div style={{textAlign:"center", fontWeight:'bold', marginTop:'15px'}}>취업을 위한 리액트 스터디</div>
            <div className='detail_box'>

                <div style={{marginLeft:'20px', marginTop:'5px'}} className='user1'>신청자</div>
                <button className='infoCheckBtn'>개인정보확인</button>
                
                <div style={{marginLeft:'20px', marginTop:'-5px'}}>
                <div className='nickname'>닉네임: </div>
                <div className='school'>학교: </div>
                <div className='major1'>전공: </div>

            </div>

                
            </div>


            <NavD/>
        </div>
    );
}
export default RecruitStudymember;