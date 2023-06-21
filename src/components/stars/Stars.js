import React from "react";

const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <i className="fas fa-star"></i>
        ) : stars >= number ? (
          <i className="fas fa-star-half-alt"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
      </span>
    );
  });

  return <div className="stars-component">{tempStars}</div>;
};

export default Stars;
