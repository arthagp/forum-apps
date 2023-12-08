import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetailItem from '../components/threadDetailItem';
import { asyncReceiveThreadDetail, asyncCreateComment } from '../states/threadDetail/action';

function DetailThreadPage() {
  const { id } = useParams();
  const { threadDetail } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onComment = (content) => {
    dispatch(asyncCreateComment({ threadId: id, content }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="thread-container">
      <ThreadDetailItem {...threadDetail} toComment={onComment} />
    </section>
  );
}

export default DetailThreadPage;
