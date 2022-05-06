import './App.css';
import './App.js';
import { Route, Routes } from "react-router-dom";
import NavComponent from './Components/navbar1';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/signup';
import Contact from './Pages/contact';
import About from './Pages/about';
import Team from './Components/team';
import Form from './Components/form';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <NavComponent name="POST OFFICE"/>
     <br></br>
     <div>
       <br></br>
        <Routes>
            <Route path="signup" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            {/* <Route path="" element={<Deposite />} />
            <Route path="" element={<Withdraw />} />
            <Route path="" element={<Balance />} /> */}
            <Route path="team" element={<Team />} />
            <Route path="home" element={<Home />} />
            <Route path="form" element={<Form />} />
        </Routes>
      </div>
    </header>
    </div>
  );
}
export default App;
