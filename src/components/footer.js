import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Footer = () => (
  <footer
    style={{
      background: `#3f72af`,
      //   bottom: `0px`,
      //   position: "absolute",
      width: "100%",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.9rem 0.9rem`,
      }}
    >
      <h3 style={{ color: "#f9f7f7", margin: "0" }}>
        Copyright 2021 Adam Kowalczuk
      </h3>
    </div>
  </footer>
)

export default Footer
