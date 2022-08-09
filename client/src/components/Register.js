import React ,{useState} from 'react'



function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 async function registerUser(e){
  e.preventDefault()
  const response =await fetch('http://localhost:8000/api/register',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      name,
      number,
      email,
      password
    }),
  })
  // const data = await response.json()
  alert("Registerd succesfully")
  window.location.href = '/login'
 }
  return (
    <div >
     <h1>Register</h1>
     <form onSubmit={registerUser}>
     <div class="form-group mt-5 pl-5 pr-5">
    <label for="exampleInputName">Name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" value={name} onChange={(e) => setName(e.target.value)}/>
    <label for="exampleInputNumber">Phone Number</label>
    <input type="tel" class="form-control" id="exampleInputNumber" aria-describedby="numberHelp" value={number} onChange={(e) => setNumber(e.target.value) }/>
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" class="btn btn-danger ml-5" value="Register">Submit</button>
</form>
    </div>
  );
}

export default App;
