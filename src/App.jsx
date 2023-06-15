import Header from './Header';
import Content from './Content';
import { useEffect, useState } from 'react';
import archivo from './canciones';

function App() {

  const [showIndice, setShowIndice] = useState(true);
  const [songBody, setSongBody] = useState([]);
  const [songTitle, setSongTitle] = useState("");
  const [songID, setSongID] = useState(1);
  const [search, setSearch] = useState("");
  const [ordenar, setOrdenar] = useState("az");
  const [toTop, setToTop] = useState(true);

  const songQty = archivo.length;

  useEffect(() => {
    const backToTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    backToTop();
  }, [toTop]);

  useEffect(() => {
    const thisSong = Object.values(archivo).find(e => e.id === songID);
    setSongTitle(thisSong.name);
    setSongBody(thisSong.body);
  }, [songID, ordenar]);

  return (
    <div className='App'>
      <Header
        setShowIndice={setShowIndice}
        setOrdenar={setOrdenar}
        search={search} setSearch={setSearch}
        songID={songID} setSongID={setSongID}
        songQty={songQty} setToTop={setToTop}
      />
      <Content
        showIndice={showIndice} setShowIndice={setShowIndice}
        songTitle={songTitle} songBody={songBody}
        ordenar={ordenar} archivo={archivo} setToTop={setToTop}
        search={search} setSearch={setSearch}
        setSongID={setSongID} songID={songID}
      />
    </div>
  )
}

export default App
