import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mycontext } from '../../App';

function Login() {

  const { user, username, setUsername, password, setPassword, setLogo, setAdmin } = useContext(Mycontext);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both username and password fields.");
    } else {
      const userData = user.find((userData) => userData.username === username && userData.password === password);
      if (userData.username=="risvan"&&userData.password==123) {
        setAdmin(true);
        alert("Login successfully");
        setLogo(userData);
        console.log(userData);
        Navigate("/");
      }

      else if (userData) {
        setAdmin(false);
        alert("Login successfully");
        setLogo(userData);
        console.log(userData);
        Navigate("/");
      } else {
        setAdmin(false);
        alert("nvalid Username or Password");
      }
    }
  };


  return (
    <>
      <div className='login-outer'>
        <div className='login-inner'>
          <form onSubmit={handleSubmit}>
            <label>USERNAME</label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder='ENTER USERNAME'
            />
            <br />
            <label>PASSWORD</label>
            <input type='password'
              name='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}

              placeholder='ENTER PASSWORD'
            />
            <button className='login button' type='submit'>
              Login
            </button>
            <br />
            <br />

            <Link to='/register'>
              <button className='btn-primary'>Create new account</button>
            </Link>
          </form>
        </div>
      </div>
    </>)
}
export default Login;