import './StudyApplicant.css';
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';
import temper from '../../img/temper.png';


function StudyApplicant(){
    return (
        <div>
            <Header/>
            <h4 className="pageName">스터디 신청자</h4>
            <div className="under"> </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="72" viewBox="0 0 71 71" fill="none">
            <path d="M70.5 35.5C70.5 54.83 54.83 70.5 35.5 70.5C16.17 70.5 0.5 54.83 0.5 35.5C0.5 16.17 16.17 0.5 35.5 0.5C54.83 0.5 70.5 16.17 70.5 35.5Z" stroke="#BFBFBF"/>
            </svg>
            </div>
            <br/><br/>
            <div className='temper' >
            <img style={{width:'304px', height:'41px'}} src={temper}/>
            </div>

            <br/><br/>
            <div className='textContainer'>
                <div><b>닉네임</b></div>
                <div style={{marginTop: '5px'}}>박멋사</div>
                <br/>
                
                <div><b>전공</b></div>
                <div style={{marginTop: '5px'}}>정보보호학과</div>
                <br/>
                
                <div><b>수강과목</b></div>
                <div style={{marginTop: '5px'}}>컴퓨터 알고리즘 Java</div>
                <br/>

                <div><b>스터디 경험</b></div>
                <br/>
                
                <div>스터디장에게 한 마디</div>
                <div className='appintro'>
                <p style={{marginTop: '5px'}} >저는 정말 열심히 할 자신이 있습니다!</p></div>



            </div>




            <NavD/>
        </div>
    );
}
export default StudyApplicant;