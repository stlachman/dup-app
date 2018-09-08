import React from "react";
import AddExerciseForm from './AddExerciseForm';
import EditExerciseForm from './EditExerciseForm';


class Exercises extends React.Component {
    render() {
        return (
            <div className="logs">
                <h2>Choose an Exercise</h2>
                {Object.keys(this.props.exercises).map(key => 
                    <EditExerciseForm key={key} index={key} exercise={this.props.exercises[key]} updateExercise={this.props.updateExercise} />)}
                <AddExerciseForm addExercise={this.props.addExercise}/>
                <button onClick={this.props.loadSampleExercises}>Load Sample Exercises</button>
            </div>
        )
    }
}

export default Exercises;