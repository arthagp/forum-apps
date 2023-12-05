// terhdapat category title, thread title, body thread, footer thread

import React from 'react';
import HeaderThread from './HeaderThread';
import BodyThread from './BodyThread';
import FooterThread from './FooterThread';

function ThreadItem({ title, category, body, upVotesBy, downVotesBy, createdAt, totalComments, user }) {
  return (
    <div className="thread-item">
      <HeaderThread title={title} category={category} />
      {/* body */}
      <BodyThread body={body} />
      {/* footer */}
      <FooterThread upVotesBy={upVotesBy} downVotesBy={downVotesBy} createdAt={createdAt} totalComments={totalComments} user={user} />
    </div>
  );
}

export default ThreadItem;
