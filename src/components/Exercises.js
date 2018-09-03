import React from "react";
import AddExerciseForm from './AddExerciseForm';

class Exercises extends React.Component {
    render() {
        return (
            <div className="logs">
                <h2>Choose an Exercise</h2>
                <AddExerciseForm addExercise={this.props.addExercise}/>
                <button onClick={this.props.loadSampleExercises}>Load Sample Exercises</button>
            </div>
        )
    }
}

export default Exercises;