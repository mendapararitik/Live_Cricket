import React from 'react'
import HeaderNav from './Screens/HomeScreens/HeaderNav';
import AllLiveMathces from './Screens/CricketScreens/AllLiveMathces';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBannerSection from './Screens/HomeScreens/HeaderBannerSection';
import Login from './Screens/BackEnd/Login';
import SignUp from './Screens/BackEnd/SignUp';


function App() {

  const myKey = "2c610af8-84e3-437d-80ef-b075bd9623ad";

  return (


    <Router>
      <div className="">
        <HeaderNav />
        <Routes>
          <Route path="/" element={<HeaderBannerSection />} />
          <Route path="/dashboard" element={<AllLiveMathces myKey={myKey} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
