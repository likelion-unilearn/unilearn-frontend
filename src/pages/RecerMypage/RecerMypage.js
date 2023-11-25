import './RecerMypage.css';
import Header from '../../HeaderNavComponent/Header';
import Nav from '../../HeaderNavComponent/Nav';

function RecerMypage(){
    return(
        <div>
            <Header/>
            <h4 className="pageName">학생증인증</h4>
            <div className="under"> </div>
            <div className="border" style={{width: '390.001px', height: '1px', background: '#E1E9E2'}}></div>

            <div className='text-container'>
            <div><b style={{color:'#434343'}}>안전한 사용을 위해</b></div>
            <div><b style={{color:'#9EB7AB'}}>학과, 학번을 입력</b><b style={{color:'#434343'}}>하고 학생증을 찍어서 올려주시면
            <br/>운영자의 승인을 거치고 인증됩니다.</b> </div>
            </div>

            <br/>
            <div className='cer1'>
            <div style={{textAlign:'left', marginLeft:'40px', fontWeight:'bold'}}>학과</div>
            <input
                type="text"
                className="majorInput"
                placeholder="학과를 입력해주세요"
                ></input>
            </div>
            <br/>

            <div className='cer1'>
            <div style={{textAlign:'left', marginLeft:'40px', fontWeight:'bold'}}>학번</div>
            <input
                type="text"
                className="academicNumInput"
                placeholder="학번을 입력해주세요"
                ></input>
            </div>
            <br/><br/>

            <div className='studentCard'>학생증을 올려주세요</div>

            <br/><br/>
            <button className='approvalBtn'>승인신청 하기</button>

        <Nav/>
        </div>

    );
}
export default RecerMypage;