import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq:"pages menu" } ) {
          items {
            title
            object_slug
          }
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
        background: "transparent",
        zIndex: "10000",
        height: "130px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "block",
          height: "90px",
          margin: "0 auto",
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
            }}
          >
            NIKOS PAPADOPOULOS photography
          </Link>        
      </div>
      <div style={{
          background: "none",
          textAlign: "center",
          width: "100%",
        }}
        >
          <div style={{
            borderTop: "1px solid #000",
            height: "40px",
            width: "900px",
            margin: "0 auto",
            overflow: "hidden",
            textAlign: "center",
          }}>
            <ul style={{ display: "table",
                          height: "42px",
                          lineHeight: "20px",
                          listStyle: "none",
                          margin: "0 auto",
                          padding: "0",
            }}>
              {data.wordpressWpApiMenusMenusItems.items.map(item => (
                <li key={item.object_slug} style={{ float: "left",
                                                    display: "inline",
                                                    fontSize: "13px",
                                                    margin: "0px",
                                                    padding: "0px", }}>
                  <Link 
                    to={`/${item.object_slug}`}
                    style={{ 
                      color: "#000000",
                      display: "block",
                      height: "42px",
                      margin: "10px 10px",
                      textDecoration: "none",
                      letterSpacing: "1px",
                      width: "50px",
                    }}
                  >                
                    {item.title}            
                  </Link>
                </li>
              ))}  
            </ul>
          </div>
      </div>
    </header>
   )}
  />
)

export default Header
