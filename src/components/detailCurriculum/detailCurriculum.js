import React from "react";

import "./detailCurriculum.css";

const DetailCurriculum = ({ chapters }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="course-curriculum"
      role="tabpanel"
      aria-labelledby="course-curriculum-tab"
    >
      <div className="course-curriculum">
        <h4 className="mb-4">Course Curriculum</h4>
        {/* accardion start */}
        <div className="accordion" id="accordion">
          {chapters.map((chapter) => (
            <div className="accordion-item" key={chapter.id}>
              <h2 className="accordion-header" id={`heading-${chapter.id}`}>
                <button
                  type="button"
                  className={
                    chapter.id === 1
                      ? "accordion-button "
                      : "accordion-button collapsed "
                  }
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${chapter.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${chapter.id}`}
                >
                  <div className="w-100 d-flex flex-column flex-md-row align-md-items-center justify-content-between">
                    <div className="chapter-name fs-5 mb-2 mb-md-0">
                      <span>{chapter.title}</span>
                    </div>
                    <div className="chapter-info me-2">
                      <span className="mb-1 mb-md-0 fs-6 ">
                        {chapter.total_parts} lessons
                      </span>
                      <span className="theme-clr mx-1">\</span>
                      <span>{chapter.total_time}</span>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`collapse-${chapter.id}`}
                className={
                  chapter.id === 1
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse "
                }
                aria-labelledby={`heading-${chapter.id}`}
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <ul>
                    {chapter.parts.map((part, index) => (
                      <li key={index} className="my-2">
                        <div className="d-flex justify-content-between">
                          <button type="button">
                            <i className="fas fa-play me-2 theme-clr"></i>
                            {part.sub_title}
                          </button>
                          <span>{part.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* accardion end */}
      </div>
    </div>
  );
};

export default DetailCurriculum;
