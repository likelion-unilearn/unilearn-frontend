import alarm from './img/alarm.png';
import unilearn from './img/unilearn.png';
import './App.css';
import FrameA from './FrameA';

function Board1() {

  return (
    <div id="body">
      <div id="iphone-frame">
      <div id="logo-container">
      <img id='logo' src={unilearn} alt="unilearn" />
        <button id="alarm">
          <img src={alarm} alt="alarm" style={{ width: '18px', height: '20px'}} />
        </button>
        <FrameB></FrameB>
      </div>
      </div>
    </div>
  );
}

export default Board1;