import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    const [click,setClick]= React.useState(false);
    const handleClick =() => setClick(true);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <div className="container-fluid">
    
   

   
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      
      <ul style={{fontSize:"25px"}} className="navbar-nav mb-2 xs-2 mb-lg-0">
        <li className="nav-item" >
        <Link to="/home" style={{color: "black",marginInline:'20px'}} classeName="nav-link active">  Traveling</Link>
        
        </li>  
        <li className="nav-item">
        <Link to="/Services" style={{color: "black",marginInline:'20px'}} >Service</Link>
        </li>
        <li className="nav-item">
        <Link to="/Products" style={{color: "black",marginInline:'20px'}} >Products</Link>
        </li>
        <li className="nav-item">
        <button style={{marginLeft:"900px"}} type="button" class="btn btn-outline-dark"><Link to="/Sign-UP" style={{color: "black",fontSize:"19px",marginInline:'20px'}} >Sign-UP</Link></button>
        
        </li>
        
      
      </ul>
    
    </div>
    
  </div>
  
</nav>
        
    )
}

export default Navbar
