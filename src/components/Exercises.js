import React from "react";
import AddExerciseForm from './AddExerciseForm';

class Exercises extends React.Component {
    render() {
        return (
            <div className="logs">
                <h2>Choose an Exercise</h2>
                <AddExerciseForm addExercise={this.props.addExercise}/>
            </div>
        )
    }
}

export default Exercises;