import React from 'react';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { postedAt } from '../utils';

function FooterThread({ id, upVotesBy, downVotesBy, totalComments, createdAt, user, like, authUser }) {
  // console.log(authUser, id)
  const isThreadLike = upVotesBy.includes(authUser)
  // console.log(like, 'likeee')

  // id : merupakan threadId 
  const onLikeClick = (event) => {
    event.stopPropagation();
    like(id)
  }
  // <AiFillLike /> <AiFillDislike />
  return (
    <footer className="thread-item__footer">
      <div className='vote-buttons'>
        {
          like && (
            <button type="button" className='vote-button' onClick={onLikeClick}>
              {isThreadLike ? (<AiFillLike />) : (<AiOutlineLike />)}
              {' '}
              <span>{upVotesBy.length}</span>
            </button>
          )
        }
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
