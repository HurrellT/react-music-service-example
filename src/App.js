import { useEffect, useState } from 'react';

import albums from './albums.json';
import './App.css';
import SongCard from './components/molecules/SongCard';
import LoginForm from './components/organisms/LoginForm';
import NavBar from './components/organisms/NavBar';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    const fetch = async () => {
      if (loggedIn) {
        setLoading(true);
        //simulando una carga
        await sleep(2000)
        setSongs(albums);
        setLoading(false);
      }
    }
    fetch();
  }, [loggedIn]);

  useEffect(() => {
    const fetch = async () => {
      if (loggedIn && search !== '') {
        setLoading(true);
        //simulando una carga
        await sleep(2000)
        setSongs(albums.filter(song => song.title.toLowerCase().includes(search)))
        setLoading(false);
      } else {
        setSongs(albums)
      }
    }

    fetch();
  }, [search])

  return (
    <>
      <NavBar search={search} onChangeSearch={onChangeSearch} />
      <div className="App">
        <h1 className="display-5 mb-5">Welcome to Spotify</h1>
        {!loggedIn ? (
          <LoginForm setLoggedIn={setLoggedIn} />) : (
          <div className="container">
            {loading ? <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div> : (<div className="row row-cols-3">
              {songs.map(album => (
                <SongCard image={album.image} title={album.title} />
              ))}
              {/* <button type="button" className="m-2 album btn btn-secondary" onClick={() => { }}>Add Song +</button> */}
            </div>)}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
