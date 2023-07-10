import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";
import FirstPage from "./Screens/Firstpage";

function App() {
  const email = localStorage.getItem("email");
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
