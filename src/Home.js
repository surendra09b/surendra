import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{marginTop:'20px',textAlign:'center'}}>
      <button style={{width:'450px',height:'100px',marginTop:'10px',marginBottom:'10px',textDecoration:'none'}}>
        <Link to="/about" style={{textDecoration:'none'}} ><h1>About</h1></Link>
      </button>
      <div  onClick={toggleDropdown}>
        <button style={{width:'450px',height:'100px',marginTop:'10px',marginBottom:'10px'}}>
         <h1>Services</h1> 
         <i style={{color:'black'}} className={`fa ${isDropdownOpen ? 'fa-caret-up' : 'fa-caret-down'}`} />
        </button>
        {isDropdownOpen && (
          <div style={{display:'flex',flexDirection:'column',textAlign:'center',alignItems:'center'}}>
            <button style={{backgroundColor:'black',width:'400px'}}><Link to="/webdevelopment">WEb Development</Link></button>
            <button style={{backgroundColor:'black',width:'400px',marginTop:'5px'}}><Link to="/appdevelopment">App Development</Link></button>
            <button style={{backgroundColor:'black',width:'400px',marginTop:'5px'}}><Link to="/cloudcomputing">Cloud Computing</Link></button>
          </div>
        )}
      </div>
      <button style={{width:'450px',height:'100px',marginTop:'10px',marginBottom:'10px'}}>
        <Link to="/contact" style={{textDecoration:'none'}}><h1>Contact</h1></Link>
      </button>
    </div>
  );
}

export default Home;

