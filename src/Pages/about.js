import React, { Component } from "react";
import Json from '../JSONData/user.json';
class About extends Component {
  render() {
    return (
      <div class="container">
         <h1>About Us</h1>
      <div class="card">
    <img src="images/thumbnail.svg" class="w-100 border-bottom" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">Here is some example text to make up the card's content. Replace it with your own text anytime.</p>
    </div>
</div>
</div>
    );
  }
}

export default About;