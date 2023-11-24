import './App.css';
import NoneStudyJoin from './NoneStudyJoin';
import Header from './HeaderNavComponent/Header';
import Nav from './HeaderNavComponent/Nav';
import MypageInfo from './pages/Mypage/MypageInfo';
import RecerMypage from './pages/RecerMypage/RecerMypage';
import SubjectList from './pages/SubjectList/SubjectList';
import SubjectRegist from './pages/SubjectRegist/SubjectRegist';


function App() {

  return (
<div id="body">
      <div id="iphone-frame">
      <div id="logo-container">
      <Header/>
        <SubjectRegist/>
      </div>
      </div>
      <Nav/>
</div>
  );
}

export default App;