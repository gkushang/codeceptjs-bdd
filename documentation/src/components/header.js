import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function Header({ siteTitle, siteDescription }) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="sticky" color={"primary"}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {siteTitle}
            </Typography>
            <IconButton className={classes.gridContent}
                        onClick={() => {window.open('https://github.com/gkushang/codeceptjs-e2e', '_blank');}}>
              <GithubIcon color={"secondary"}/>
            </IconButton>
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
