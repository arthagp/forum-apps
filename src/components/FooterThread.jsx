import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { postedAt } from '../utils';

function FooterThread({ upVotesBy, downVotesBy, totalComments, createdAt, user }) {
  return (
    <footer className="thread-item__footer">
      <button type="button">
        <AiOutlineLike />
        {' '}
        <span>{upVotesBy.length}</span>
      </button>
      <button type="button">
        <AiOutlineDislike />
        {' '}
        <span>{downVotesBy.length}</span>
      </button>
      <p>
        <FaRegComments />
        {' '}
        <span>{totalComments}</span>
        {' '}
        Comments
      </p>
      <p>{postedAt(createdAt)}</p>
      <p>
        Dibut oleh
        {' '}
        <strong>{user.name}</strong>
      </p>
    </footer>
  );
}

export default FooterThread;
