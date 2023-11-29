import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'

const LeaderBoardsList = () => {
    return (
        <div className='leaderBoard-list'>
            <header>
                <p>Pengguna</p>
                <p>Skor</p>
            </header>
            <LeaderBoardItem />
        </div>
    )
}

export default LeaderBoardsList