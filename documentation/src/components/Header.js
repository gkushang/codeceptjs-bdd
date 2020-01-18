import PropTypes from 'prop-types';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from "gatsby";
import logo from "../images/codecept-e2e-logo.jpg";
import cucumberLogo from "../images/cucumber.png";
import Sidebar from "./Sidebar";
import Drawer from "@material-ui/core/Drawer";

import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    // zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  // root: {
  //   display: 'flex'
  // },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'none',
  //   }
  // },
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
    'margin-right': '10px',
    opacity: 0.9
  },
  cucumberImage: {
    width: '3.4%',
    height: '3.4%',
    'margin-right': '10px',
    'margin-left': '-30px',
    zIndex:-1
  }
}));

function Header({ siteTitle, siteDescription }, props) {
  const { container, location } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
              <img className={classes.image} src={logo} alt="codeceptjs e2e logo" />
              <img className={classes.cucumberImage} src={cucumberLogo} alt="cucumber logo" />
              <Typography variant="h6" className={classes.title}>
                {siteTitle}
              </Typography>

            <Tooltip title="Go to Homee">
              <Link to="/">
              <IconButton
                  aria-label="Go back to home page"
                  color="inherit"
                  >
                <HomeIcon style={{fill: "white", 'aria-label': "some"}}/>
              </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Github RRepository">
            <IconButton
                aria-label="Home"
                color="inherit"
                onClick={() => {window.open('https://github.com/gkushang/codeceptjs-e2e', '_blank');}}>
              <GitHubIcon style={{fill: "white", 'aria-label': "some"}}/>
            </IconButton>
            </Tooltip>

          </Toolbar>

      </AppBar>

        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
            >
              <Sidebar location={location} />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
              <Sidebar location={location} />
            </Drawer>
          </Hidden>
        </nav>
      </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
