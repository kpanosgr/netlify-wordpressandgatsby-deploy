import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link 
            to={`/post/${post.node.slug}`}
            style={{ display: "flex", color:"#000", textDecoration:"none" }}
          >
            <div style={{ width: "100%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: "0" }}
              />
              <p style= {{margin:0, color: "gray" }}>
                {post.node.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>            
          </Link>
        </li>
      ))}  
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
 query {
   allWordpressPost {
     edges {
       node {
         title
         excerpt
         slug
         date(formatString: "DD/MM/YYYY")
       }
     }
   }
 }
`