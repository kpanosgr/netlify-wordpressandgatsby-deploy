import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../images/arrow-top.png';

const BlogPostTemplate =({ data }) => (
    <Layout>
        <SEO
            title={data.wordpressPost.title}
            description={data.wordpressPost.excerpt}
        />
        <h1 style={{ textAlign: "center", }}>
            {data.wordpressPost.title}
        </h1>
       
        <div
            style={{ marginTop: 20 }}
            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        />   
        <div style={{ display: "block",
                        height: "37px",
                        margin: "50px auto 0",
                        position: "relative",
                        width: "15px", }}>
         <Link 
            to='#'
            style={{ backgroundImage: `url(${Background})`,
                    border: "medium none",
                    height: "37px",
                    textDecoration: "none",
                    textIndent: "-999px",
                    width: "15px",
                    display: "block", }}>TOTOP</Link>               
         </div>
    </Layout>
)

export default BlogPostTemplate

export const query = graphql`
    query($id: Int!) {
        wordpressPost(wordpress_id: { eq: $id }) {
            title
            content
            excerpt
            date(formatString: "MMMM DD, YYYY")
        }
    }
`