import React from 'react';
import { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} =useContext(FirebaseContext)
  const handleLogin=(e)=>{
    e.preventDefault();
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
   navigate('/')
   }).catch((error)=>{
    alert(error.message)
   })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" alt='olx' height="200px" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
