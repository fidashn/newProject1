import React from 'react';

function SignIn() {
  return (
    <div className='signInWrapper'>
      <form action="" className='signInForm'>
        Email:
        <input type="text" placeholder="Email.."/>
        Password:
        <input type="text" placeholder="Password.."/>
      </form>
    </div>
  )
}

export default SignIn;