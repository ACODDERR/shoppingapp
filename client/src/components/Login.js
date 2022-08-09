import React, { useState } from 'react'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    async function LoginUser(e){
        e.preventDefault()
        const response =await fetch('http://localhost:8000/api/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            email,
            password
          }),
        })
        const data = await response.json()
        if (data.user) {
          alert('Login successful')
          window.location.href = '/dashboard'
        } else {
          alert('Please check your username and password')
        }
       }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={LoginUser}>
    <div class="form-group pl-5 pr-5">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="form-group pl-5 pr-5">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-danger ml-5" value="Login">Submit</button>
  </form>
    </div>
  )
}

export default Login
