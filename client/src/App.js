// import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(){
  
  const [user, setUser] = useState(null);
  const [ categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((user) => setUser(user));
  }, []);

  useEffect(() => {
    fetch("/categories")
    .then((r) => r.json())
    .then((categories) => setCategories(categories));
  }, []);

  


  return (
   
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>

    </>
  );
}

export default App;