import React from 'react';
import { Link } from 'react-router-dom';

function HeaderThread({title, category}) {
  return (
    <header className="thread-item__header">
      <span>#{category}</span>
      <h3><Link to="/">{title}</Link></h3>
    </header>
  );
}

export default HeaderThread;
