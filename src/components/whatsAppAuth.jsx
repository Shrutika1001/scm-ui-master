import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

export function WhatsAppAuth() {
  const [number, setnumber] = useState('');
  const [code, setcode] = useState('');
  const [ishide, setishide] = useState(true);
  const [verifycode, setverifycode] = useState(null);


  const navigate = useNavigate();
  function loginWithWhatsApp(event) {
    event.preventDefault();
    if(code === verifycode) {
        alert('Logged in successfully');
        navigate("/");
    } else {
        alert('Invalid Code');
        setcode('');
        setishide(!ishide);
    }
  }

  function sendcode(event) {
    event.preventDefault();
    // send code to Whatsapp

    const vcode = '5438';

    axios.get('http://localhost:8080/send/' + vcode + '/'+number).then(res => {
        alert(res.data.msg);
        setverifycode(vcode);
    });
    setishide(!ishide);
  }
  return (
    <>
    <div class="bg">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={ishide ? sendcode : loginWithWhatsApp}>
        <h3>Login using WhatsApp</h3>
        <label for="username">WhatsApp Number</label>
        <input disabled={!ishide} type="number" value={number} onChange={e => setnumber(e.target.value)} placeholder="Phone number" id="number"/>
        <div hidden={ishide}>
        <label for="codeword">Code</label>
        <input type="codeword" value={code} onChange={e => setcode(e.target.value)} placeholder="Code" id="codeword"/>
        </div>
        <button type='submit' className='loginwithmail'> {ishide ? 'Send Code' : 'Authenticate'}</button>
    </form>
    </>);
}
