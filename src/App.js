import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Loginform from "./pages/Login&Join/Loginform";
import Signupform from "./pages/Login&Join/Signupform";
import SignupVerification from "./pages/Login&Join/SignupVerification";
import MystudyList from "./pages/Study/MystudyList";

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
    
        </Routes>
      </div>
    </BrowserRouter>

      </div>
   
    </div>
  );
}

export default App;