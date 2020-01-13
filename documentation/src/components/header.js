import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from "gatsby";
import logo from "../images/codecept-e2e-logo.jpg";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoSection: {
    height: '65px',
    width: '65px',
  },
  image: {
    width: '3%',
    height: '3%',
    'margin-right': '10px'
  },
}));

export default function Header({ siteTitle, siteDescription }) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
              <img className={classes.image} src={logo} alt="codeceptjs e2e logo" />
            <Typography variant="h6" className={classes.title}>
              {siteTitle}
            </Typography>
            <Tooltip title="Github Repository">
            <IconButton className={classes.gridContent}
                        onClick={() => {window.open('https://github.com/gkushang/codeceptjs-e2e', '_blank');}}>
              <GitHubIcon style={{fill: "white", 'aria-label': "some"}}/>
            </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
