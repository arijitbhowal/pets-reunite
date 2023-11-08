import React, { useState, useEffect } from 'react';
import './Login.css';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

function LoginRegister() {
  const history = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null); // State variable for error message

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const name = e.target['name'].value;
    const email = e.target['email'].value;
    const password = e.target['password'].value;
    
    if (type === 'SignUp') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(data => {
          // console.log(data, "authData");
          history('/home');
        })
        .catch(error => {
          // Handle the registration error and set the error message
          setErrorMessage(error.message);
        });
    } else if (type === 'Login') {
      signInWithEmailAndPassword(auth, email, password)
        .then(data => {
          // console.log(data, "authData");
          history('/home');
        })
        .catch(error => {
          // Handle the registration error and set the error message
          setErrorMessage(error.message);
        });
    }
  };

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
  }, []);

  useFormik(
    {
      initialValues: {
        fullName: '',
        email: '',
        password: '',
      },
      onSubmit: values => {
        console.log(values);
      },
    }
  )

  return (
    <div className="wrapper">
      <div className="form signup">
        <header>Signup</header>
        <form onSubmit={(e) => handleSubmit(e, 'SignUp')}>
          <input
            type="name"
            name="fullName"
            placeholder="Full name"
            required
          />
          <input
            type="email"
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
            <input type="checkbox" id="signupCheck" required />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="SignUp" />
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
        </form>
      </div>

      <div className="form login">
        <header>Login</header>
        <form onSubmit={(e) => handleSubmit(e, 'Login')}>
          <input
            type="email"
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
          <Link to="/resetpassword">Forgot password?</Link>
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
