import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = () => navigate('/underreview');


  const [file,setFile] = React.useState()
  const [isFilePicked, setIsFilePicked] = React.useState(false);
  const uploadFile = async (e) =>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])
    e.target.files[0] && setIsFilePicked(true);
    }
  return (
    <section className='section'>
      <h2 className="text-center fs-4 mb-5 fw-bold">Submit Material</h2>
              <form  onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                <input
                  type='text'
                  className='form-input form-control'
                  id='name'
                  placeholder="Subject"
                />
                </div>
                <div className="form-group mb-3">
                <input
                    type='email'
                    className='form-input descri form-control'
                    id='email'
                    placeholder="Description"
                  />
                </div>
                <div className="form-group mb-3">
                <input  
                accept=".pdf" 
                type="file" 
                onChange={uploadFile}
                placeholder="Upload pdf file"/>
                </div>
                <button type="submit" className="btn theme-btn w-100 my-4">
                  Sign Up
                </button>
                <p className="text-center">
                Already have an account?<Link to="/login"> Log In</Link>
                </p>
              </form>
    </section>
  );
};
export default Submit;
