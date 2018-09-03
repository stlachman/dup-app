import React from "react";

class Exercise extends React.Component {
    render() {
        const {exerciseName, weight, sets, reps, rpe, rating }= this.props.details;
        return (
            <li className="exercise">
                <h3 className="exercise-name">
                    {exerciseName}
                </h3>
                <p>Weight: {weight}</p>
                <p>Sets: {sets}</p> 
                <p>Reps: {reps}</p>     
                <p>RPE: {rpe}</p>     
                <p>Rating: {rating}</p>
                <button>Add To Workout</button> 
            </li>
        )
    }
}

export default Exercise;