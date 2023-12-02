import React from 'react';
import { Link } from 'react-router-dom';

function HeaderThread() {
  return (
    <header className="thread-item__header">
      <span>#redux</span>
      <h3><Link to="/">Bagaiamana menurutmu redux itu bekerja??</Link></h3>
    </header>
  );
}

export default HeaderThread;
