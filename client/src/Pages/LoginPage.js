
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';




export const LoginPage = () => {
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const [redirect,setRedirect] = useState(false);
  async function login(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-type':'application/json'},
      credentials:'include',
    });
    if(response.ok){
      setRedirect(true);
    }
    else{
      alert('wrong credentials');
    }

  }
  if(redirect){
    return <Navigate to ={'/'}/>
  }


  return (
    
        <form className='login' onSubmit={login}>
            <h1>Login4U</h1>
            <input type="text" 
            placeholder='username' 
            value={username} 
            onChange={ev=>setUsername(ev.target.value)}>
            </input>
            <input type="password" 
            placeholder='password' 
            value={password} 
            onChange={ev=>setPassword(ev.target.value)}>
            </input>
            <button>Login</button>
    
        </form>
       
  )
}

export default LoginPage;