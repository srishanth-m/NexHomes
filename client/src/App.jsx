import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Profile from '../src/pages/Profile'
import SignIn from '../src/pages/SignIn'
import SignOut from '../src/pages/SignOut'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/signOut" element={<SignOut/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
