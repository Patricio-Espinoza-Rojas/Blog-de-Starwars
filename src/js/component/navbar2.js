import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

function Navbar2() {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg' width="100" height="50" ></img>
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-dark" aria-current="page" to="/people">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-dark" aria-current="page" to="/vehicles">
              Vehicles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-dark" aria-current="page" to="/planets">
              Planets
            </Link>
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="dropdown ms-auto">
            <button className="btn btn-primary dropdown-toggle px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites {store.favorites.length>0 ? `(${store.favorites.length})`: null}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {store.favorites.length > 0 ? store.favorites.map((favorito, i) => {
                return (
                  <>
                    <div className='d-flex'>
                      <li className="py-2 px-4" key={i}>{favorito}<i type='button' key={i} onClick={() => actions.addToFavorite(favorito)} className="fa-solid fa-trash"></i></li>
                    </div>

                  </>


                )
              }) : <div className='d-fle'><li className='py-2 px-4 text-secondary'>No favorites yet!</li></div>}
            </ul>
          </div>
        </div>
      </div >
    </nav >

  )
}

export default Navbar2