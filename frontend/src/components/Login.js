import React, { useState } from "react";
import axios from 'axios'; // Import Axios for HTTP requests
import './loginstyle.css';
// import Managerhome from "./Managerhome";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  var [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/LoginAPIView/', { username, password })
      .then(response => {
        if (response.data.status === 'success') {
          console.log('API Response:', response.data);
          setLoggedIn(true); // Login successful, set loggedIn state to true
          if (response.data.role === 'HR'){
            navigate('/hrhome');
          }
          else if(response.data.role === 'Manager') {
            navigate('/home');
          }
          else if(response.data.role === 'Employee'){
            navigate('/hrhome')
          }
          // return <Managerhome />;
        } else {
          setError('Invalid username or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        setError('An error occurred during login. Please try again.');
      });
  };
  // const handleLogout = () => {
  //   // Remove the token from local storage
  //   localStorage.removeItem('token');
  
  //   // Redirect to the login page
  //   history.push('/login');
  // };
  
  // alert(loggedIn);
  if (loggedIn) {
    navigate('/home');
    
  }
    return (
      <div className="row justify-content-center" style={{ paddingTop: "100px" }}>
        <div className="col-md-6 col-lg-5">
          <div className="icon d-flex align-items-center justify-content-center"></div>
         
          <h3 className="text-center mb-4">Login</h3>
          <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control rounded-left" name="username" placeholder="Username" required />
                  </div>
                  <div className="form-group d-flex">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control rounded-left" name="password" placeholder="Password" required />
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50">
                      <label className="checkbox-wrap checkbox-primary">Remember Me
                        <input type="checkbox"  />
                        <span className="checkmark"></span>
                      </label>
                      
                    </div>
                  </div>
                  {error && <div className="text-danger">{error}</div>}
            <div className="form-group">
              <button type="submit" className="btn btn-primary rounded submit p-3 px-5">Sign in</button>
              
            </div>
          </form>
        </div>
      </div>
    )

  // }

}

export default Login;
