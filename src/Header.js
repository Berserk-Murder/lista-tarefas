import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
  <nav className="navbar navbar-expand-lg bg.black" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Header">My App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to=" ">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contato">Contato</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sobre">Sobre</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;