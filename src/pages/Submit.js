import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = () => navigate('/underreview');


  const [,setFile] = React.useState()
  const [, setIsFilePicked] = React.useState(false);
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
                  required
                />
                </div>
                <div className="form-group mb-3">
                <input
                    type='text'
                    className='form-input descri form-control'
                    id='decription'
                    placeholder="Description"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                <input  
                accept=".pdf" 
                type="file" 
                onChange={uploadFile}
                placeholder="Upload pdf file"
                required/>
                </div>
                <button type="submit" className="btn theme-btn w-100 my-4">
                  Submit
                </button>
                <p className="text-center">
                Already have an account?<Link to="/login"> Log In</Link>
                </p>
              </form>
    </section>
  );
};
export default Submit;
