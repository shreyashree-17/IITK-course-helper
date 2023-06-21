import { Outlet } from 'react-router-dom';
import './SharedCoursesLayout.css'
const Home = () => {
  return (
    <>
      <h2 className='courses-heading text-center fs-4 mb-5 fw-bold'>Courses</h2>
      <Outlet />
    </>
  );
};
export default Home;
