import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

function Vehicles() {
    const { store, actions } = useContext(Context)
    return (
        <>
            {!!store.vehicles && store.vehicles.map((vehiculo, i) => {
                return (
                    <>
                        <div className="container mt-4">
                            <div className="row row-cols-3 row-cols-md-4 g-2">
                                {!!store.people && store.vehicles.map((vehicle, i) => {
                                    return (
                                        <div className="col">
                                            <div className="card" key={i} style={{ width: "18rem" }}>
                                                <img src="https://i.kym-cdn.com/entries/icons/original/000/000/157/itsatrap.jpg" className="card-img-top"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">{vehicle.name}</h5>
                                                    <p className="card-text">
                                                        Model : {vehicle.model} <br />
                                                        Manufacturer: {vehicle.manufacturer} <br />
                                                        Crew : {vehicle.crew}
                                                    </p>
                                                    <div className='d-flex justify-content-between'>
                                                        <button type='button' onClick={() => actions.addToFavorite(vehicle.name)} className='btn btn-outline-warning'>
                                                            {store.favorites.includes(vehicle.name) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
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
            })}
        </>
    )
}

export default Vehicles