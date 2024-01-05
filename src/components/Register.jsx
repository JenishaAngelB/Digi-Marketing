import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { grey } from '@mui/material/colors';
import './styles/Register.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
    },
  });

export default function Register() {
  return (
    <div className='log1'>
    <form>
        <div className='container'>
            <div className='header'>
                <h1>Register</h1>
                <div className='Name'>
                <ThemeProvider theme={theme}>
                <TextField label="First Name" type='text' variant="outlined" required />
                <TextField label="Second Name" type='text' variant="outlined" required />
                </ThemeProvider>
                </div>
                <div className='Details'>
                <ThemeProvider theme={theme}>
                <TextField label="Email" type='email' variant="outlined" required />
                <TextField label="Number" type='text' variant="outlined" required />
                </ThemeProvider>
                </div>
                <div className='Password'>
                <ThemeProvider theme={theme}>
                <TextField label="Password" type='password' variant="outlined" required />
                <TextField label="Confirm Password" type='password' variant="outlined" required />
                </ThemeProvider>
                </div>
                <ThemeProvider theme={theme}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl>
                    </ThemeProvider>
                <div className='Button'>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" size="large">Clear</Button>
                    <Link to='/NavBar'>
                    <Button variant="contained" size="large">Sign Up</Button>
                    </Link>
                </ThemeProvider>
                </div>
                <ThemeProvider theme={theme}>
                <div className='Login'>
                {/* <Link to='/Login'> */}
                    <Button varient='text' href=''>Already a Customer? Login!</Button>
                    {/* </Link> */}
                </div>
                </ThemeProvider>
            </div>
        </div>
    </form>
  </div>
  );
}
// import React,{useState} from "react";
// import { useNavigate } from 'react-router-dom';
// import './styles/Register.css';
// function Register(){
//     const [username,setUsername]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setpassword]=useState('')
//     const [nameErr,setnameErr]=useState(false)
//     const history=useNavigate()
//     function registertration(){
//         if((username.trim().length===0)||(password.trim().length===0)||(email.trim().length===0)){
//                 setnameErr(true)
//         }
//         else if(!email.includes('@','.','com')){
//             alert('please Enter valid email address')
//         }
//         else if(password.length<5){
//             alert('please enter the password more than five characters')
//         }
//         else{
//             setnameErr(false)
//             const array =[{username:username,email:email,password:password}]
//             console.log(array)
//             sessionStorage.setItem('user',JSON.stringify({'name':username,'email':email,'password':password}))
//             history.push('/login')
//         }
//     }
//     return(
//         <div className="register-body">
//         <div className="register-main">
//             <h1>Register Form</h1>
//             {nameErr&& <p className="errP">*please fill every input field*</p>}
//             <br />
//             <p>Name</p>
//             <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
//             <br />
//             <p>Email</p>
//             <input type='text'value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
//             <br />
//             <p>Password</p>
//             <input type='password'value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
//             <br /><br />
//             <button onClick={registertration}>Register</button>
//         </div>
//         </div>
//     )
// }
// export default Register