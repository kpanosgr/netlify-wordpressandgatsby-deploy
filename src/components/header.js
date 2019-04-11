import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
      }
    `}
  render={data => (
    <header
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        background: "#c2f1cc",
        zIndex: "10000",
        height: "70px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "block",
          margin: "0 auto",
          padding: "20px 0",
          overflow: "hidden",
          position: "relative",
          width: "300px",
          textAlign: "center",
        }}
      >
          <Link
            to="/"
            style={{
              color: `#000`,
              textDecoration: `none`,
              fontSize: "25px",
            }}
          >
            <h2>{data.wordpressSiteMetadata.name}</h2>
          </Link>        
      </div>
    </header>
   )}
  />
)

export default Header
