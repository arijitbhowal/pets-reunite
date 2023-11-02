import React, { useEffect } from 'react';
import './Login.css';

const Login = () => {
  useEffect(() => {
    // Add the script logic here
    const wrapper = document.querySelector('.wrapper');
    const signupHeader = document.querySelector('.signup header');
    const loginHeader = document.querySelector('.login header');

    loginHeader.addEventListener('click', () => {
      wrapper.classList.add('active');
    });

    signupHeader.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts.

  return (
      <div className="wrapper">
        <div className="form signup">
          <header>Signup</header>
          <form>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <div className="checkbox">
              <input type="checkbox" id="signupCheck" />
              <label htmlFor="signupCheck">I accept all terms & conditions</label>
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>
  
        <div className="form login">
          <header>Login</header>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <a href="#">Forgot password?</a>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  };

export default Login;
