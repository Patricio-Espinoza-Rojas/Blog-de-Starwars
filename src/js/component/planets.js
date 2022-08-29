import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
  // const getDataPlanets = (Url) => {
  //   fetch(Url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);

  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setPlanets(data.results);
  //     })

  //     .catch((error) => {
  //       console.log("fallo la peticion");
  //       console.log(error);
  //     });
  // };

  const [planets, setPlanets] = useState(null);
  function Test() {
    console.log(store.planets);
  }
  function Test2() {
    setPlanets("Hola cambie");
  }

  // React.useEffect(() => {
  //   getDataPlanets("https://swapi.dev/api/planets/");
  // }, []);

  const { store, actions } = useContext(Context);

  return (
    <>

      <div>
        {!!store.planets&& store.planets.map((elemento,i)=> {
            return ( 
            <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{elemento.name}</h5>
              <p className="card-text">
                Clima: {elemento.climate}
                <br />
                Diametro: {elemento.diameter}
                <br />
                Terreno: {elemento.terrain}
                <br />
                Gravedad: {elemento.gravity}
                <br />
                Periodo Orbital: {elemento.orbital_period}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
              <button onClick={() => { actions.favoritesFuncion(elemento.name)}}>Favoritos</button>
            </div>
          </div>
          )
        })} 
      </div>
    </>
  );
};


