import React from 'react'

const Song = ({ songTitle, songBody }) => {
    return (
        <div>
            <h2 className='songTitle'>{songTitle}</h2>
            <div className='songBody'>{songBody.map(line => {
                return (
                    (line !== "") ? <p>{line}</p> : <br />
                )
            })}</div>
        </div>
    )
}

export default Song
