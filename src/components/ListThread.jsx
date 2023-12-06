import React from 'react';
import ThreadItem from './ThreadItem';

function ListThread({ threads }) {
  return (
    <div className="list-threads">
      {threads !== null ? (<h3 className='available'>Diskusi Tersedia</h3>) : (<h3 className='available'>Diskusi Tidak Tersedia</h3>)}
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      )
      )}
    </div>
  );
}

export default ListThread;
