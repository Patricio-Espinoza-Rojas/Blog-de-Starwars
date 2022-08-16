import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";

export const Vehicle = () => {
    // const getDataVehicle = (Url) => {
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
    //       setVehicle(data.results);
    //     })
  
    //     .catch((error) => {
    //       console.log("fallo la peticion");
    //       console.log(error);
    //     });
    // };
  
    const [vehicle, setVehicle] = useState(null);
    function Test() {
      console.log(store.vehicle);
    }
    function Test2() {
      setVehicle("Hola cambie");
    }
  
    // React.useEffect(() => {
    //   getDataVehicle("https://swapi.dev/api/vehicles/");
    // }, []);
    const { store, actions } = useContext(Context);
  
    return (
      <>
        <button onClick={Test2}>Cambiar data</button>
        <button onClick={Test}> hola soy test </button>
        <div>
          {!!store.vehicle&& store.vehicle.map((elemento,i)=> {
              return ( <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{elemento.name}</h5>
                <p className="card-text">
                  Modelo: {elemento.model}
                  <br />
                  Piloto: {elemento.pilots}
                  <br />
                  Capacidad de carga: {elemento.cargo_capacity}
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
  