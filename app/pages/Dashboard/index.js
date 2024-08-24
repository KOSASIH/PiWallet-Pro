import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useMediaQuery } from '@material-ui/core';
import { AuthContext } from '../../context/AuthContext';
import { API } from '../../api';
import { Web3Context } from '../../context/Web3Context';
import { useWeb3 } from '../../hooks/useWeb3';
import { useAsync } from '../../hooks/useAsync';
import { useInterval } from '../../hooks/useInterval';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '24px',
  },
  paper: {
    padding: '16px',
    margin: '16px',
    width: 'calc(50% - 32px)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  chart: {
    width: '100%',
    height: '300px',
  },
  button: {
    margin: '16px',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user } = useContext(AuthContext);
  const { web3 } = useContext(Web3Context);
  const { account, balance } = useWeb3();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await API.get('/dashboard/data', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [user]);

  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Dashboard</Typography>
            <Typography variant="body1">Welcome to your dashboard!</Typography>
            <Typography variant="body1">
              Your account: {account}
            </Typography>
            <Typography variant="body1">
              Your balance: {balance} ETH
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <LineChart width={500} height={300} data={data}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleButtonClick}
          >
            Click me!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
