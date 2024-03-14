import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Status = ({ statusText }) => {
  return (
    <div className="status-tab" data-testid="status-element">
      <p>{statusText || 'No Status'}</p>
    </div>
  );
};

Status.propTypes = {
  statusText: PropTypes.string,
};

export default Status;