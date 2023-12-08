import React from 'react';
import LeaderBoardItem from './LeaderBoardItem';

function LeaderBoardsList({ user, score }) {
  return (
    <LeaderBoardItem user={user} score={score} />
  );
}

export default LeaderBoardsList;
