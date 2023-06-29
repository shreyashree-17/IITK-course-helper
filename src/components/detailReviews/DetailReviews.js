import React from "react";
import { Link } from "react-router-dom";

import "./detailReviews.css";

import Stars  from "../stars/Stars";

const DetailReviews = ({ coments, rating }) => {
  return (
    <div
      className="tab-pane fade"
      id="course-reviews"
      role="tabpanel"
      aria-labelledby="course-reviews-tab"
    >
      <div className="course-reviews">
        <div className="flex-row">
          <h4 className="mb-4">Students Feedback</h4>
          <Link to="/reviewsubmit" className="btn"> Submit Review</Link>
        </div>
        <div className="reviews-star row align-items-center">
          <div className="col-md-4">
            <div className="reviews-rating text-center">
              <div className="rating-average">
                <span className="fs-1 fw-bold">({rating.stars_average})</span>
              </div>
              <div className="rating-stars">
                <Stars stars={rating.stars_average} />
              </div>
              <div className="rating-reviews">
                <span>{rating.reviews} Reviews</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="reviews-bars">
              {rating.stars.map((item, index) => (
                <div
                  className="bars d-flex align-items-center my-2"
                  key={index}
                >
                  <div className="bars-star theme-clr">
                    <span>{item.star} Star</span>
                  </div>
                  <div className="bars-progress w-75 mx-2">
                    <div className="progress ">
                      <div
                        className="progress-bar theme-bg"
                        style={{ width: `${item.percent}` }}
                      ></div>
                    </div>
                  </div>
                  <div className="bars-pecent">
                    <span>{item.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reviews-comment">
          <h4 className="my-3">Reviews</h4>
          {coments.map((comment, index) => (
            <div className="comment  mb-3" key={index}>
              <div className="row">
                <div className="col-2 col-md-1 pe-0">
                  <div className="comment-img">
                    <img src={comment.img} alt="user img" />
                  </div>
                </div>
                <div className="col-10 col-md-11">
                  <div className="comment-text">
                    <span>{comment.user}</span>
                    <div className="d-flex">
                      <Stars stars={comment.star} />
                      <span className="ms-2">{comment.time}</span>
                    </div>
                    <h5>{comment.title}</h5>
                    <p>{comment.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailReviews;
