import React from 'react';
import ThreadItem from './ThreadItem';

function ListThread({ threads, like }) {
  return (
    <div className="list-threads">
      {threads !== null ? (<h3 className='available'>Diskusi Tersedia</h3>) : (<h3 className='available'>Diskusi Tidak Tersedia</h3>)}
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} like={like}/>
      )
      )}
    </div>
  );
}

export default ListThread;
