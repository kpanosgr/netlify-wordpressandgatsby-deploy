import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
         <a style={{ backgroundImage: `url(${Background})`,
                    border: "medium none",
                    height: "37px",
                    textDecoration: "none",
                    textIndent: "-999px",
                    width: "15px",
                    display: "block", }} href="#">TOTOP</a> </div>
        <div class="share"> <a class="facebook first" target="_blank" href="http://www.facebook.com/share.php?u=<?php the_permalink(); ?>&t=<?php the_title(); ?>">Facebook</a> <a class="twitter" target="_blank" href="http://twitter.com/home?status=<?php the_title(); ?> - <?php the_permalink(); ?>">Twitter</a> <a class="pinterest" target="_blank" href="http://pinterest.com/pin/create/link/?url=<?php the_permalink(); ?>">Pinterest</a> </div>
        <div class="clear"></div> 
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