import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import SignUp1 from "./pages/SignUp1" 
import SignUp2 from "./pages/SignUp2" 
import SignUp3 from "./pages/SignUp3" 
import SingleEmployee from "./pages/SingleEmployee"
import EmployeesUnverified from './pages/EmployeesUnverified';

function App() {
  return (
    <div className="App-outer">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register/credentials" element={<SignUp1/>} />
            <Route path="/register/organization" element={<SignUp2/>} />
            <Route path="/register/location" element={<SignUp3/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/employees/id" element={<SingleEmployee/>} />
            <Route path="/employees/unverified" element={<EmployeesUnverified/>} />
            <Route path="/employees" element={<Employees/>} />
            <Route path="/" element={<Dashboard/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
