import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import lottie from 'lottie-web';
import logo from '../../assets/images/Invoice_L.png';
import Image from '../../assets/images/background.png';
import animationData from '../../assets/images/home.json';
const useStyles = makeStyles((theme) => ({
  landing: {
    margin: '0',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.8rem 2rem',
  },
  logo: {
    maxWidth: 250,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2rem 5rem',
    height: '50vh',
  },
  animation: {
    marginTop: '13rem',
  },
  content: {
    width: '33vw',
    marginTop: '10rem',
  },
}));
const Landing = () => {
  const classes = useStyles();
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <div
      className={classes.Landing}
      style={{
        background: `url(${Image})  no-repeat fixed center `,
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Navbar */}
      <div className={classes.nav}>
        <img src={logo} alt='easyinvoice' className={classes.logo} />
        <Button variant='outlined'>Get started</Button>
      </div>
      {/* Navbar */}
      <div className={classes.container}>
        <div className={classes.content} align='left'>
          <Typography variant='subtitle1' component='p'>
            .E-Invoice Software.
          </Typography>
          <Typography variant='h3' component='h5' gutterBottom>
            Everything you need to manage your business invoice.
          </Typography>
          <Typography variant='body1' component='h2' gutterBottom>
            Manage your invoice from creation to payment with Upflow, you'll
            collect 100% of your turnover.
          </Typography>
          <br />
          <Button variant='outlined'>Start Free</Button>
        </div>
        <div className={classes.animation} ref={container}></div>
      </div>
    </div>
  );
};

export default Landing;
