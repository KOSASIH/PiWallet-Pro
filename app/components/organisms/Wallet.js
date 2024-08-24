import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { AuthContext } from '../../context/AuthContext';
import { API } from '../../api';
import { Web3Context } from '../../context/Web3Context';

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
  balance: {
    fontSize: 24,
    fontWeight: 500,
  },
  button: {
    margin: '16px',
  },
}));

const Wallet = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user } = useContext(AuthContext);
  const { web3 } = useContext(Web3Context);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      try {
        const balance = await web3.eth.getBalance(user.address);
        setBalance(balance);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBalance();
  }, [user, web3]);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const transactions = await API.get('/wallet/transactions', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTransactions(transactions.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [user]);

  const handleSendTransaction = () => {
    // Handle send transaction logic here
  };

  const handleReceiveTransaction = () => {
    // Handle receive transaction logic here
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Wallet</Typography>
            <Typography variant="body1">Your wallet balance:</Typography>
            <Typography className={classes.balance}>
              {balance} ETH
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Transactions</Typography>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index}>
                  <Typography variant="body1">
                    {transaction.type} {transaction.amount} ETH
                  </Typography>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSendTransaction}
          >
            Send Transaction
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleReceiveTransaction}
          >
            Receive Transaction
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Wallet.propTypes = {};

Wallet.defaultProps = {};

export default Wallet;
