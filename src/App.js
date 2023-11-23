// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import UserHome from './Components/UserHome';
import ServiceProviderHome from './Components/ServiceProviderHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/servicerproviderhome" element={<ServiceProviderHome />} />

        {/* Add other routes or a default route as needed */}
      </Routes>
    </Router>
  );
}

export default App;
