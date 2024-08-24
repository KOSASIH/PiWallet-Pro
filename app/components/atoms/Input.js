import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 16,
    padding: '8px 12px',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 4,
    width: '100%',
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: theme.shadows[1],
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  error: {
    borderColor: theme.palette.error.main,
    '&:focus': {
      borderColor: theme.palette.error.main,
      boxShadow: theme.shadows[1],
    },
  },
}));

const Input = forwardRef((props, ref) => {
  const { value, onChange, onBlur, onFocus, error, disabled, ...other } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (disabled) {
      setFocused(false);
    }
  }, [disabled]);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      disabled={disabled}
      className={clsx(classes.root, {
        [classes.error]: error,
      })}
      {...other}
    />
  );
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  error: false,
  disabled: false,
};

export default Input;
