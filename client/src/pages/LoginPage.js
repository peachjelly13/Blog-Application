import React from 'react'

export const LoginPage = () => {
  return (
    <form className='login'>
        <input type="text" placeholder='Username'></input>
        <input type="password" placeholder='Password'></input>
        <button>Login</button>
    </form>
  )
}
export default LoginPage;
