import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { postedAt } from '../utils';

const ThreadBodyDetail = ({ category, title, body, upVotesBy, downVotesBy, avatar, createdAt, name }) => {
  return (
    <div className='thread-item'>
      <header className="thread-item__header">
        <span>#{category}</span>
        <h1>{title}</h1>
      </header>
      <div className="thread-item__body">
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <footer className="thread-item__footer">
        <div className="vote-buttons">
          <button type="button" className="vote-button">
            <AiOutlineLike />
            {' '}
            <span>{upVotesBy}</span>
          </button>
          <button type="button" className="vote-button">
            <AiOutlineDislike />
            {' '}
            <span>{downVotesBy}</span>
          </button>
        </div>
        <p>
          <span><img className='avatar' src={avatar} alt={avatar} /></span>
          Dibuat oleh
          {' '}
          <strong>{name}</strong>
        </p>
        <p>{postedAt(createdAt)}</p>
      </footer>
    </div>
  );
}

export default ThreadBodyDetail;
