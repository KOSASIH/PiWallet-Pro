import React from 'react';
import { Button } from '@material-ui/core';

const ButtonComponent = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

ButtonComponent.defaultProps = {
  onClick: () => {},
  children: '',
};

export default ButtonComponent;
