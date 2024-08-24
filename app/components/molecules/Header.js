import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: theme.shadows[2],
  },
  logo: {
    fontSize: 24,
    fontWeight: 500,
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: 24,
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  mobileNav: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  mobileNavItem: {
    padding: '8px 16px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
}));

const Header = ({ logo, navItems, onMobileNavToggle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setMobileNavOpen(false);
    }
  }, [isMobile]);

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
    onMobileNavToggle && onMobileNavToggle();
  };

  return (
    <header className={classes.root}>
      <Link to="/" className={classes.logo}>
        {logo}
      </Link>
      <nav className={classes.nav}>
        {navItems.map((item, index) => (
          <Link key={index} to={item.to} className={classes.navItem}>
            {item.label}
          </Link>
        ))}
      </nav>
      {isMobile && (
        <div className={classes.mobileNav}>
          <button onClick={handleMobileNavToggle} className={classes.mobileNavItem}>
            Menu
          </button>
          {mobileNavOpen && (
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className={classes.mobileNavItem}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onMobileNavToggle: PropTypes.func,
};

Header.defaultProps = {
  onMobileNavToggle: null,
};

export default Header;
