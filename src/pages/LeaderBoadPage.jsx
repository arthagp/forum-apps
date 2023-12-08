import React, { useEffect } from 'react';
import LeaderBoardsList from '../components/LeaderBoardsList';
import { useSelector, useDispatch } from 'react-redux'
import { asyncLeaderBoards } from '../states/leaderBoards/action'

function LeaderBoadPage() {
  const {
    leaderBoards = []
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLeaderBoards())
  }, [dispatch])

  if (!leaderBoards) {
    return null
  }

  return (
    <section className="leaderBoard-container">
      <div className="leaderBoards">
        <h2>Klasmen Pengguna Aktif</h2>
        <div className='leaderBoard-list'>
          <header>
            <p>Pengguna</p>
            <p>Skor</p>
          </header>
          {leaderBoards.map((leaderBoard, index) => (
            <LeaderBoardsList key={index} {...leaderBoard} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeaderBoadPage;
