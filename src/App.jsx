import './App.css';
import {AuthContext} from "./contexts/AuthContext";
import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const {isAuth} =React.useContext(AuthContext);
  return (
    <>
    {console.log(isAuth)}
    <Navbar/>
    <br />
    <Body/>
    
    </>
  );
}

export default App;
