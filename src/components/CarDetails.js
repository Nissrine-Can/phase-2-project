import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function CarDetails({ handleDeleteCar }) {

    const [car, setCar] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:4000/cars/${id}`)
        .then(res => res.json())
        .then(car => {
            setCar(car)
            setIsLoaded(true)
        });
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;
    return (
        <>
           <DivWrapper className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                    <img src={car.image} alt={car.name} />
                    <div className="caption">
                        <h4>Name: {car.name}</h4>
                        <h4>Model: {car.year}</h4>
                        <h4>Price: {car.price}</h4>
                        <h4>Engine: {car.engine}</h4>
                        <p>{car.description}</p>
                        <ul>
                            {car.reviews.map((review) => <li key={review.user_id}>Review: {review.content}</li>)}
                        </ul>
                        <button className="btn btn-primary" onClick={() => handleDeleteCar(car)}>Delete</button>
                        
                    </div>
                    </div>
                </div>
            </DivWrapper>
        </>
    )
}

const DivWrapper = styled.div`
margin: 0 auto;
padding-left: 200px;
`

export default CarDetails;