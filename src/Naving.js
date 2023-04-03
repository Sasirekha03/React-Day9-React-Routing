
import React from 'react'

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
function Naving() {
  return (
    
    <div>
       <Navbar bg="dark" variant="dark"  >
       
          <Navbar.Brand>Music App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/singers">Singers</Nav.Link>
            <Nav.Link href="/albums">Album</Nav.Link>
          </Nav>
       
      </Navbar>
    </div>
  )
}



export default Naving;
/*import React from 'react';
import { Link } from 'react-router-dom';

const Naving = () => {
  return (
    <div className="navbar">
      <h2>Music World</h2>
      <nav><ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/singers">Singers</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
      </ul>
      </nav>
     
    </div>
  );
};

export default Naving;*/