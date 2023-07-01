import React from 'react'
import Profiles from './profiles'
import { Leaderboard } from './database'

export default function board() {
    
  
    return (
    <div className='board'>
        <h1 className='leaderboard'>Leaderboard</h1>
        <Profiles Leaderboard = {Leaderboard}></Profiles>
    </div>

    
  )
}
