import React from 'react';
import { Link } from 'react-router-dom';

function HeaderThread({ id, title, category }) {
  return (
    <header className="thread-item__header">
      <span>#{category}</span>
      <h3><Link to={`/threads/${id}`}>{title}</Link></h3>
    </header>
  );
}

export default HeaderThread;
