import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[800],
  },
  copyright: {
    fontSize: 14,
    color: theme.palette.grey[600],
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialMediaItem: {
    marginLeft: 16,
    textDecoration: 'none',
    color: theme.palette.grey[600],
    '&:hover': {
      color: theme.palette.grey[800],
    },
  },
}));

const Footer = ({ copyright, socialMediaItems }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <footer className={classes.root}>
      <p className={classes.copyright}>{copyright}</p>
      <div className={classes.socialMedia}>
        {socialMediaItems.map((item, index) => (
          <Link key={index} to={item.to} className={classes.socialMediaItem}>
            <i className={item.icon} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  socialMediaItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Footer.defaultProps = {};

export default Footer;
