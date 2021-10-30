const NavBar = ({ search, onChangeSearch }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Spotify</a>
        <form className="d-flex">
          <input value={search} onChange={onChangeSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          {/* <button className="btn btn-outline-success" type="button" >Search</button> */}
        </form>
      </div>
    </nav>
  )
}

export default NavBar;