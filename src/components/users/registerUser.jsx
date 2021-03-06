import React from "react";
import { useState } from "react";
import authService from "../../auth/authService";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [e, setE] = useState([]);
  
    const navigate = useNavigate();
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        await authService.signup(name, username, email, password).then(() => {
          navigate("/users/login");
          setName("");
          setUsername("");
          setEmail("");
          setPassword("");
        });
      } catch (e) {
        if (e.response && e.response.status >= 400 && e.response.status <= 500) {
          setE(e.response.data.errors);
        }
      }
    };
  
    return (
      <div className="signup-bg signup-bg d-flex align-items-center">
        <div className="container d-flex justify-content-center align-items-center p-3">
          <form
            className="form-login d-flex flex-column align-items-center"
            onSubmit={handleSignUp}
          >
            <div className="form-header mb-2 signup-form">
              <h2>Create an account</h2>
              <p className="mb-0">
                Already have an account?{" "}
                <Link to="/users/login" className="signup-link">
                  Log in
                </Link>
              </p>
              
            </div>
            <div className="inputs d-flex flex-column w-100 p-2 px-sm-5 mb-4 ">
              <label htmlFor="name" className="mb-2">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Enter your name"
                className="mb-3 shadow-none form-input"
                autoFocus
                required
              />
              <label htmlFor="username" className="mb-2">Username</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Enter your username"
                className="mb-3 shadow-none form-input"
              />
              <label htmlFor="email" className="mb-2">Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                className="mb-3 shadow-none form-input"
                required
              />
              <label htmlFor="password" className="mb-2">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                className="mb-2 shadow-none form-input"
                required
              />
              <p className="my-2">
              <Link
                  to="/users/forgotpassword"
                  className="signup-link"
                >
                  Forgot your password?
                </Link>
                </p>
              {e && (
                <div className="mb-2">
                  {e.map((e, idx) => {
                    return (
                      <p key={idx} className="error-msg">
                        {e.msg}
                      </p>
                    );
                  })}
                </div>
              )}
              <button type="submit" className="submit-btn my-3">
                Sign in
              </button>
              </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
