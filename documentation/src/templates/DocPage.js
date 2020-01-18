import React from 'react';
import {graphql} from 'gatsby';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layout';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

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
        fontWeight: theme.typography.fontWeightMedium,
    },
    subTitle: {
        color: '#444444',
        fontWeight: theme.typography.fontWeightRegular,
    },

}));

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
    }
}).Compiler;

export default function DocPage({data, location}) {
    const classes = useStyles();
    const post = data.markdownRemark;

    return (
        <Layout title={post.frontmatter.title + ' | ' + data.site.siteMetadata.title} location={location}>
            <Typography variant="h4" className={classes.title} gutterBottom>
                {post.frontmatter.title}
            </Typography>
            <Typography variant="h6" className={classes.subTitle} gutterBottom>
                {post.frontmatter.sub_title}
            </Typography>
            <Divider/>
            <Typography variant="body1" gutterBottom>
                {renderAst(post.htmlAst)}
            </Typography>
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
        sub_title
      }
    }
  }
`;
