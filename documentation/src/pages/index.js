import React from "react"
import AppLayout from "../components/AppLayout"
import codeceptjsBddFrameworkImage from "../images/codeceptbdd-arc.png";
import { Divider } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },

  card: {
    height: '100%',
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));


const IndexPage = () => {
  const classes = useStyles();

  return (
  
  <AppLayout>
    <Typography variant="h4" component="h2" gutterBottom>
      Codeceptjs BDD Framework
    </Typography>
    <Typography variant="h6" gutterBottom>
      BDD Framework with Cucumber and Saucelabs cloud
    </Typography>
  
    <Divider/>
    <br></br>
    <br></br>

    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="architecture" className={classes.avatar}>
            A
          </Avatar>
        }
        title="Architecture"
        subheader="Codeceptjs BDD Framework"
      />
      <CardMedia
        className={classes.media}
        image={codeceptjsBddFrameworkImage}
        title="Architecture"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained"  size="large" color="primary" href="getting-started/setup-framework/">
          Quick Setup
        </Button>
      </CardActions>
      </Card>
  </AppLayout>
)};

export default IndexPage
