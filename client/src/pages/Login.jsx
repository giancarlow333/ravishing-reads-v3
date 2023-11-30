
//import decorImg from './public/img/victoriandecor-removebg-preview.png';
import Header from '../components/Header';
import { useMutation } from '@apollo/client';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

import { LOGIN_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';
//import { QUERY_SINGLE_PROFILE } from '../utils/queries';

function Login() {
    
    const [formState, setFormState] = useState({
        username: '',
        password: ''
      });
    
      const [loginProfile, { error }] = useMutation(LOGIN_PROFILE, {
        // refetchQueries: [
        //   QUERY_SINGLE_PROFILE,
        //   'getProfile'
        // ]
      }
      );
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            console.log(formState);
          const { data } = await loginProfile({
            variables: { ...formState },
          });

          console.log(data);

          if(data == null || data.login == null || data.login.token == null){
            // incorrect password error handling
            alert("Incorret password");
             }

          if(data != null && data.login != null && data.login.token != null){
            console.log(data.login.token);
            Auth.login(data.login.token);
          }
    
          setFormState({
            username: '',
            password
          });
        } catch (err) {
          console.error(err);
          alert(err);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        // if (name === 'thoughtText' && value.length <= 280) {
        //   setFormState({ ...formState, [name]: value });
        //   setCharacterCount(value.length);
        // } else if (name !== 'thoughtText') {
          setFormState({ ...formState, [name]: value });
        // }
      };

      if(Auth.loggedIn())
        return <Navigate to="/" />
      else

    return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
        <Header />   
        <div className="flex flex-col justify-center items-center self-center h-full w-9/12 bg-[#001829]">
            <div className="flex justify-evenly items-center flex-col w-4/6 h-4/6 bg-[#f8f2e5] rounded-lg outline outline-8 outline-[#f7f8f6] outline-offset-4">
                <form id="auth-form" onSubmit={handleFormSubmit} onChange={handleChange} method="post" className="w-full h-full flex flex-col justify-around items-center" autoComplete="off">
                    <img className="h-24 self-center m-5" src='./img/ornament.png' alt="TechChat Logo" />
                    <p className="text-5xl text-[#001829] font-serif m-5 antialiased font-bold self-center">Welcome Back!</p>

                    <input id="username" className="w-9/12 h-28 m-3 pl-6 border-b-4 border-sky-900 bg-transparent placeholder:text-[#001829] placeholder:italic text-3xl rounded-lg"
                           type="text" 
                           name="username" 
                           placeholder="Enter Your username..."
                           aria-label="username" />

                    <input id="password" className="w-9/12 h-28 m-3 pl-6 border-b-4 border-sky-900 bg-transparent placeholder:text-[#001829] placeholder:italic text-3xl rounded-lg"
                           type="password" 
                           name="password" 
                           placeholder="Enter Your Password..."
                           aria-label="Password" />

                    <button type="submit" 
                            className="bg-sky-500 w-2/5 h-14 m-4 self-center shadow-sky-200 shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">Login</button>

                    <a href="/signup" 
                       className="font-extrabold m-5 text-red-500 text-xl outline outline-1 outline-red-500 outline-offset-4 hover:outline-dashed">Sign Up Instead</a>
                </form>
            </div>
        </div>
      </div>
    );
}
export default Login;