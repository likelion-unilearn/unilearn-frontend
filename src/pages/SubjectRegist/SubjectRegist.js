import './SubjectRegist.css'

function SubjectRegist(){
    return(
        <div>
            <h4 className="pageName">수강과목</h4>
            <div className="under"> </div>

            <div style={{textAlign:'center', fontWeight:'bolder'}}><b style={{color:'#9EB7AB'}}>수강 과목</b>에 대한 정보를 입력해주세요.</div>
            <br/>
            <div style={{textAlign:'center'}}>
                <b>개설학과</b>&nbsp;
                <input
                type="text"
                className="input"
                placeholder="개설학과를 입력해주세요"
                ></input>
            </div><br/><br/>

            <div style={{textAlign:'center'}}>
                <b>수강년도</b>&nbsp;
                <input
                type="text"
                className="input"
                placeholder="수강년도를  입력해주세요 "
                ></input>
            </div><br/><br/>

            <div style={{textAlign:'center'}}>
                <b>수강학기</b>&nbsp;
                <input
                type="text"
                className="input"
                placeholder="수강학기를 입력해주세요"
                ></input>
            </div><br/><br/>

            <div style={{textAlign:'center'}}>
                <b>교수님</b>&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                type="text"
                className="input"
                placeholder="교수님 성함을 입력해주세요"
                ></input>
            </div><br/><br/>

            <div style={{textAlign:'center'}}>
                <b>과목명</b>&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                type="text"
                className="input"
                placeholder="과목명을 입력해주세요"
                ></input>
            </div>
            
            <button className='registBtn'>수강 정보 등록하기</button>
        </div>

        
    );
}
export default SubjectRegist;