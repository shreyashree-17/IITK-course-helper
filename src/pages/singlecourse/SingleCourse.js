import { Link, useParams } from 'react-router-dom';
import course from '../../assets/dataSC/dataSC';
import courses from '../../assets/data';
import './SingleCourse.css';

import DetailAside from '../../components/detailAside/DetailAside';
import DetailCurriculum from '../../components/detailCurriculum/detailCurriculum';
import DetailDescription from '../../components/detailDescription/DetailDescription';
import DetailHeader from '../../components/detailHeader/DetailHeader';
import DetailInstructor from '../../components/detailInstructor/DetailInstructor';
import DetailReviews from '../../components/detailReviews/DetailReviews';
import DetailTabs from '../../components/detailTabs/DetailTabs';

const {
  info,
  details,
  chapters,
  description,
  creator,
  coments,
  rating,
} = course;

const SingleCourse = () => {
  const { courseId } = useParams();
  // consyt product = courses.find((course) => course.id === courseId);
  // const { image, name } = product;
  return (
    <section className='section product'>
      <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 order-lg-last ">
              <DetailAside {
                ...details} />
            </div>
            <div className="col-lg-8">
              <div className="course-main">
                <div className="main-header">
                  <DetailHeader {...info} />
                </div>
                <div className="main-tabs my-4">
                  <DetailTabs />
                </div>
                <div className="main-tab-content box">
                  <div className="tab-content" id="nav-tabContent">
                    {/* course-curriculum start */}
                    <DetailCurriculum chapters={chapters} />
                    {/* course-curriculum end */}
                    {/* course-description start */}
                    <DetailDescription {...description} />
                    {/* course-description end */}
                    {/* course-instructor start */}
                    <DetailInstructor {...creator} />
                    {/* course-instructor end */}
                    {/* course-reviews start */}
                    <DetailReviews coments={coments} rating={rating} />
                    {/* course-reviews end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <img src={image} alt={name} />
      <h5>{name}</h5> */}
      <Link to='/courses' className='btn'>Submit</Link>
    </section>
   
  );
};

export default SingleCourse;
