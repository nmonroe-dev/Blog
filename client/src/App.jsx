import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/loginPage" element={<LoginPage/>}/>
          <Route path="/formPage" element={<FormPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
