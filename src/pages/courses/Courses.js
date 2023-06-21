import { Link } from 'react-router-dom';
import courses from '../../assets/data';
import './Courses.css'
import Star from '../../components/stars/Stars'

const Courses = () => {
  return (
    <section className='section'>
       <div className='courses'>
        {courses.map((course) => {
          const discripLength = course.description.substring(0,94);
          const { image, name } = course;
          
          return (
            <div className='card'>
              {course.badgetext && <div className="badge">ONLINE</div>}
              <img src={image} alt={name} />
              <article key={course.id} className='course-list'>
                <div className='course-name-and-rating'>
                  <h5 className='courses-name'>{course.name}</h5>
                  <p className='proffN'>{course.Proff}</p>
                  <div>
                  <img src='../red-star.png' className='star'/>
                  <p>{course.rating}  <span className='gray'>({course.numOfReview})</span></p>
                  </div>
                </div>
                <div>
                <p className='discription'> {discripLength}...  <span><Link to={`/courses/${course.id}`}>more info</Link></span>
                </p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
      <div className='clear'></div>
    </section>
  );
};

export default Courses;
