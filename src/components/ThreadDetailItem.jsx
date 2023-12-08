import React from 'react';
import ThreadBodyDetail from './threadBodyDetail';
import InputComment from './InputComment';
import CommentList from './CommentList';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ThreadDetailItem = ({ category, title, body, createdAt, upVotesBy, downVotesBy, owner, comments, comment }) => {
  const { authUser } = useSelector((states) => states)

  return (
    <div className="threads">
      <ThreadBodyDetail category={category} title={title} body={body} owner={owner} createdAt={createdAt} upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
      <p>Beri Komentar</p>
      {authUser == null ? (
        <p>
          <Link to={'/login'}>Login</Link> untuk memberi komentar
        </p>
      ) : (
        <InputComment comment={comment} />
      )}
      <p>Komentar {`(${comments.length || 0})`}</p>
      {comments.map((comment) => (
        <CommentList
          key={comment.id}
          {...comment}
        />
      ))}
    </div>
  );
};

export default ThreadDetailItem;
