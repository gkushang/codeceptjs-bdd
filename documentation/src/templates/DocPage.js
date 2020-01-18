import React from 'react';
import {graphql} from 'gatsby';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layout';
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
    console.log('location:: ', location);

    return (
        <Layout title={post.frontmatter.title + ' | ' + data.site.siteMetadata.title} location={location}>
            <Typography variant="h4" className={classes.title} gutterBottom>
                {post.frontmatter.title}
            </Typography>
            <Typography variant="h6" className={classes.subTitle} gutterBottom>
                {post.frontmatter.subTitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {renderAst(post.htmlAst)}
                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt*/}
                {/*ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum*/}
                {/*facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit*/}
                {/*gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id*/}
                {/*donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit*/}
                {/*adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.*/}
                {/*Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis*/}
                {/*imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget*/}
                {/*arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem*/}
                {/*donec massa sapien faucibus et molestie ac.*/}
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
        subTitle
      }
    }
  }
`;
