import React, {useState} from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import {LoginContext} from './context/LoginContext';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="loginbox">
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ?  <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
 