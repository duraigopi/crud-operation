import {React, useState } from 'react';
import './LoginPage.css'
import {LuLogOut} from "react-icons/lu";
import {FaHourglassHalf} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate=useNavigate();

  const usernames=["Gopi","saravanan","Kumar"];
  const password=["7510","3840","5272"];
  const [name,setName]=useState("");
  const [pass,setPass]=useState("");
  
  //Copyright Year Function
  const year=new Date();

  //Login Validation Function 
  const Redirect=()=>{
    if((usernames.includes(name)) && (password.includes(pass)))
    {
      alert("Login Succesful");
      navigate('/report')
    }else{
      alert("Username or Password is incorrect");
    }
  }

  return (
    <>
      <header className='header'>
        <section className='section'>
           <FaHourglassHalf className='headicon'/>
           <p className='heading'>Glass&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/> House LLP</p>
        </section>
        <section className='section'>
          <b className='logoutheading'>Hello:Admin&nbsp;&nbsp;</b><LuLogOut className='logouticon'/>
        </section>
      </header>
      <main className='container'> 
        <section className='logincontainer'>
          <h2 className='loginheading'>Login</h2>
            <p>Already have account? User your login details</p>
          <form className='form'>
             <label htmlFor='username' className='label'>User Name</label>
             <input type='text' name='username' id='username' onChange={(e)=>setName(e.target.value)}/>
             <label htmlFor='password' className='label'>Password</label>
             <input type='password' name='password' id='password' onChange={(e)=>setPass(e.target.value)} />
          </form>
             <button type='submit' className="loginbutton" onClick={Redirect}>Submit</button>
        
        </section>
      </main>
      <footer className='footer'>
         <p>Copyright &copy; 2023-{year.getFullYear()}- All Rights Reserved, Glass House LLP. All Terms and Conditions Apply</p>
      </footer>
    </>
  )
}

export default LoginPage