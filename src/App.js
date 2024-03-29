import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Loginform from "./pages/Login&Join/Loginform";
import Signupform from "./pages/Login&Join/Signupform";
import SignupVerification from "./pages/Login&Join/SignupVerification";
import MystudyList from "./pages/Study/MystudyList";
import StudyDetail from "./pages/Study/StudyDetail";
import AssignmentEndDetail from "./pages/Assignment/AssignmentEndDetail";
import AssignmentForm from "./pages/Assignment/AssignmentForm";
import AssignmentList from "./pages/Assignment/AssignmentList";
import AssignmentRate from "./pages/Assignment/AssignmentRate";
import Quiz from "./pages/Feed/Quiz";
import Assign from "./pages/Feed/Assign";
import AssignWrite from "./pages/Write/AssignWrite"
import QuizWrite from "./pages/Write/QuizWrite"
import OpenedCourses from './pages/SearchCourse/OpenedCourses';
import UnopenedCourses from './pages/SearchCourse/UnopenedCourses';
import ClassBoard from './pages/Board/ClassBoard';
import StudyBoard from './pages/Board/StudyBoard';
import Studyjoin from './pages/StudyJoins/Studyjoin';
import NoneStudyJoin from './pages/StudyJoins/NoneStudyJoin';
import QuizCommentView from './pages/CommentView/QuizCommentView';
import Quizchange from './pages/Write/Quizchange';;
import MypageInfo from './pages/Mypage/MypageInfo';
import RecerMypage from './pages/RecerMypage/RecerMypage';
import SubjectList from './pages/SubjectList/SubjectList';
import Assignchange from './pages/Write/Asignchange';
import SubjectRegist from './pages/SubjectRegist/SubjectRegist';
import RecruitStudy from './pages/RecruitStudy/RecruitStudy';
import SurveySubmit from './pages/Survey/SurveySubmit';
import SurveyMain from './pages/Survey/SurveyMain';
import MypageStudy from './pages/MypageStudy/MypageStudy';
import MypageStudyDetail from './pages/MypageStudyDetail/MypageStudyDetail';   
import { AuthProvider } from './AuthContext';

function App() {
  const pageStyle = {
    backgroundColor: '#bababa',
  };

  return (
    <AuthProvider> 
    <div id="body">
      <div id="iphone-frame">
      <BrowserRouter>
      <div>
        <Routes>
        <Route index element={<Loginform />}/>
          <Route path="/Login" element={<Loginform />} />
          <Route path="/Signupform" element={<Signupform />} />
          <Route path="/SignupVerification" element={< SignupVerification />} />
          <Route path="/MystudyList" element={< MystudyList />} />
          <Route path="/StudyDetail/:id" element={< StudyDetail />} />
          <Route path="/Quiz" element={< Quiz />} />
          <Route path="/Assign" element={< Assign />} />
          <Route path="/QuizWrite" element={< QuizWrite />} />
          <Route path="/Quizchange" element={< Quizchange />} />
          <Route path="/AssignWrite" element={< AssignWrite />} />
          <Route path="/OpenedCourses" element={< OpenedCourses />} />
          <Route path="/UnopenedCourses" element={< UnopenedCourses />} />
          <Route path="/ClassBoard" element={< ClassBoard />} />
          <Route path="/StudyBoard" element={< StudyBoard />} />
          <Route path="/Studyjoin" element={< Studyjoin />} />
          <Route path="/NoneStudyJoin" element={< NoneStudyJoin />} />
          <Route path="/QuizCommentView" element={< QuizCommentView />} />
          <Route path="/MypageInfo" element={< MypageInfo />}/>
          <Route path="/RecerMypage" element={< RecerMypage />}/>
          <Route path='/SubjectList' element={<SubjectList/>}/>
          <Route path='/SubjectRegist' element={<SubjectRegist/>}/>
          <Route path='/RecruitStudy' element={<RecruitStudy/>}/>
          <Route path='/Assignchange' element={<Assignchange/>}/>
          <Route path='/AssignmentEndDetail' element={<AssignmentEndDetail/>}/>
          <Route path='/AssignmentForm' element={<AssignmentForm/>}/>
          <Route path='/AssignmentList' element={<AssignmentList/>}/>
          <Route path='/AssignmentRate' element={<AssignmentRate/>}/>
          <Route path='/SurveySubmit' element={<SurveySubmit/>}/>
          <Route path='/SurveyMain' element={<SurveyMain/>}/>
          <Route path='/MypageStudy' element={<MypageStudy/>}/>
          <Route path='/MypageStudyDetail' element={<MypageStudyDetail/>}/>
          <Route path='/Mainpage' element={<Mainpage/>}/>

        </Routes>

      </div>
    </BrowserRouter>
      </div>
   
    </div>
    </AuthProvider>
  );
}

export default App;