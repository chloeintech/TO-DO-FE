import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCookie } from './common';
import { useEffect, useState } from "react";
import LoggedIn from './components/loggedIn/loggedIn';
import LoggedOut from './components/loggedOut/loggedOut';

const App = () => {

  const [user, setUser] = useState()
  useEffect (() => {
    let cookie = getCookie("jwt_token")
    console.log("******cookie =", cookie)
  })

  return (

    <div>
      <LoggedIn  />
      
      <BrowserRouter>
          <Routes>
            <Route path="./components/" element={ <LoggedIn />} />
            <Route path="./components/logout" element={ <LoggedOut />} />
          </Routes>
        </BrowserRouter>
      
    </div>
 ); 
}; 

export default App;
