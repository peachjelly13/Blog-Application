import React, { useState } from 'react'

export const RegisterPage = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();
         const response =  await fetch('http://localhost:4000/register',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'Content-type':'application/json'},
        });
        if(response.status===200){
          alert('registration successful');
        }

        else{
          alert('registration failed')
        }

       

    }
  return (
    
    <form className='register' onSubmit={register}>
        <h1>Register4U</h1>
    <input 
    type="text" 
    placeholder='username' 
    value={username}
    onChange={ev=>setUsername(ev.target.value)}
    
    ></input>
    <input type="password" 
    placeholder='password'
    value={password}
    onChange={ev=>setPassword(ev.target.value)}
    ></input>
    <button>Register</button>

</form>
    
  )
}

export default RegisterPage;
