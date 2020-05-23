import React from 'react';
import AppLayout from '../components/AppLayout';
import AppCard from '../components/AppCard';
import codeceptjsBddFrameworkImage from '../images/codeceptbdd-arch.png';
import howImage from '../images/How.png';
import BDD from '../images/BDD.png';
import autoRetry from '../images/autoRetry.png';
import driversImage from '../images/driverAgnostic.png';
import pluginBasedImage from '../images/pluginBased.png';
import cucumber from '../images/cucumber1.png';
import quickStartYt from '../images/quick-setup-yt.png';
import runParallelYt from '../images/run-parallel-yt.png';
import runMultiYt from '../images/run-multi-yt.png';
import runSauceYt from '../images/run-sauce-yt.png';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Hidden from '@material-ui/core/Hidden';
import { Link as GatsbyLink } from 'gatsby';

import multibrowsers from '../images/multi-browsers.png';
import saucelabs from '../images/saucelabs1.png';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DomainIcon from '@material-ui/icons/Domain';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  card: {
    height: '100%',
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'red',
  },
  arch: {
    paddingTop: 30,
  },
}));

const renderAppCards = () => {
  const appCardData = [
    {
      size: 4,
      title: 'Why BDD?',
      description:
        'BDD is a great way to colloborate within teams & with stakeholders to create shared understanding of how the product should behave, capture concrete examples and create an executable & living specification on-the-fly.',
      link: 'https://medium.com/hackernoon/bdd-in-3-minutes-c3f8fc022237',
      image: BDD,
    },
    {
      size: 4,
      title: 'Write Feature Files',
      description:
        'CodeceptJs BDD integrates Cucumber to write Gherkin Feature Files. Cucumber is a popular collaboration tool used by many teams practiving BDD to capture requirements and create executable specifications.',
      link: '/03-bdd-cucumber/1-feature/',
      image: cucumber,
    },
    {
      size: 4,
      title: 'Execute On Cloud',
      description:
        'CodeceptJs BDD integrates Sauce Labs to execute tests on 900+ Desktop/Mobile browses, OS & Devices combinations. Tests can be executed locally or on Sauce Labs Browsers for broader coverage.',
      link: '/06-execution/3-run-on-saucelabs/',
      image: saucelabs,
    },
    {
      size: 3,
      title: 'Driver Agnostic',
      description:
        'Run your tests via WebDriver and Playwright. The code is the same. It is easy to change the driver through configuration. Codecpetjs-BDD supports Pupetter, Headless Chrome, Selenium Webdriver and Webdriver IO.',
      link: 'https://codecept.io/plugins/#retryfailedstep',
      image: driversImage,
    },
    {
      size: 3,
      title: 'Reduced Flakiness',
      description:
        'Codeceptjs has in-built Smart Wait and Auto Retry features for the elements that do not load in-time or elements that fails. Codeceptjs-BDD framework has configured these features that reduces the UI Test Flakiness at low level during DOM Element evaluation.',
      link: 'https://codecept.io/plugins/#retryfailedstep',
      image: autoRetry,
    },
    {
      size: 3,
      title: 'Plugin Based',
      description:
        'Codeceptjs is a plugin based architecture. You can create helpers and plugins for your need and easily plug in to the framework. Codeceptjs-bdd implements two plugins: codeceptjs-share to share config and codeceptjs-saucelabs to integrate Sauce Labs.',
      link: 'https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages',
      image: pluginBasedImage,
    },
    {
      size: 3,
      title: 'Multibrowsers | Parallel',
      description:
        'Codeceptjs BDD provides an ability to run BDD Feaure files all in Parallel on Single browser or can run same set of tests in Parallel but on different browsers/OS combo (multile browers) on Sauce Labs. It offers greate Test Execution Coverage for your App.',
      link: '/06-execution/5-run-on-multi-browsers/',
      image: multibrowsers,
    },
    {
      size: 3,
      title: 'Quick Setup Wizard',
      description:
        'Quicky setup BDD framework for your App. Codecept-BDD implemetns the Interactive CLI to quickly setup the BDD Framework, integration with Sauce Labs and provides set of example Automated Feature files.',
      link:
        'https://www.youtube.com/watch?time_continue=1&v=OGrn1ejyb-k&feature=emb_logo',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: quickStartYt,
    },
    {
      size: 3,
      title: 'Parallel Executions',
      description:
        'Run all your Feature files in Parallel. Codeceptjs-BDD automatically calculates number of threads to spun based on # of Features. You can choose to run them on either Sauce Labs or Locally installed browsers.',
      link: 'https://www.youtube.com/watch?v=he0_wn-xPGI&feature=emb_logo',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: runParallelYt,
    },
    {
      size: 3,
      title: 'Multi Browsers',
      description:
        'Run your scenarios on Multiple Browsers in Parallel, including multiple versions of same brwoser or different browsers and different OS combinations on Sauce Labs. Boost your Test Execution coverage.',
      link: 'https://www.youtube.com/watch?v=njOlOJ07Dxw',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: runMultiYt,
    },
    {
      size: 3,
      title: 'Run on Sauce Labs',
      description:
        'Codeceptjs-BDD framework integrates the cloud based platform Sauce Labs to execute scenarios on 900+ Desktop/Mobile browses, OS & Devices combinations, providing Greater Scenarios Execution Coverage.',
      link: 'https://www.youtube.com/watch?v=ugCjMOJlClc',
      firstLinkName: 'Watch in Action',
      icon: <YouTubeIcon color="secondary" />,
      image: runSauceYt,
    },
    {
      size: 3,
      title: 'Automate LWC',
      description:
        'Codeceptjs-BDD automates your Application build with Web Components and Shadow Root Elements. Take a look at the complete working example with Selenium and with Playwright Browsers.',
      firstLinkName: 'Selenium',
      link: '/05-01-salesforce-lwc/1-salesforce-lighting-web-components/',
      secondLinkName: 'Playwright',
      secondLink:
        '/05-01-salesforce-lwc/1-salesforce-lighting-web-components-playwright/',
      image: require('../images/lwc-sf.png'),
    },
    {
      size: 3,
      title: 'Integration Tests',
      description:
        'Codeceptjs-BDD automates your Application build with Web Components and Shadow Root Elements. Take a look at the complete working example with Selenium and with Playwright Browsers.',
      firstLinkName: 'Learn More',
      link: '/05-01-salesforce-lwc/1-salesforce-lighting-web-components/',
      image: require('../images/imocha.png'),
    },
    {
      size: 3,
      title: 'E2E BDD Tests',
      description:
        'Codeceptjs-BDD automates your Application build with Web Components and Shadow Root Elements. Take a look at the complete working example with Selenium and with Playwright Browsers.',
      firstLinkName: 'Learn More',
      link: '/05-01-salesforce-lwc/1-salesforce-lighting-web-components/',
      image: require('../images/e2e.png'),
    },
  ];

  return appCardData.map(cardData => (
    <Grid item sm={cardData.size}>
      <AppCard {...cardData} />
    </Grid>
  ));
};

const renderCardDataWithActions = classes => {
  const cardDataWithActions = [
    {
      cardHeader: {
        avatar: (
          <Avatar aria-label="architecture" className={classes.avatar}>
            {' '}
            <DomainIcon />{' '}
          </Avatar>
        ),
        title: 'Framework Architecture',
        subheader: 'Codeceptjs BDD',
      },
      cardMedia: {
        className: classes.media,
        image: codeceptjsBddFrameworkImage,
        title: 'Architecture',
      },
    },
    {
      cardHeader: {
        avatar: (
          <Avatar aria-label="how to usage" className={classes.avatar}>
            <VisibilityIcon />{' '}
          </Avatar>
        ),
        title: 'Flow',
        subheader: 'Framework',
      },
      cardMedia: {
        className: classes.media,
        image: howImage,
        title: 'How To',
      },
    },
  ];

  return cardDataWithActions.map(cardData => (
    <Grid item xs={12} className={classes.arch}>
      <Card className={classes.card}>
        <CardHeader {...cardData.cardHeader} />
        <CardMedia {...cardData.cardMedia} />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="01-getting-started/1-quick-start/"
          >
            Quick Start
          </Button>

          <Button
            variant="contained"
            size="large"
            color="secondary"
            href="2-your-first-scenario/"
          >
            Automate First Scenario
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
};

const IndexPage = () => {
  const classes = useStyles();

  return (
    <AppLayout title="Codeceptjs-BDD">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={1}>
            <Grid key={1} item>
              <Typography variant="h4" component="h2" gutterBottom>
                Codeceptjs BDD
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                CODECEPTJS BDD Framework integrated with Cucumber and Saucelabs
                cloud.
              </Typography>
            </Grid>

            <Hidden xsDown>
              <Grid key={2} item>
                <GatsbyLink to="01-getting-started/1-quick-start/">
                  <Button variant="contained" size="large" color="primary">
                    Quick Start
                  </Button>
                </GatsbyLink>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.root}>
        <br></br>
        <Divider />
        <br></br>

        <Typography
          variant="h6"
          color="gray"
          display="block"
          className={classes.title}
          gutterBottom
        >
          <div
            style={{
              color: '#2F4B4B',
              fontSize: '0.85em',
              fontFamily:
                'helveticaneue-light, helvetica neue light, helvetica neue, Helvetica, Arial, lucida grande, sans-serif',
              marginTop: '1px',
            }}
          >
            Quickly create your Codeceptjs-BDD Acceptance tests through open
            source
            <span
              style={{
                color: '#253C3C',
                fontSize: '1em',
                fontFamily: 'monospace, monospace, monospace',
                fontWeight: '500',
              }}
            >
              {' '}
              create-codecepjts-bdd-tests{' '}
            </span>
            tool.
          </div>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Paper
              elevation={8}
              style={{
                backgroundColor: '#2F4B4B',
                height: '5em',
                fontColor: 'yelllow',
              }}
            >
              <Hidden smUp>
                <div
                  style={{
                    color: '#e1e31a',
                    fontSize: '14px',
                    marginTop: '5px',
                    fontFamily: 'monospace, monospace, monospace',
                    paddingTop: '1.7em',
                    paddingLeft: '10px',
                    overflowX: 'scroll',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: '#e1e31a' }}>$ </span>
                  <span style={{ color: 'white' }}>npx </span>
                  <span style={{ color: '#ffe59a' }}>
                    create-codeceptjs-bdd-tests{' '}
                  </span>
                </div>
              </Hidden>

              <Hidden xsDown>
                <div
                  style={{
                    color: '#e1e31a',
                    fontSize: '1.7em',
                    marginTop: '5px',
                    fontFamily: 'monospace, monospace, monospace',
                    paddingTop: '0.8em',
                    paddingLeft: '1em',
                  }}
                >
                  <span style={{ color: '#e1e31a' }}>$ </span>
                  <span style={{ color: 'white' }}>npx </span>
                  <span style={{ color: '#ffe59a' }}>
                    create-codeceptjs-bdd-tests{' '}
                  </span>
                </div>
              </Hidden>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={5} className={classes.arch}>
          {renderAppCards()}
        </Grid>

        {renderCardDataWithActions(classes)}
      </div>
    </AppLayout>
  );
};

export default IndexPage;
