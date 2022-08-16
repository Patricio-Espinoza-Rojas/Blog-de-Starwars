import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const People = () => {
//   const getDataPeople = (Url) => {
//     fetch(Url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         console.log(response);

//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPeople(data.results);
//       })

//       .catch((error) => {
//         console.log("fallo la peticion");
//         console.log(error);
//       });
//   };

  const [people, setPeople] = useState(null);
  function Test() {
    console.log(store.people);
  }
  function Test2() {
    setPeople("Hola cambie");
  }

//   React.useEffect(() => {
//     getDataPeople("https://swapi.dev/api/people/");
//   }, []);
const { store, actions } = useContext(Context);

  return (
    <>
      <button onClick={Test2}>Cambiar data</button>
      <button onClick={Test}> hola soy test </button>
      <div>
        {!!store.people&& store.people.map((elemento,i)=> {
            return ( <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{elemento.name}</h5>
              <p className="card-text">
                Masa: {elemento.mass}
                <br />
                Altura: {elemento.height}
                <br />
                Año de nacimiento: {elemento.birth_year}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          )
        })} 
      </div>
    </>
  );
};
