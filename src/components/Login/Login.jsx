import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome to SharkBuz</h1>
        <div className="alien">
          <img
            src="../../src/assets/images/alien.png"
            className=""
            alt="alien"
          />
        </div>
        <div className="earth">
          <img
            src="../../src/assets/images/earth.png"
            className=""
            alt="earth"
          />
        </div>
      </div>
      <div className="login-right">
        <div className="login-contents">
          <h1>Create Account</h1>
          <div className="sign-in-links">
            <div className="google">
              <img src="../../src/assets/icons/google.svg" alt="" />
              <p>Sign up with Google</p>
            </div>
            <div className="facebook">
              <img src="../../src/assets/icons/facebook.svg" alt="" />
              <p>Sign up with Facebook</p>
            </div>
          </div>
          <h3>- OR -</h3>
          <form action="">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full Name"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
            <input type="submit" value="Create Account" />
            <div className="already">
              <p>
                Already have an account? <span>Login</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <style>
        {`
        input[type="text"],
        textarea {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 4px;
          box-sizing: border-box;
          margin-top: 6px;
          margin-bottom: 16px;
          resize: vertical;
        }
        
        input[type="submit"] {
          background-color: #04AA6D;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: block;
          margin: 0 auto;
          font-size: 20px;
        }
        
        input[type="submit"]:hover {
          background-color: #45a049;
        }
        
        input[type="text"]::placeholder,
        textarea::placeholder {
          border-bottom: 1px solid black;
          font-size: 15px;
        }
      `}
      </style>
    </div>
  );
};

export default Login;
