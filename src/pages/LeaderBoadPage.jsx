import React from 'react';
import LeaderBoardsList from '../components/LeaderBoardsList';

function LeaderBoadPage() {
  return (
    <section className="leaderBoard-container">
      <div className="leaderBoards">
        <h2>Klasmen Pengguna Aktif</h2>
        <LeaderBoardsList />
      </div>
    </section>
  );
}

export default LeaderBoadPage;
