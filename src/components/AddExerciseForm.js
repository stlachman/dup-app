import React from "react";

class AddExerciseForm extends React.Component {
    exerciseRef = React.createRef();
    weightRef = React.createRef();
    setsRef = React.createRef();
    repsRef = React.createRef();
    rpeRef = React.createRef();
    ratingRef = React.createRef();
    createExercise = event => {
        event.preventDefault()
        const exercise = {
            exerciseName: this.exerciseRef.value.value,
            weight: parseFloat(this.weightRef.value.value),
            sets: parseFloat(this.setsRef.value.value),
            reps: parseFloat(this.repsRef.value.value),
            rpe: parseFloat(this.rpeRef.value.value),
            rating: this.ratingRef.value.value
        }
        this.props.addExercise(exercise);
        // Refresh the form upon submission
        event.currentTarget.reset();
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createExercise}>
                <input name="exerciseName" ref={this.exerciseRef} type="text" placeholder="Exercise Name" />
                <input name="weight" type="text" ref={this.weightRef} placeholder="Weight"/>
                <input name="sets" type="text" ref={this.setsRef} placeholder="Sets" />
                <input name="repetitions" type="text" ref={this.repsRef} placeholder="Repetitions" />
                <input name="rpe" type="text" ref={this.rpeRef} placeholder="RPE" />
                <textarea name="rating" ref={this.ratingRef} placeholder="Rating"/>
                <button type="submit">Add Exercise +</button>
            </form>
        )
    }
}

export default AddExerciseForm;