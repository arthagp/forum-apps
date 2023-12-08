// terhdapat category title, thread title, body thread, footer thread

import React from 'react';
import HeaderThread from './HeaderThread';
import BodyThread from './BodyThread';
import FooterThread from './FooterThread';

function ThreadItem({ id, title, category, body, upVotesBy, downVotesBy, createdAt, totalComments, user, authUser, like }) {
  return (
    <div className="thread-item">
      <HeaderThread id={id} title={title} category={category} />
      <BodyThread body={body} />
      <FooterThread id={id} authUser={authUser} like={like} upVotesBy={upVotesBy} downVotesBy={downVotesBy} createdAt={createdAt} totalComments={totalComments} user={user} />
    </div>
  );
}

export default ThreadItem;
