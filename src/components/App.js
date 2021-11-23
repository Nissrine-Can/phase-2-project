import React from 'react';
import { useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';


import Header from "./Header";
import Form from "./Form";
import CarDetails from "./CarDetails";
import CarContainer  from "./CarContainer";


 function App() {

  const [enthusiastTypes, setEnthusiastTypes] = useState([]);
  const [carList, setCarList] = useState([]);
  const [enthusiastType, setEnthusiastType] = useState("")
  
  let filteredCarList = carList.filter(car => car.enthusiastType.toLowerCase() === enthusiastType.toLowerCase()) 
  if (!enthusiastType) {
    filteredCarList = carList
  }
  const history = useHistory();
  

 useEffect(() => {
   fetch("http://localhost:4000/cars")
   .then(res => res.json())
   .then(data => {
     setCarList(data)
   })
   
   fetch("http://localhost:4000/enthusiastTypes")
   .then(res => res.json())
   .then(data => setEnthusiastTypes(data))
}, [])

  function addCar(newCar) {
    fetch("http://localhost:4000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(dbCar => {
      setCarList([dbCar, ...carList])
      history.push("/cars")
    });

  }

  function updateCar(car) {

    fetch(`http://localhost:4000/cars/${car.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({liked: !car.liked})
    })
    .then(res => res.json())
    .then(updatedCar => {
      const updatedCarList = carList.map(carListCar => {
        if (carListCar.id === updatedCar.id) {
          return updatedCar
        } else {
          return carListCar
        }
      })
      setCarList(updatedCarList)
    })
    
  }

  function handleDeleteCar(car) {
   fetch(`http://localhost:4000/cars/${car.id}`, {
     method: "DELETE"
   })
   .then(res => res.json())
   .then(() => {
     const filteredList = carList.filter(clCar => clCar.id !== car.id)
     setCarList(filteredList)
     history.push("/cars")
   })
  }
  

function handleFilteredCars(enthusiastType) {
     setEnthusiastType(enthusiastType)
}


  return (
    <div>
      <Header  businessName="Enthusiast Dealership" />

      <Switch>

          <Route path='/cars/new'>
            <Form addCar={addCar} /> 
          </Route>

          <Route path='/cars/:id'>
             <CarDetails handleDeleteCar={handleDeleteCar} />
          </Route>

          <Route path='/cars'>
             <CarContainer carList={filteredCarList} enthusiastTypes={enthusiastTypes} updateCar={updateCar} handleFilteredCars={handleFilteredCars}/>
          </Route>

      </Switch>  
          
    </div>
  );
}
export default App;







