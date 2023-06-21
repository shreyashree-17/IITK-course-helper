import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';
const Home = () => {
  return (
    <>
      <Navbar />
      <Footer/>
      <Outlet />
    </>
  );
};
export default Home;
