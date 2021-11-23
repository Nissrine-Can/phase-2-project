import React  from 'react';
import {Link} from 'react-router-dom';



 function CarCard({ car, updateCar }) {
    
    
    
    return (
        
           <>
                <div className="row" className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                    <img className="img-circle" src={car.image} alt={car.name} />
                    <div className="caption">
                        <h3>{car.name}</h3>
                        {<button className="btn btn-default" onClick={() => updateCar(car)}>{car.liked? "❤️" : "🤍"}</button>}
                        <h4>Model: {car.year}</h4>
                        <h4>Price: {car.price}</h4>
                        <Link to={`/cars/${car.id}`} className="btn btn-primary">Learn more</Link>
                        
                    </div>
                    </div>
                </div>
            </>
        
    );
}



export default CarCard;
