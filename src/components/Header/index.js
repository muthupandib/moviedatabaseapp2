import {useState} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const [isSowMenu, setToggle] = useState(false)
  const toggleMenuBtn = () => {
    setToggle(prev => !prev)
  }
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="link">
          <h1 className="logo-name">
            Prime <span className="logo-high">Show</span>
          </h1>
        </Link>
        <div className="nav-items-lg">
          <Link to="/" className="link">
            <p className="item-lg">Home</p>
          </Link>
          <Link to="/top-rated" className="link">
            <p className="item-lg">Top Rated</p>
          </Link>
          <Link to="/upcoming" className="link">
            <p className="item-lg">Upcoming</p>
          </Link>
        </div>
        {!isSowMenu ? (
          <button
            type="button"
            className="menu-btn"
            onClick={toggleMenuBtn}
          ></button>
        ) : (
          <button
            type="button"
            className="menu-btn"
            onClick={toggleMenuBtn}
          ></button>
        )}
      </nav>
      {isSowMenu ? (
        <div className="menu-div">
          <div className="nav-items-sm">
            <Link to="/" className="route-link">
              <p className="item"> Home</p>
            </Link>
            <Link to="/top-rated" className="route-link">
              <p className="item">Top Rated Movies</p>
            </Link>
            <Link to="/upcoming" className="route-link">
              <p className="item">Upcoming Movies</p>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Header
