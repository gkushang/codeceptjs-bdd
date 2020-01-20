import React from "react"
import AppLayout from "../components/AppLayout"
import image404 from "../images/404-1.png";
import Grid from '@material-ui/core/Grid';

const imageStyle = {
  // position:'absolute',
  padding: 10,
  width: '100%',
  height: '100%'
}

const imageSt = {
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  width: '50%',
  height: '50%'
}

const NotFoundPage = () => (
  <AppLayout>
    <Grid item xs={12}>
      <div style={ imageStyle }>
        <img style={imageSt} src={image404} alt="Not Found"/>
      </div>
    </Grid>

  </AppLayout>
);

export default NotFoundPage
