import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Loginform from "./pages/Login&Join/Loginform";
import Signupform from "./pages/Login&Join/Signupform";
import SignupVerification from "./pages/Login&Join/SignupVerification";
import MystudyList from "./pages/Study/MystudyList";
import StudyDetail from "./pages/Study/StudyDetail";
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
import  QuizCommentView from './pages/CommentView/QuizCommentView'
function App() {
  const pageStyle = {
    backgroundColor: '#bababa',
  };

  return (
    
    <div id="body">
      <div id="iphone-frame">
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Login" element={<Loginform />} />
          <Route path="/Signupform" element={<Signupform />} />
          <Route path="/SignupVerification" element={< SignupVerification />} />
          <Route path="/MystudyList" element={< MystudyList />} />
          <Route path="/StudyDetail/:id" element={< StudyDetail />} />
          <Route path="/Quiz" element={< Quiz />} />
          <Route path="/Assign" element={< Assign />} />
          <Route path="/QuizWrite" element={< QuizWrite />} />
          <Route path="/AssignWrite" element={< AssignWrite />} />
          <Route path="/OpenedCourses" element={< OpenedCourses />} />
          <Route path="/UnopenedCourses" element={< UnopenedCourses />} />
          <Route path="/ClassBoard" element={< ClassBoard />} />
          <Route path="/StudyBoard" element={< StudyBoard />} />
          <Route path="/Studyjoin" element={< Studyjoin />} />
          <Route path="/NoneStudyJoin" element={< NoneStudyJoin />} />
          <Route path="/QuizCommentView" element={< QuizCommentView />} />
          
    
        </Routes>
      </div>
    </BrowserRouter>

      </div>
   
    </div>
  );
}

export default App;