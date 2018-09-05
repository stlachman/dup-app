import React from 'react';
import Header from './Header';
import Exercises from './Exercises';
import WorkoutSchedule from './WorkoutSchedule';
import Exercise from './Exercise';
import sampleExercises from '../sample-exercises';

class App extends React.Component {
    state = {
        exercises: {},
        routine: {}
    };
    addExercise = exercise => {
        // 1. Take a copy of the existing state
        const exercises = {...this.state.exercises};
        // 2. Add our new exercise to that exercises variable
        exercises[`exercise${Date.now()}`] = exercise;
        // 3. Set the new exercises object to state
        this.setState({ exercises });
    }

    loadSampleExercises = () => {
        this.setState({ exercises: sampleExercises  });
    }

    addToRoutine = (key) => {
        // 1. Take a copy of state
        const routine = {...this.state.routine};
        // 2. Either add to the order or update the number in our order
        routine[key] =  1;
        // 3. Call setState to update our state object
        this.setState({ routine });
    }

    render() {
        return(
            <div className="weight-training">
                <div className="menu">
                    <Header subTitle="Light Weight" />
                    <ul className="exercises">
                        {Object.keys(this.state.exercises).map(key => 
                            <Exercise 
                                key={key} 
                                index={key} 
                                details={this.state.exercises[key]} 
                                addToRoutine={this.addToRoutine}/>)}
                        
                    </ul>
                </div>
                <WorkoutSchedule exercises={this.state.exercises} routine={this.state.routine}/>
                <Exercises addExercise={this.addExercise} loadSampleExercises={this.loadSampleExercises}/>
            </div>
        )
    }
}

export default App;