import React from "react";

const DetailDescription = ({ course_desc, course_info }) => {
  return (
    <div
      className="tab-pane fade"
      id="course-description"
      role="tabpanel"
      aria-labelledby="course-description-tab"
    >
      <div className="course-description">
        <h4 className="mb-4">Course Curriculum</h4>
        <p>{course_desc}</p>
        <h5>{course_info.question} :</h5>
        <ul>
          {course_info.answer.map((item, index) => (
            <li className="mb-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailDescription;
