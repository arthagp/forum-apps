import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { postedAt } from '../utils';

const CommentList = ({ name, avatar, createdAt, content, upVotesBy, downVotesBy }) => {
    return (
        <div className='comment-list'>
            <header>
                <div className='_profile'>
                    <img className='avatar' src={avatar} alt={avatar} />
                    <h2>{name}</h2>
                </div>
                <p>{postedAt(createdAt)}</p>
            </header>
            <div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <footer className='thread-item__footer'>
                <div className='vote-buttons'>
                    <button className="vote-button" type="button">
                        <AiOutlineLike />
                        {' '}
                        <span className='vote-txt'>{upVotesBy}</span>
                    </button>
                    <button className="vote-button" type="button">
                        <AiOutlineDislike />
                        {' '}
                        <span className='vote-txt'>{downVotesBy}</span>
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default CommentList;
