import React from 'react';

class EditExerciseForm extends React.Component {
    handleChange = (event) => {
        console.log(event.currentTarget);
        // update exercise
        // 1. Take a copy of current exercise
        const updatedExercise = { 
            ...this.props.exercise,
            [event.currentTarget.name]: event.currentTarget.value
         };
        this.props.updateExercise(this.props.index, updatedExercise);
    }
    render() {
        return (
        <div className="exercise-edit">
                <input type="text" name="exerciseName"  onChange={this.handleChange} value={this.props.exercise.exerciseName}    />
                <input type="text" name="weight" onChange={this.handleChange} value={this.props.exercise.weight}   />
                <input type="text"  name="sets" onChange={this.handleChange} value={this.props.exercise.sets}   />
                <input type="text"  name="repetitions" onChange={this.handleChange} value={this.props.exercise.repetitions}   />
                <input type="text" name="rpe" onChange={this.handleChange} value={this.props.exercise.rpe}    />
                <textarea name="rating" onChange={this.handleChange} value={this.props.exercise.rating}  />
        </div>
        )
    }
}


export default EditExerciseForm;