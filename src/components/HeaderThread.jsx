import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HeaderThread({ id, title, category }) {
  return (
    <header className="thread-item__header">
      <span>
        #
        {category}
      </span>
      <h3><Link to={`/threads/${id}`}>{title}</Link></h3>
    </header>
  );
}

HeaderThread.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default HeaderThread;
