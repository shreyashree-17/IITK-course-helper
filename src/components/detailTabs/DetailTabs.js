import React from "react";

const DetailTabs = () => {
  return (
    <nav className="course-tabs">
      <div className="nav nav-tabs border-0 " id="nav-tab" role="tablist">
        <button
          className="nav-link active rounded-3 m-1 px-4"
          id="course-curriculum-tab"
          data-bs-toggle="tab"
          data-bs-target="#course-curriculum"
          type="button"
          role="tab"
          aria-controls="course-curriculum"
          aria-selected="true"
        >
          curriculum
        </button>
        <button
          className="nav-link rounded-3 m-1 px-4"
          id="course-description-tab"
          data-bs-toggle="tab"
          data-bs-target="#course-description"
          type="button"
          role="tab"
          aria-controls="course-description"
          aria-selected="false"
        >
          description
        </button>
        <button
          className="nav-link rounded-3 m-1 px-4"
          id="course-instructor-tab"
          data-bs-toggle="tab"
          data-bs-target="#course-instructor"
          type="button"
          role="tab"
          aria-controls="course-instructor"
          aria-selected="false"
        >
          instructor
        </button>
        <button
          className="nav-link rounded-3 m-1 px-4"
          id="course-reviews-tab"
          data-bs-toggle="tab"
          data-bs-target="#course-reviews"
          type="button"
          role="tab"
          aria-controls="course-reviews"
          aria-selected="false"
        >
          reviews
        </button>
      </div>
    </nav>
  );
};

export default DetailTabs;
