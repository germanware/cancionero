import React from 'react'
import Nav from './Nav';

const Header = ({ setShowIndice, setSearch, ordenar, setOrdenar, search, songID, setSongID, songQty, setToTop }) => {
    return (
        <header className='header'>
            <h1>CANCIONERO I.C.E.</h1>
            <h2>La Paz - San Gustavo</h2>
            <Nav
                setShowIndice={setShowIndice}
                songQty={songQty}
                setOrdenar={setOrdenar}
                search={search} setSearch={setSearch}
                songID={songID} setSongID={setSongID}
                setToTop={setToTop}
            />
        </header>
    )
}

export default Header
