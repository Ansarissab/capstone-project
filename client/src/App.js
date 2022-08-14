// import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(){
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
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