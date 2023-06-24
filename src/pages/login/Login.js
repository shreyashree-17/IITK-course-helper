import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = ({ setUser }) => {
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setUser({ name : email });
    navigate('/dashboard');
  };

  return (
    <section className="login">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <div className="box">
                <h2 className="text-center fs-4 mb-5 fw-bold">
                  Log In To Your Account
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3 ">
                    <input
                      type='email'
                      className='form-input form-control'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                  <div className="d-flex justify-content-end my-3">
                    <Link to={""}>Forgot Password?</Link>
                  </div>
                  <div className="form-group mb-3 ">
                    <input
                      
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPass(e.target.value)}
                     required/>
                  </div>
                  <button type="submit" className=" btn btn-block theme-btn w-100 my-4">
                    Log In
                  </button>
                  <p className="text-center">
                    Don't have an account ?<Link to="/signup"> Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default Login;
