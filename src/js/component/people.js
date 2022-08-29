import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext';



function People() {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container mt-4">
                <div className="row row-cols-3 row-cols-md-4 g-2">
                    {!!store.people && store.people.map((persona, i) => {
                        return (
                            <div className="col">
                                <div className="card" key={i} style={{ width: "18rem" }}>
                                    <img src="https://i.kym-cdn.com/entries/icons/original/000/000/157/itsatrap.jpg" className="card-img-top"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{persona.name}</h5>
                                        <p className="card-text">
                                            Mass : {persona.mass} <br />
                                            Height : {persona.height} <br />
                                            Birthyear : {persona.birth_year}
                                        </p>
                                        <div className='d-flex justify-content-between'>
                                            <button type='button' onClick={() => actions.addToFavorite(persona.name)} className='btn btn-outline-warning'>
                                                {store.favorites.includes(persona.name) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default People