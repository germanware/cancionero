import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownAZ, faArrowUpAZ, faArrowDownWideShort, faArrowUpWideShort, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setShowIndice, search, setSearch, setOrdenar, songID, setSongID, songQty, setToTop }) => {

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
                    <button onClick={() => { handlePrev(); setToTop((current) => !current); }}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    
                </li>
                <li>
                    <button className='indiceButton' onClick={() => { setShowIndice(true); setSearch(""); setToTop((current) => !current); }}>Índice</button>
                </li>
                <li>
                    <button onClick={() => { handleNext(); setToTop((current) => !current); }}><FontAwesomeIcon icon={faArrowRight} /></button>
                </li>
                <li>
                    <button onClick={() => setOrdenar("az")}><FontAwesomeIcon icon={faArrowDownAZ} /></button>
                </li>
                <li>
                    <button onClick={() => setOrdenar("za")}><FontAwesomeIcon icon={faArrowUpAZ} /></button>
                </li>
                <li>
                    <button onClick={() => setOrdenar("mayormenor")}><FontAwesomeIcon icon={faArrowDownWideShort} /></button>
                </li>
                <li>
                    <button onClick={() => setOrdenar("menormayor")}><FontAwesomeIcon icon={faArrowUpWideShort} /></button>
                </li>
            </ul>
            <span className='searchBarWrapper'><label htmlFor="searchBar" className='searchIcon'><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                <input type="text" id="searchBar" value={search}
                    onChange={(e) => setSearch((e.target.value).toLowerCase())} /></span>
        </nav>
    )
}

export default Nav
