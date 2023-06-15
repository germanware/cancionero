import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownAZ, faArrowUpAZ, faArrowDownWideShort, faArrowUpWideShort, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setShowIndice, search, setSearch, setOrdenar, songID, setSongID, songQty }) => {

    const handleNext = () => {
        if (songID === songQty || songID === 0) {
            setSongID(1);
        } else {
            setSongID((current) => (current += 1));
        }
        setShowIndice(false);
    }

    const handlePrev = () => {
        if (songID === 1) {
            setSongID(songQty);
        } else {
            setSongID((current) => (current -= 1));
        }
        setShowIndice(false);
    }

    return (
        <nav className='Nav'>
            <ul className='navButtons'>
                <li>
                    <button onClick={() => handlePrev()}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <span className='tooltip'>Anterior</span>
                </li>
                <li><button className='indiceButton' onClick={() => { setShowIndice(true); setSearch("") }}>Índice</button></li>
                <li><button onClick={() => handleNext()}><FontAwesomeIcon icon={faArrowRight} /></button><span className='tooltip'>Siguiente</span></li>
                <li><button onClick={() => setOrdenar("az")}><FontAwesomeIcon icon={faArrowDownAZ} /></button><span className='tooltip'>Ordenar A-Z</span></li>
                <li><button onClick={() => setOrdenar("za")}><FontAwesomeIcon icon={faArrowUpAZ} /></button><span className='tooltip'>Ordenar Z-A</span></li>
                <li><button onClick={() => setOrdenar("mayormenor")}><FontAwesomeIcon icon={faArrowDownWideShort} /></button><span className='tooltip'>Más pedidas</span></li>
                <li><button onClick={() => setOrdenar("menormayor")}><FontAwesomeIcon icon={faArrowUpWideShort} /></button><span className='tooltip'>Menos pedidas</span></li>
            </ul>
            <span className='searchBarWrapper'><label htmlFor="searchBar" className='searchIcon'><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
            <input type="text" id="searchBar" value={search}
                onChange={(e) => setSearch((e.target.value).toLowerCase())}
                placeholder=". . ." /></span>
        </nav>
    )
}

export default Nav
