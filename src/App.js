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
import Survey from "./pages/Survey/SurveyMain";
import SurveyMain from './pages/Survey/SurveyMain';



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
        <Route index element={<Loginform />}/>
          <Route path="/Login" element={<Loginform />} />
          <Route path="/Signupform" element={<Signupform />} />
          <Route path="/SignupVerification" element={< SignupVerification />} />
          <Route path="/MystudyList" element={< MystudyList />} />
          <Route path="/StudyDetail/:id" element={< StudyDetail />} />
          <Route path="/AssignmentEndDetail" element={< AssignmentEndDetail />} />
          <Route path="/AssignmentForm" element={< AssignmentForm />} />
          <Route path="/AssignmentList" element={< AssignmentList />} />
          <Route path="/AssignmentRate" element={< AssignmentRate />} />
          <Route path="/SurveyMain" element={< SurveyMain />} />
          
    
        </Routes>

      </div>
    </BrowserRouter>

      </div>
   
    </div>
  );
}

export default App;