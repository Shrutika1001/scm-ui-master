import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import App from '../App';
import "./login.css";

export function Login() {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const Adminmail = "aaryan14032006@gmail.com";
  const Adminpass = "aryan1403";

  const navigate = useNavigate();
  function loginWithMail() {
    console.log(email, pass);
    if(email === Adminmail && pass === Adminpass) {
      localStorage.setItem("loggedIn", true);
      alert("Logged in Successfully");
      navigate("/")
    } else {
      alert("Incorrect Credentials");
      setemail('');
      setpass('');
    }
  }
  return localStorage.getItem('loggedIn') === null ? (
    <>
    <div class="bg">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>
        <label for="username">Email</label>
        <input type="text" value={email} onChange={e => setemail(e.target.value)} placeholder="Email" id="username"/>

        <label for="password">Password</label>
        <input type="password" value={pass} onChange={e => setpass(e.target.value)} placeholder="Password" id="password"/>
        <button className='loginwithmail' onClick={loginWithMail}> Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-add"></i>  Register</div>
          <div class="fb"><i class="fab fa-whatsapp"></i>  Whatsapp</div>
        </div>
    </form>
    </>
  ) : <App/>;
}
