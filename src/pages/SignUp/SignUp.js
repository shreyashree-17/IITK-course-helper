import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './SignUp.css'

const SignUp = ({ setUser }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setUser({ name : name});
    navigate('/dashboard');
  };

  return (
    <>
    <section className="signup">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="box">
              <h2 className="text-center fs-4 mb-5 fw-bold">Create Your Account</h2>
              <form  onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                <input
                  type='text'
                  className='form-input form-control'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
                </div>
                <div className="form-group mb-3">
                <input
                    type='email'
                    className='form-input form-control'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn theme-btn w-100 my-4">
                  Sign Up
                </button>
                <p className="text-center">
                Already have an account?<Link to="/login"> Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SignUp;
