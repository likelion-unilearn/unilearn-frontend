import './Header.css';
import Alarm from '../icons/Alarm';
import unilearn from '../img/unilearn.png'
import {Routes, Route, Link} from 'react-router-dom'
function Header(){
    return(
    
      <div className='header'>
      <div className="logo-container">
        <img className='logo' src={unilearn} alt="unilearn" />
        <button className="alarmBtn" style={{ borderStyle: 'none', backgroundColor: '#ffffff', cursor: 'pointer', transform: 'translateX(50%)' }}>
          <Alarm />
        </button>
      </div><br />
      <div className='border-div1'></div>
      </div>
      
    );
}

export default Header;