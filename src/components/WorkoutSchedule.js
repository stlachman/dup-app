import React from 'react';

class WorkoutSchedule extends React.Component {
    renderRoutine = key => {
        const ex = this.props.exercises[key];
        // Make sure the exercise is loaded before we continue
        if(!ex) return null;
        return <li key={key}>{ex.exerciseName}</li>
    }
    render() {
        const routineIds = Object.keys(this.props.routine);
        return (
            <div className="workout-program">
                <h2>Workout Program</h2>
                <ul>
                    {routineIds.map(this.renderRoutine)}
                </ul>
                
            </div>
        )
    }
}

export default WorkoutSchedule;