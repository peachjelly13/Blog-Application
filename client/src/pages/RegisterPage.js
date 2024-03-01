import React from 'react'

export const RegisterPage = () => {
  return (
    <form className='register'>
        <input type="text" placeholder='Username'></input>
        <input type="password" placeholder='Password'></input>
        <button>Register</button>
    </form>
  )
}

export default RegisterPage;
