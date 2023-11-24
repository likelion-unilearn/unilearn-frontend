import './SubjectList.css';

function SubjectList(){
    return(
        <div>
            
            <h4 className="pageName">수강과목 목록</h4>
            <div className="under"> </div>

            <div className='subject'>
                <div></div>
            </div>
            <br/>

            <div className='subject'>
                <div></div>
            </div>
            <br/>

            <div className='subject'>
                <div></div>
            </div>
            <br/>

            <div className='subject'>
                <div></div>
            </div>
            <br/>


            <button className='addBtn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 5.625C15.5178 5.625 15.9375 6.04473 15.9375 6.5625V14.0625H23.4375C23.9553 14.0625 24.375 14.4822 24.375 15C24.375 15.5178 23.9553 15.9375 23.4375 15.9375H15.9375V23.4375C15.9375 23.9553 15.5178 24.375 15 24.375C14.4822 24.375 14.0625 23.9553 14.0625 23.4375V15.9375H6.5625C6.04473 15.9375 5.625 15.5178 5.625 15C5.625 14.4822 6.04473 14.0625 6.5625 14.0625H14.0625V6.5625C14.0625 6.04473 14.4822 5.625 15 5.625Z" fill="white"/>
            </svg>
            </button>
        </div>
    );
}
export default SubjectList;