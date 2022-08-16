import React from 'react'

function Navbar() {
  return (
    <>
   <ul className="nav-list">
    <li className="nav-item">My Albums</li>
    <li className="nav-item">Featured Gallery</li>
    <li className="nav-item">Videos</li>
    <li className="nav-item">Favorite</li>
    <li className="nav-item">Trash</li>
    <button className="sign-up">Sign Up</button>
    <button className="sign-in">Sign In</button>
    <div className="hamburger">H</div>
   </ul>
   
    </>
  )
}

export default Navbar