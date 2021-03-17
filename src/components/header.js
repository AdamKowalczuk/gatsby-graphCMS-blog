import * as React from "react"
import PropTypes from "prop-types"
import "../styles/layout.scss"
import "../styles/header.scss"
import { Link } from "gatsby"

function openNav() {
  document.getElementById("myNav").style.height = "100%"
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%"
}
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
      <span
        onClick={() => openNav()}
        style={{ fontSize: "30px", cursor: "pointer", color: "#f9f7f7" }}
      >
        &#9776;{" "}
      </span>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>
        <div className="overlay-content">
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
      {/* <div className="menu">
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
      </div> */}
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
