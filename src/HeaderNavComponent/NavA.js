import './Nav.css';
import Pencil from '../icons/Pencil';
import Main from '../icons/Main';
import Board from '../icons/Board';
import Mypage from '../icons/Mypage';

function NavA(){

    return(
    <div className='nav'>
      <div className='border-div2'></div>
      <div className="downbar" >
        <button style={{cursor: 'pointer'}} className='downbarBtn'>
          <Pencil color='#9EB7AB'/>
          <br /><b style={{color:'#9EB7AB'}}>스터디</b>
        </button>

        <button style={{cursor: 'pointer'}} className='downbarBtn'>
          <Board/>
          <br /><b className='text-color'>게시판</b>
        </button>

        <button style={{cursor: 'pointer'}} className='downbarBtn'>
          <Main/>
          <br /><b className='text-color'>메인</b>
        </button>

        <button style={{cursor: 'pointer'}} className='downbarBtn'>
          <Mypage/>
          <br/><b className='text-color'>마이페이지</b>
        </button>
      </div>
    </div>
    );
}

export default NavA;