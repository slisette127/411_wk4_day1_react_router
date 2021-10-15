import React from 'react'
// import { useParams } from "react-router-dom"
import cars from '../cars.json'

// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let { id } = props.match.params;
    const car = cars.find(car => car.id === Number(id)) 
    console.log(car)
    return (
        <div>
            {/* <span>{car.Name}</span> */}
        </div>
    )
}

export default Car