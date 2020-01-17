import React from 'react';
import {graphql} from 'gatsby';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layout';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.secondary,
        '&:focus > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        }
    },
    article: {
      color:  '#444444',
      fontSize: 16
    },
    title: {
        color: '#444444',
        paddingRight: theme.spacing(100),
        fontWeight: theme.typography.fontWeightMedium,
    },
    subTitle: {
        color: '#5d5d5d',
        fontSize: 18,
        fontWeight: theme.typography.fontWeightRegular,
        marginBottom: '40px'
    },

}));


const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        // This is the mapping when you want to create custom components embedded in the markdown file
    }
}).Compiler;

export default function DocPage({data, location}) {
    const classes = useStyles();
    const post = data.markdownRemark;

    return (
        <Layout title={post.frontmatter.title + ' | ' + data.site.siteMetadata.title} location={location}>
            <h1 className={classes.title}>{post.frontmatter.title}</h1>
            <h2 className={classes.subTitle}>{post.frontmatter.subTitle}</h2>
            <article className={classes.article}>
                {renderAst(post.htmlAst)}
            </article>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      htmlAst
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
