import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function SignUp() {
  return (
    <>
     <Navbar />
    <div className='signUpWrapper'> 
    <form action="" className='signUpForm'>
    Full Name:
    <input type="text" placeholder="Full Name.."/>
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

export default SignUp