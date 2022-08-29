import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
	<div className="container mt-4">
		<div className="row row-cols-3 row-cols-md-3 g-4">
			<div className="col">
				<div className="card  h-100">
					<img src="https://media.timeout.com/images/105863223/750/422/image.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">People</h5>
						<p className="card-text">
							Check out the numerous characters from the Star Wars Franchise!
						</p>
						<div className="d-flex justify-content-center">
							<Link to="/people">
								<button type="button" className="btn btn-primary">Go!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<img src="https://i.pinimg.com/736x/16/8d/8d/168d8dc2887374b66d92a755e56195f6.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Vehicles</h5>
						<p className="card-text">
							Take a look inside the most enigmatic machines of the saga!
						</p>
						<div className="d-flex justify-content-center">
							<Link to="/vehicles">
								<button type="button" className="btn btn-primary">Go!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="col h-100">
				<div className="card">
					<img src="https://p4.wallpaperbetter.com/wallpaper/656/185/299/star-wars-fiction-planet-wallpaper-preview.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Planets</h5>
						<p className="card-text">
							Get an overview of the planets where the movies take place.
						</p>
						<div className="d-flex justify-content-center">
							<Link to="/planets">
								<button type="button" className="btn btn-primary">Go!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</>
);