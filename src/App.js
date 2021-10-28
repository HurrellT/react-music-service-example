import { useEffect, useState } from 'react';

import albums from './albums.json';
import './App.css';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  // const onSubmit = () => alert("Logged in");
  const onSubmit = () => setLoggedIn(true);
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
  }, []);

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
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Spotify</a>
          <form className="d-flex">
            <input value={search} onChange={onChangeSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success" type="button" >Search</button> */}
          </form>
        </div>
      </nav>
      <div className="App">
        <h1 className="display-5 mb-5">Welcome to Spotify</h1>
        {!loggedIn ? (
          <form>
            <h4 className="mb-4">Login</h4>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input value={username} onChange={onUsernameChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="usernameHelp" className="form-text">We'll never share your data with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input value={password} onChange={onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button
              //type="submit" 
              type="button"
              onClick={onSubmit} className="btn btn-primary">Submit</button>
          </form>) : (
          <div className="container">
            {loading ? <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div> : (<div className="row row-cols-3">
              {songs.map(album => (
                <div className="card album m-2 shadow-sm" >
                  <img src={album.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text" data-bs-toggle="tooltip" data-bs-placement="bottom" title={album.title}>{album.title}</p>
                  </div>
                </div>
              ))}
              <button type="button" className="m-2 album btn btn-secondary" onClick={() => { }}>Add Song +</button>
            </div>)}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
