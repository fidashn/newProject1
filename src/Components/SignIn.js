import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function SignIn() {
  return (
    <>
    <Navbar />
      <div className='signInWrapper'>
      <form action="" className='signInForm'>
        Email:
        <input type="text" placeholder="Email.."/>
        Password:
        <input type="text" placeholder="Password.."/>
      </form>
    </div>
      <Footer/>
      </>
  )
}

export default SignIn;