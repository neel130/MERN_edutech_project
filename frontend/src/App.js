import React, { useReducer, createContext } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ErrorPage from './components/error';
import Logout from './components/Logout';
import { initialState, reducer } from "./reducer/UseReducer";
import Footer from './components/Footer';


// create a contextAPI 
export const UserContext = createContext();


const Routing = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </>
  )
}
function App() {

  //* use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <NavBar />
      <Routing />
      <Footer />
    </UserContext.Provider>

  )
}

export default App;
