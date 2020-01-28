import React from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
<<<<<<< HEAD

    card: {
      height: '100%',
      width: '100%',
    }
}));

export default function AppCard({ image,
  title, description, link, firstLinkName, secondLink, secondLinkName,
  component, src, mediaHeight, mediaWidth, icon }) {

    const classes = useStyles();
    const comp = component || "img";
    const fLinkName = firstLinkName || "Learn More";

=======
  
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

}));

export default function AppCard({ image, 
  title, description, link, firstLinkName, secondLink, secondLinkName,
  component, src, mediaHeight, mediaWidth }) {
    const classes = useStyles();
    const comp = component || "img";
    const fLinkName = firstLinkName || "Learn More"
  
>>>>>>> b1de8195b91b5429d15c6b26342849afe6112b1e
  return (
    <Card className={classes.card}>
        <CardActionArea href={link} target="_blank">
            <CardMedia
                component={comp}
                alt={title}
                height="100%"
                width="100%"
                image={image}
                src={src}
<<<<<<< HEAD
                title={title}
            />
=======
                height={mediaHeight}
                width={mediaWidth}
                title={title}
            />

>>>>>>> b1de8195b91b5429d15c6b26342849afe6112b1e
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {description}
                </Typography>
            </CardContent>

        </CardActionArea>
<<<<<<< HEAD

        <CardActions disableSpacing>
            {icon}
            <Button size="small" color="primary"
=======
        
        <CardActions>

            <Button size="small" color="primary" 
>>>>>>> b1de8195b91b5429d15c6b26342849afe6112b1e
            target="_blank"
            href={link}>
                {fLinkName}
            </Button>
<<<<<<< HEAD

            <Button size="small" color="primary"
            style={secondLink ? {} : { display: 'none' }}
=======
    
            <Button size="small" color="primary" 
            style={secondLink ? {} : { display: 'none' }} 
>>>>>>> b1de8195b91b5429d15c6b26342849afe6112b1e
            href={secondLink}>
                {secondLinkName}
            </Button>
        </CardActions>
  </Card>
  );
}
