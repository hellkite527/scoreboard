import React from 'react'

const GameHeader= ({teamLogo}) => {
  const homeTeam = teamLogo?.homeTeam
  const awayTeam = teamLogo?.awayTeam

  return(
    <div className="d-flex justify-content-center align-items-center">
      {
        teamLogo && Object.keys(teamLogo).length!=0 &&
        <>
          <div>
            <img src={`/logos/${homeTeam.abv}-120.png`} alt={`${homeTeam.name}`} />
          </div>
          <div className='mx-4'>VS</div>
          <div>
            <img src={`/logos/${awayTeam.abv}-120.png`} alt={`${awayTeam.name}`} />
          </div>
        </>
      }
    </div>
  )
}

export default GameHeader
