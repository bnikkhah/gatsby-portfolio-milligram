import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="column">
          <ul className="list-inline mb-0 float-right">
            <li className="list-inline-item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
