import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Registration from "./pages/Registration";
// import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Verification from "./pages/Verification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          <Route exact path="/registration" element={<Registration/>}/>
          <Route exact path="/signIn" element={<SignIn/>}/>
          <Route exact path="/verification" element={<Verification/>}/>
          
        </Routes>
      </Router>
      </div>
  );
}

export default App;
