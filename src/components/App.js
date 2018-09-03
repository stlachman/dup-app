import React from 'react';
import Header from './Header';
import Exercises from './Exercises';
import Notes from './Notes';
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
    render() {
        return(
            <div className="weight-training">
                <div className="menu">
                    <Header subTitle="Light Weight" />
                    <ul className="exercises">
                        {Object.keys(this.state.exercises).map(key => <Exercise key={key} details={this.state.exercises[key]}/>)}
                        
                    </ul>
                </div>
                <Notes />
                <Exercises addExercise={this.addExercise} loadSampleExercises={this.loadSampleExercises}/>
            </div>
        )
    }
}

export default App;