import React from "react";
import AppLayout from "../components/AppLayout";
import AppCard from "../components/AppCard";
import codeceptjsBddFrameworkImage from "../images/codeceptbdd-arc.png";
import BDD from "../images/BDD.png";
import cucumber from "../images/cucumber1.png";
import multibrowsers from "../images/multibrowsers.png";
import saucelabs from "../images/saucelabs1.png";
import { Divider } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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
  title: {
    fontSize: 18,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
  arch: {
    paddingTop: 30
  }
}));


const IndexPage = () => {
  const classes = useStyles();

  return (
  
  <AppLayout>
    <div className={classes.root}>
    <Typography variant="h4" component="h2" gutterBottom>
      Codeceptjs BDD
    </Typography>
    <Typography variant="overline" display="block"  gutterBottom>
      CODECEPTJS BDD Framework integrated with Cucumber and Saucelabs cloud
    </Typography>
  
    <Divider/>
    <br></br>

    <Typography variant="h6" color="gray" display="block" className={classes.title} gutterBottom>
      Codeceptjs-BDD makes acceptance and regression testing of modern web apps faster, more collaborative and easier to scale.
    </Typography>
    
    <Grid container spacing={5} className={classes.arch}>
        <Grid item sm={3}>
          <AppCard 
          title="Why BDD?" 
          description="BDD is a great way to colloborate within teams & with stakeholders to create shared understanding of how the product should behave, capture concrete examples and create an executable & living specification on-the-fly."  
          link="https://medium.com/hackernoon/bdd-in-3-minutes-c3f8fc022237" 
          image={BDD}/>
        </Grid>

        <Grid item sm={3}>
          <AppCard 
          title="Write Feature Files" 
          description="CodeceptJs BDD integrates Cucumber to write Gherkin Feature Files. Cucumber is a popular collaboration tool used by many teams practiving BDD to capture requirements and create executable specifications."  
          link="https://cucumber.io/" 
          image={cucumber}/>
        </Grid>

        <Grid item sm={3}>
        <AppCard 
          title="Execute On Cloud" 
          description="CodeceptJs BDD integrates Sauce Labs to execute tests on 900+ Desktop/Mobile browses, OS & Devices combinations. Tests can be executed locally or on Sauce Labs Browsers for broader coverage."  
          link="https://saucelabs.com/" 
          image={saucelabs}/>
        </Grid>

        <Grid item sm={3}>
        <AppCard 
          title="Multi Browsers in Parallel" 
          description="CodeceptJs BDD provides an ability to run BDD Feaure files all in Parallel on Single browser or run same set of tests in Parallel but on different browsers/OS combo on Sauce Labs."  
          link="/execution/sauce-labs/on-multiple-browsers/" 
          image={multibrowsers}/>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.arch}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="architecture" className={classes.avatar}>
                A
              </Avatar>
            }
            title="Framework Architecture"
            subheader="Codeceptjs BDD"
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
            <Button variant="contained"  size="large" color="primary" href="getting-started/installation/">
              Getting Started
            </Button>

            <Button variant="contained"  size="large" color="secondary" href="getting-started/setup-framework/">
              Quick Setup
            </Button>
          </CardActions>
          </Card>
      </Grid>
      </div>
  </AppLayout>
)};

export default IndexPage
