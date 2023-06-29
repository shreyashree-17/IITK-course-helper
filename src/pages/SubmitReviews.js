import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitReviews = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <section className='section'>
      <h2 className="text-center fs-4 mb-5 fw-bold">Submit Material</h2>
              <form  onSubmit={handleClick}>
                <div className="form-group mb-3">
                <input
                  type='numer'
                  min="1" max="5"
                  className='form-input form-control'
                  id='stars'
                  placeholder="Stars"
                  required
                />
                </div>
                <div className="form-group mb-3 review-description">
                <input
                    type='text' 
                    className='form-input descri form-control'
                    id='review'
                    placeholder="Review..."
                    required
                  />
                </div>
                <button type="submit" className="btn theme-btn w-100 my-4">
                  Submit
                </button>
                <p className="text-center">
                <button onClick={handleClick}> Go back</button>
                </p>
              </form>
    </section>
  );
};
export default SubmitReviews;
