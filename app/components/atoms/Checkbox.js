import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    border: `1px solid ${theme.palette.grey[300]}`,
    transition: theme.transitions.create(['border-color', 'background-color']),
    '&:checked': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
    },
  },
  label: {
    marginLeft: 8,
  },
}));

const Checkbox = forwardRef((props, ref) => {
  const { checked, onChange, label, disabled, ...other } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div
      ref={ref}
      className={clsx(classes.root, {
        [classes.disabled]: disabled,
      })}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={classes.checkbox}
        {...other}
      />
      {label && (
        <span className={classes.label}>{label}</span>
      )}
    </div>
  );
});

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  label: '',
  disabled: false,
};

export default Checkbox;
