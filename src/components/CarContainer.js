import React from 'react';

import Filter from "./Filter";
import CarCard from "./CarCard";


function CarContainer({ carList, enthusiastTypes, updateCar, handleFilteredCars }) {
    return(
        <>
           <Filter enthusiastTypes={enthusiastTypes} handleFilteredCars={handleFilteredCars} />
           {carList.map((car) => <CarCard key={car.name} car={car} updateCar={updateCar} />)}
        </>
    )
}

export default CarContainer;