import { NavLink } from 'react-router-dom';
import './footer.css'
const Footer = () => {
  return (
      <footer className='footer'>
        <div className=''></div>
        <div className="footers">
          <NavLink
            to='/privacy'
           className={"link linkf"}
          >
            Privacy Policy
          </NavLink>
          <div className='aboutF'><b>ABOUT:</b> Lorem ipsum dolor sit amet. Sed enim tempore et consequuntur quia qui possimus eaque in labore harum qui similique voluptas ut mollitia omnis et rerum 
          </div>
          <NavLink
            to='/contact'
            className={'link linkf'}
          >
            Contacts
          </NavLink>
          
        </div>
      </footer>
  )
};
export default Footer;