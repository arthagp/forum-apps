import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { postedAt } from '../utils';

function FooterThread({ upVotesBy, downVotesBy, totalComments, createdAt, user }) {
  return (
    <footer className="thread-item__footer">
      <div className='vote-buttons'>
        <button type="button" className='vote-button'>
          <AiOutlineLike />
          {' '}
          <span>{upVotesBy.length}</span>
        </button>
        <button type="button" className='vote-button'>
          <AiOutlineDislike />
          {' '}
          <span>{downVotesBy.length}</span>
        </button>
      </div>
      <p>
        <FaRegComments />
        {' '}
        <span>{totalComments}</span>
        {' '}
        Comments
      </p>
      <p>{postedAt(createdAt)}</p>
      <p>
        Dibuat oleh
        {' '}
        <strong>{user.name}</strong>
      </p>
    </footer>
  );
}

export default FooterThread;
