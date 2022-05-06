import React from "react";
function Teams()
{
return (
    //Navbar
    <div className="App">
    <div class="container-fluid">
    <div class="row1">
    <div class="col-sm-3">
            <figure id="fig"><img src="https://randomuser.me/api/portraits/men/1.jpg" class="img-circle" alt="img1" height="200px" width="200px"></img>
            <figcaption>
                <h1>Ramesh</h1>
                <p>Supervisor</p>
            </figcaption>
            </figure> 
        </div>
        <div class="col-sm-3">
            <figure id="fig"><img src="https://randomuser.me/api/portraits/men/83.jpg" class="img-circle" alt="img1" height="200px" width="200px"></img>
            <figcaption>
                <h1>Gaurav</h1>
                <p>Manager</p>
            </figcaption>
            </figure> 
        </div>
        <div class="col-sm-3" >
            <figure id="fig"><img src="https://randomuser.me/api/portraits/men/13.jpg" class="img-circle" alt="img2"height="200px" width="200px"></img>
            <figcaption>
                <h1>Rohith</h1>
                <p>Assistant</p>
            </figcaption>
            </figure> 
        </div>
        <div class="col-sm-3" >
            <figure id="fig"><img src="https://randomuser.me/api/portraits/men/0.jpg" class="img-circle"  alt="img3"height="200px" width="200px" ></img>
            <figcaption>
                <h1>Ram</h1>
                <p>Executive</p>
            </figcaption>
            </figure> 
        </div>
        </div>
        </div>
    </div>
    )
}
export default Teams;