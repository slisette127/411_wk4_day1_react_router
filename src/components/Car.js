import React from 'react';

// import { useParams } from "react-router-dom"
import cars from '../cars.json';

// import material ui components here //
import { Card,CardContent, Chip, Paper } from '@material-ui/core';
// Container, Paper, Chip //

const Car = (props) => {
    let { id } = props.match.params;
    const car = cars.find(car => car.id === Number(id)) 
    console.log(car)
    return (
        <div>
            <Card style={{ minWidth: 275,
                    maxWidth:500,
                    }}>
            <h1><span>{car.Name}</span></h1>
                <CardContent>
                    <Chip label={car.id}></Chip>
                    <Chip label={car.Name}></Chip>
                    <Chip label={car.Miles_per_Gallon}></Chip>
                    <Chip label={car.Cylinders}></Chip>
                    <Chip label={car.Displacement}></Chip>
        
                </CardContent>
      
            </Card>
            
        </div>
    )
}

export default Car