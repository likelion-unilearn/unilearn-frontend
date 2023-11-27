import './SubjectList.css';
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';
import {useNavigate} from "react-router-dom";
import plusB from "../../img/plusB.png"

function SubjectList(){
let navigate = useNavigate();

    return(
        <div>
            <Header/>
            <h4 className="pageName">수강과목 목록</h4>
            <div className="under"> </div>

            <div className='subject'>
                <div style={{marginLeft:'50px',marginTop:'20px', marginBottom:'10px'}}>과목명: 소프트웨어와 창의적사고 </div>
                <div style={{marginLeft:'50px'}}>기간: 2023.03.02~ 2023.06.29</div>
            </div>
            <br/>

            <div className='subject'>
            <div style={{marginLeft:'50px',marginTop:'20px', marginBottom:'10px'}}>과목명: 웹표준언어 </div>
                <div style={{marginLeft:'50px'}}>기간: 2022.03.02~ 2022.06.29</div>
            </div>
            <br/>


            <button 
            onClick={()=>{navigate("/SubjectRegist");}} 
            className='addBtn'>
            <img src={plusB}></img>
            </button>
            <NavD/>
        </div>
    );
}
export default SubjectList;