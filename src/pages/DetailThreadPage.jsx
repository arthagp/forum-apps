import React, { useEffect } from 'react';
import ThreadDetailItem from '../components/threadDetailItem';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { useParams } from 'react-router-dom';
import { asyncCreateComment } from '../states/threadDetail/action';

const DetailThreadPage = () => {
    const { id } = useParams();
    const { threadDetail } = useSelector((states) => states);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(id));
    }, [id, dispatch]);

    const onComment = (content) => {
        dispatch(asyncCreateComment({ threadId: id, content }))
    }

    if (!threadDetail) {
        return null;
    }

    return (
        <section className="thread-container">
            <ThreadDetailItem
                {...threadDetail}
                upVotesBy={threadDetail.upVotesBy?.length || 0}
                downVotesBy={threadDetail.downVotesBy?.length || 0}
                avatar={threadDetail.owner?.avatar || null}
                name={threadDetail.owner?.name || null}
                comments={threadDetail.comments}
                comment={onComment}
            />
        </section>
    );
};

export default DetailThreadPage;
