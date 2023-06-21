import React from "react";

import Stars  from "../stars/Stars";

import "./detailHeader.css";

const DetailHeader = ({
  stars_average,
  reviews,
  students,
  creator_name,
  last_Update,
  language,
}) => {
  return (
    <div className="box">
      <h2 className="text-capitalize mb-3">javascript for beginners</h2>
      <div className="header-rating d-flex mb-1 ">
        <span className="me-1">({stars_average})</span>
        <Stars stars={stars_average} />
        <span className="ms-1">({reviews} Reviews)</span>
      </div>
      <p className="mb-1">Enrolled Students - {students}</p>
      <p className="mb-1">
        Created By - <span className="theme-clr">{creator_name}</span>
      </p>
      <p className="mb-1">Last Updated - {last_Update}</p>
      <p>Language - {language}</p>
    </div>
  );
};

export default DetailHeader;
