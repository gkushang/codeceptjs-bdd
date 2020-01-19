
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    siteContainer: {
        height: '100%',
    },
    bodyContainer: {
        height: '100%',
        display: 'flex',
    },
    headerAndContent: {
      marginBottom: '72px',
    },
    mainSection: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    pageContent: {
        padding: '1em 3em',
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Layout({ children, location }) {
    const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div className={classes.siteContainer}>
          <div className={classes.bodyContainer}>
            <main className={classes.mainSection}>
                <div className={classes.toolbar} />
                <div className={classes.headerAndContent}>
                    <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} props={location}/>
                    <main className={classes.content}>
                        <Typography paragraph>{children}</Typography>
                    </main>
                </div>
            </main>
          </div>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
