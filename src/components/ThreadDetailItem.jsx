import React from 'react';
import ThreadBodyDetail from './threadBodyDetail';
import InputComment from './InputComment';
import CommentList from './CommentList';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ThreadDetailItem = ({ category, title, body, avatar, createdAt, upVotesBy, downVotesBy, name, comments }) => {
  // Menggunakan useSelector untuk mendapatkan state dari slice 'authUser'
  const authUser = useSelector((state) => state.authUser);

  console.log(authUser);
  return (
    <div className="threads">
      <ThreadBodyDetail category={category} title={title} body={body} name={name} avatar={avatar} createdAt={createdAt} upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
      <p>Beri Komentar</p>
      {!authUser.isAuthenticated ? (
        <p>
          <Link to={'/login'}>Login</Link> untuk memberi komentar
        </p>
      ) : (
        <InputComment />
      )}
      <p>Komentar {`(${comments.length || 0})`}</p>
      {comments.map((comment) => (
        <CommentList
          key={comment.id}
          name={comment.owner.name}
          avatar={comment.owner.avatar}
          createdAt={comment.createdAt}
          content={comment.content}
          upVotesBy={comment.upVotesBy.length}
          downVotesBy={comment.downVotesBy.length}
        />
      ))}
    </div>
  );
};

export default ThreadDetailItem;
