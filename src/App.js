import alarm from './img/alarm.png';
import unilearn from './img/unilearn.png';
import './App.css';
import NoneStudyJoin from './NoneStudyJoin';

function App() {

  return (
<div id="body">
      <div id="iphone-frame">
      <div id="logo-container">
      <img id='logo' src={unilearn} alt="unilearn" />
        <button id="alarm">
          <img src={alarm} alt="alarm" style={{ width: '18px', height: '20px'}} />
        </button>
        < NoneStudyJoin></NoneStudyJoin>
      </div>
      </div>
      </div>
  );
}

export default App;