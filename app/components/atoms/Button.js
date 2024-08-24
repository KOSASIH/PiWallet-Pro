import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    border: 0,
    color: theme.palette.text.primary,
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 16,
    fontWeight: 500,
    justifyContent: 'center',
    letterSpacing: 0.5,
    padding: '8px 16px',
    textDecoration: 'none',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    '&:active': {
      boxShadow: theme.shadows[2],
    },
  },
  contained: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  outlined: {
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      borderColor: theme.palette.primary.dark,
    },
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
}));

const Button = forwardRef((props, ref) => {
  const { children, className, contained, outlined, disabled, onClick, ...other } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (disabled) {
      setHover(false);
      setFocus(false);
    }
  }, [disabled]);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <CSSTransition
      in={hover || focus}
      timeout={300}
      classNames={{
        enter: classes.hover,
        enterActive: classes.hoverActive,
        exit: classes.hoverExit,
      }}
    >
      <button
        ref={ref}
        className={clsx(classes.root, className, {
          [classes.contained]: contained,
          [classes.outlined]: outlined,
          [classes.disabled]: disabled,
        })}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...other}
      >
        {children}
      </button>
    </CSSTransition>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contained: PropTypes.bool,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  contained: false,
  outlined: false,
  disabled: false,
};

export default Button;
