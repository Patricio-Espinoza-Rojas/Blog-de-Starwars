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
			people : null,
			vehicles : null,
			planets : null,
			favorites: [],
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
			getPeopleData: (url) => {
				fetch(
					url,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setStore({people : data.results});
					})
		
					.catch((error) => {
						console.log("fallo la peticion");
						console.log(error);
					});
			},
			getVehicleData: (url) => {
				fetch(
					url,
					{
						method : "GET",
						headers: {
							"Content-Type" : "application/json"
						}
					}
				)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					setStore({vehicles : data.results});
				})
				.catch((error)=>{
					console.log("Error en la petición!");
					console.log(error)
				})
			},
			getPlanetData : (url) => {
				fetch(
					url,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					}
				)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setStore({planets : data.results});
					})
					.catch((error) => {
						console.log("Error en la petición!");
						console.log(error);
					})
			},
			addToFavorite : (current) => {
				const store = getStore();
				const favoritesArray = store.favorites
				//Add to favorite
				if (favoritesArray.includes(current)){
					favoritesArray.splice(favoritesArray.indexOf(current),1)
				}else{
					favoritesArray.push(current)
				}
				setStore({favorites: favoritesArray})
				console.log(store.favorites)
			},
		}
	};
};

export default getState;