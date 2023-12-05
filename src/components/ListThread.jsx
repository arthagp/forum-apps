import React from 'react';
import ThreadItem from './ThreadItem';

function ListThread({ threads }) {
  console.log(threads, 'awdawdadawd')
  return (
    <div className="list-threads">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      )
      )}
    </div>
  );
}

export default ListThread;
