import React from 'react'
import Song from './Song';

const Content = ({ showIndice, setShowIndice, songTitle, songBody, ordenar, archivo, search, setSearch, setSongID, setToTop }) => {

    const handleSort = (data, orden) => {  //Devuelve la lista de canciones ordenada
        let idCount = 1;
        let sortedData = data.sort(function (a, b) {
            let x;
            let y;

            switch (orden) {
                case "mayormenor":
                    x = a.pedida;
                    y = b.pedida;

                    if (x > y) { return -1; }
                    if (x < y) { return 1; }
                    return 0;
                    break;

                case "menormayor":
                    x = a.pedida;
                    y = b.pedida;

                    if (x > y) { return 1; }
                    if (x < y) { return -1; }
                    return 0;
                    break;

                case "az":
                    //Quitar acentos para no afectar el orden alfabético
                    x = removeAccents(a.name.toLowerCase());
                    y = removeAccents(b.name.toLowerCase());

                    if (x > y) { return 1; }
                    if (x < y) { return -1; }
                    return 0;
                    break;

                case "za":
                    //Quitar acentos para no afectar el orden alfabético
                    x = removeAccents(a.name.toLowerCase());
                    y = removeAccents(b.name.toLowerCase());

                    if (x > y) { return -1; }
                    if (x < y) { return 1; }
                    return 0;
                    break;

                default:
                    x = a.name.toLowerCase();
                    y = b.name.toLowerCase();

                    if (x > y) { return 1; }
                    if (x < y) { return -1; }
                    return 0;
                    break;
            }
        })
        sortedData.forEach(item => {
            item.id = idCount;
            idCount++;
        });

        return (sortedData);
    }

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2").normalize();
    }



    return (
        <main className='Content'>
            <div>
                {!showIndice && <Song songTitle={songTitle} songBody={songBody} />}
                {showIndice && <>
                    <h2 className='songTitle'>Índice</h2>
                    <ul className='indice'>
                        {handleSort(archivo, ordenar).filter((searchedItem) => { //Filtro de búsqueda, incluye título y letra. Antes llama a la funcion para ordenar
                            return (
                                search.toLowerCase() === ""
                                    ? searchedItem
                                    : removeAccents(searchedItem.body.toString().toLowerCase()).includes(search)
                                    || removeAccents(searchedItem.name.toLowerCase()).includes(search))
                        }).map(song => {
                            return (
                                <div className='songIndiceWrapper'><li className='songIndice' key={song.id} onClick={() => {
                                    setSongID(song.id);
                                    setShowIndice(false);
                                    setSearch("");
                                    setToTop((current) => !current);
                                }}
                                >{song.name}</li><p className='vecesPedida'>{song.pedida}</p></div>
                            )
                        })}
                    </ul>
                </>}
            </div>
        </main>
    )
}

export default Content
