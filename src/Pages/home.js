import React, { Component } from "react";
import Teams from '../Components/team'; 
import Img1 from '../images/slide1.jpg';
import Img2 from '../images/slide2.jpg';
import Img3 from '../images/slide3.jpg';
import Contact from '../Pages/contact';
import Footers from '../Components/footer';
import More from '../Pages/about';
class Home extends Component {
  render() {
    return (
      <div className="App">
        {/* // <h1>SRB BANK</h1>
        // <Link to="signup">Signup HERE</Link>
        // <br></br>
        // <Link to="login">Login HERE</Link>
        // <br></br>
        // <Link to="about">About-us</Link>
        // <br></br>
        // <Link to="contact">Contact-us</Link>
        // <br></br>
        // <Link to="home"></Link> */}
        <div class="container-fluid">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">   
            <div class="carousel-inner" role="listbox">
            <div>
            <ol class="carousel-indicators">  
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>  
              <li data-target="#myCarousel" data-slide-to="1"></li>  
              <li data-target="#myCarousel" data-slide-to="2"></li> 
            </ol> 
          </div> 
            <div class="item active">  
              <img id="slide" src={Img1} alt="slide1"></img>
              <div class="carousel-caption"><br></br>
                <h1><strong> SRB BANK</strong></h1>
                <p>We don’t expect a big deposit, but small deposits add up</p><br></br>
                <button type="button" id="btn" class="btn btn-primary" onclick={More}>Know More</button> 
              </div>
            </div>  
            <div class="item">  
              <img id="slide" src={Img2} alt="slide2"></img>
              <div class="carousel-caption"><br></br>
                <h1><strong> SRB BANK</strong></h1>
                <p>We don’t expect a big deposit, but small deposits add up</p><br></br>
                <button type="button" id="btn" class="btn btn-primary" onClick={More}>Know More</button> 
              </div>  
            </div>  
            <div class="item">  
              <img id="slide" src={Img3} alt="slide3"></img>
              <div class="carousel-caption"><br></br>
                <h1><strong> SRB BANK</strong></h1>
                <p>We don’t expect a big deposit, but small deposits add up</p><br></br>
                <button type="button" id="btn" class="btn btn-primary" onClick={More}>Know More</button> 
              </div>
            </div>  
          </div>  
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">  
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>  
            <span class="sr-only">Previous</span>
          </a>  
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> 
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>  
            <span class="sr-only">Next</span>  
          </a>     
      </div> 
      </div>
      <div>
       <Teams/>
       <Contact/>
      <Footers/>
    </div>
    </div>
    
    );
  }
}
export default Home;