import './ManageStudymember.css'
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';

function ManageStudymember(){
    return(
        <div>
            <Header/> 
            <h4 className="pageName">스터디원 관리</h4>
            <div className="under"> </div>
            <div className='studytitle' style={{textAlign:"center", fontWeight:'bold', marginTop:'15px'}}>취업을 위한 리액트 스터디</div>
            <div className='detail_box'>
                <div style={{marginLeft:'20px', marginTop:'10px'}}>스터디원 이름</div>
                <div style={{}}>
                <button className='dropBtn'>탈퇴</button>
                </div>
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
export default ManageStudymember;