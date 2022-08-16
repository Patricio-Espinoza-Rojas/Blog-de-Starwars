const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: null,
			vehicle: null,
			planets: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			 getDataPeople: (Url) => {
				fetch(Url, {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((response) => {
					console.log(response);
			
					return response.json();
				  })
				  .then((data) => {
					console.log(data);
					setStore({people: data.results});
				  })
			
				  .catch((error) => {
					console.log("fallo la peticion");
					console.log(error);
				  });
			  },

			  getDataVehicle: (Url) => {
				fetch(Url, {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((response) => {
					console.log(response);
			
					return response.json();
				  })
				  .then((data) => {
					console.log(data);
					setStore({vehicle:data.results});
				  })
			
				  .catch((error) => {
					console.log("fallo la peticion");
					console.log(error);
				  });
			  },

			  getDataPlanets: (Url) => {
				fetch(Url, {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((response) => {
					console.log(response);
			
					return response.json();
				  })
				  .then((data) => {
					console.log(data);
					setStore({planets:data.results});
				  })
			
				  .catch((error) => {
					console.log("fallo la peticion");
					console.log(error);
				  });
			  },
		}
	};
};

export default getState;
