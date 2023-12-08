// terhdapat category title, thread title, body thread, footer thread

import React from 'react';
import PropTypes from 'prop-types';
import HeaderThread from './HeaderThread';
import BodyThread from './BodyThread';
import FooterThread from './FooterThread';

function ThreadItem({
  id, title, category, body, upVotesBy, downVotesBy, createdAt, totalComments, user, authUser, like, unLike,
}) {
  return (
    <div className="thread-item">
      <HeaderThread id={id} title={title} category={category} />
      <BodyThread body={body} />
      <FooterThread id={id} authUser={authUser} like={like} unLike={unLike} upVotesBy={upVotesBy} downVotesBy={downVotesBy} createdAt={createdAt} totalComments={totalComments} user={user} />
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf().isRequired,
  downVotesBy: PropTypes.arrayOf().isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.objectOf().isRequired,
};

export default ThreadItem;
