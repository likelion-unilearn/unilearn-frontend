import React, { useState } from 'react';
import './Nav.css';
import Pencil from '../icons/Pencil';
import Main from '../icons/Main';
import Board from '../icons/Board';
import Mypage from '../icons/Mypage';

function Nav(){

    const [activeBtn, setActiveBtn] = useState(null);

    const handleButtonClick = (btnName) => {
      setActiveBtn(btnName);
    };
  
    const getIconColor = (btnName) => activeBtn === btnName ? '#9EB7AB' : '#525252c5';
    return(
    <div className='nav'>
      <div className='border-div2'></div>
      <div className="downbar" >
        <button style={{cursor: 'pointer'}} className={`downbarBtn ${activeBtn === 'study' ? 'active' : ''}`} 
                onClick={() => handleButtonClick('study')}>
          <Pencil color={getIconColor('study')} />
          <br /><b className={`text-color ${activeBtn === 'study' ? 'active' : ''}`}>스터디</b>
        </button>

        <button style={{cursor: 'pointer'}} className={`downbarBtn ${activeBtn === 'board' ? 'active' : ''}`} 
                onClick={() => handleButtonClick('board')}>
          <Board color={getIconColor('board')} />
          <br /><b className={`text-color ${activeBtn === 'board' ? 'active' : ''}`}>게시판</b>
        </button>

        <button style={{cursor: 'pointer'}} className={`downbarBtn ${activeBtn === 'main' ? 'active' : ''}`} 
                onClick={() => handleButtonClick('main')}>
          <Main color={getIconColor('main')} />
          <br /><b className={`text-color ${activeBtn === 'main' ? 'active' : ''}`}>메인</b>
        </button>

        <button style={{cursor: 'pointer'}} className={`downbarBtn ${activeBtn === 'mypage' ? 'active' : ''}`} 
                onClick={() => handleButtonClick('mypage')}>
          <Mypage color={getIconColor('mypage')} />
          <br /><b className={`text-color ${activeBtn === 'mypage' ? 'active' : ''}`}>마이페이지</b>
        </button>
      </div>
    </div>
    );
}

export default Nav;