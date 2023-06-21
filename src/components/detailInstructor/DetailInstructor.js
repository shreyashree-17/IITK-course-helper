import React from "react";

import "./detailInstructor.css";

const DetailInstructor = ({
  creator_img,
  creator_name,
  creator_skill,
  creator_rating,
  creator_courses,
  creator_reviews,
  creator_desc,
}) => {
  return (
    <div
      className="tab-pane fade"
      id="course-instructor"
      role="tabpanel"
      aria-labelledby="course-instructor-tab"
    >
      <div className="course-instructor">
        <h4 className="mb-4">Instructor</h4>
        <div className="instructor">
          <div className="instructor-header d-flex align-items-center">
            <div className="instructor-img w-25 me-4">
              <img src={creator_img} alt={creator_name} />
            </div>
            <div className="instructor-info">
              <span className="fs-4">{creator_name}</span>
              <span className="theme-clr ms-2">({creator_skill})</span>
              <ul>
                <li>
                  <i className="theme-clr me-1 fas fa-star"></i>
                  {creator_rating} Rating
                </li>
                <li>
                  <i className="theme-clr me-1 fas fa-play-circle"></i>
                  {creator_courses} Courses
                </li>
                <li>
                  <i className="theme-clr me-1 fas fa-certificate"></i>
                  {creator_reviews} Reviews
                </li>
              </ul>
            </div>
          </div>
          <div className="instructor-desc">
            <p className="mt-3 fs-5">{creator_desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInstructor;
