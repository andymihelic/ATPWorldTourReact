import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../../auth/authContext";
import authService from "../../auth/authService";


function Login() {
  const {setAuth} = useContext(authContext)
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await authService.login(email, password).then((response) => {
        navigate("/");
        setAuth(response)
        setEmail("");
        setPassword("");
      }
    );
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response.status === 401 || 403) {
        setErrMsg("Wrong user or password");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
 
  return (
    <div className="login-bg d-flex align-items-center">
      <div className="container d-flex justify-content-center align-items-center p-3">
        <form
          className="form-login d-flex flex-column "
          onSubmit={handleLogin}
        >
          <div className="form-header">
            <h2>Log in</h2>
            <p>
             Don't have an account?{" "}
              <Link
                to="/users/register"
                className="text-decoration-underlined signup-link"
              >
                Sign up for free
              </Link>
            </p>
            <p ref={errRef} aria-live="assertive" className="error-msg">
            {errMsg}
          </p>
          </div>
          
          <div className="inputs d-flex flex-column w-100 px-sm-5  ">
            <label htmlFor="email" className="mb-2">
              Email address
            </label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mb-3 shadow-none form-input"
              required
              autoFocus
              autoComplete="off"
            />
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="mb-2 shadow-none form-input"
              required
            />
            <p className="mb-4">
            <Link
                to="/users/forgotPassword"
                className="signup-link"
              >
                Forgot your password?
              </Link>
              </p>
            <button type="submit" className="submit-btn">
              Log in
            </button>
            

           </div>
        </form>
      </div>
    </div>
  );
}

export default Login;