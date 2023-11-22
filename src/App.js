import './App.css';
import NoneStudyJoin from './NoneStudyJoin';
import Header from './HeaderNavComponent/Header';
import Nav from './HeaderNavComponent/Nav';


function App() {

  return (
<div id="body">
      <div id="iphone-frame">
      <div id="logo-container">
      <Header/>
        < NoneStudyJoin></NoneStudyJoin>
      </div>
      </div>
      <Nav/>
</div>
  );
}

export default App;