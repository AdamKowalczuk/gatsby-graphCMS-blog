import * as React from "react"
import PropTypes from "prop-types"
import "../styles/header.scss"
import "../styles/layout.scss"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3f72af`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="menu">
        <h3>
          <Link className="link" to="/historie">
            Historie
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/cytaty">
            Cytaty
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/ksiazki">
            Książki
          </Link>
        </h3>
        <h3>
          <Link className="link" to="/aplikacje">
            Aplikacje
          </Link>
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
