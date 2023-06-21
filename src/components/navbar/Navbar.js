import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
      <nav className='navbar'>
        <img src="../logoc.png" className="nav--logo"/>
        <div className="navigators">
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            to='/submit'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Submit
          </NavLink>
          <NavLink
            to='/courses'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Courses
          </NavLink>
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Login/SignUp
          </NavLink>
        </div>
      </nav>
  )
};
export default Navbar;
