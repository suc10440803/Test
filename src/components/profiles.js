import React from 'react'

export default function profiles({Leaderboard}) {
  return (
    <div id='profile'>
      {Item(Leaderboard)}
    </div>
  )
}

function Item(data){

  data = data.sort((a, b) => b.score - a.score)

  return(
    <>
      {
        data.map((value, index) => (
          <div className='flex' key={index}>
            <div className='item'>
              <img src={value.img} alt='Test'></img>
              <div className='info'>
                <h3 className='name text-dark'>{value.name}</h3>
                {/* <span>{value.location}</span> */}
              </div>
            </div>
            <div className='item'>
              <span>{value.score}</span>
            </div>
          </div>
          )
        )
      }
    </>
  )
}