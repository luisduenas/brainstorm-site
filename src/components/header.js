import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/logo.png'

function Header({ title }) {
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)
  return (
    <header>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <img className="logo-badge" src={logo} alt="Logo" />
          <div className="nav-title">{title}</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          {[
            {
              route: `#home`,
              title: `Home`,
            },
            {
              route: `#about`,
              title: `About us`,
            },
            // {
            //   route: `/products`,
            //   title: `Products`,
            // },
            // {
            //   route: `/blog`,
            //   title: `Blog`,
            // },
            {
              route: `#contact`,
              title: `Contact`,
            },
          ].map(link => (
            <Link key={link.title} to={link.route}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
