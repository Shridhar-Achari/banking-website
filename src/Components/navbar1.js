import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/banklogo.jpg';
function NavComponent(props)
{
return (
    //Navbar
    <div className="App">
     <nav class="navbar navbar-light navbar-fixed-top"> 
  <div class="container-fluid"> 
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
    </button>
    <div class="navbar-brand"><span><img src={Logo} alt="logo" height="35px" weight="35px" class="img-circle"></img> </span></div>
   
      <Link to="home" class="navbar-text">
          {props.name}</Link>   
    </div>       
      <div class="collapse navbar-collapse" id="myNavbar">
    <ul className="nav navbar-nav">  
      <li class="">< Link to="home">Home</Link></li>  
      <li>< Link to="about">About-Us</Link></li> 
      <li>< Link to="contact">Contact-Us</Link></li>  
      <li class="dropdown-content"><Link to="" class="dropdown-toggle" data-toggle="dropdown">Other Services<span class="caret"></span></Link>  
        <ul class="dropdown-menu">  
          <li><Link to="" class="dropdown-item">Deposite</Link></li>
          <li><Link to="" class="dropdown-item">WithDraw</Link></li>
          <li><Link to="form"  class="dropdown-item">Balance Enuiry</Link></li>
          <li><Link to="team" class="dropdown-item">Our Team</Link></li>
        </ul>
      </li> 
    </ul> 
    <ul class="nav navbar-nav navbar-right">  
      <li><Link to="signup"><span class="glyphicon glyphicon-user"></span> Register</Link></li>  
      <li><Link to="login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>  
    </ul>   
  </div> 
  </div>  
</nav>
</div>
)
}
export default NavComponent;