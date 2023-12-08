import React from 'react';

function LeaderBoardItem({ score, user }) {
  return (
    <div className="leaderBoard-item">
      <div className="leaderBoardItem-Info">
        <img className='avatar' src={user.avatar} alt={user} />
        <p>{user.name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

export default LeaderBoardItem;
