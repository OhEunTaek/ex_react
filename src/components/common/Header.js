import { Link, NavLink } from 'react-router-dom'
import { faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { faApplePay } from '@fortawesome/free-brands-svg-icons'
import { faGooglePay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link to="/">
            <FontAwesomeIcon icon={faTruckFast} className='icon' />
            <strong>Delivery</strong>
          </Link>
        </h1>

        <nav className="menu">
          <ul className="gnb">
            <li className="item">
              <NavLink to="/department">Organization</NavLink>
            </li>
            <li className="item">
              <NavLink to="/community">Noticeboard</NavLink>
            </li>
            <li className="item">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="item">
              <NavLink to="/youtube">Youtube</NavLink>
            </li>
            <li className="item">
              <NavLink to="/location">Contact Us</NavLink>
            </li>
            <li className="item">
              <NavLink to="/members">Join Us</NavLink>
            </li>
          </ul>



          <div className="app">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime.</p>
            <div className="app-group">
              <Link to="/">
                <FontAwesomeIcon icon={faApplePay} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faGooglePay} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
