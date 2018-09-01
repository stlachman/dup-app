import React from 'react';
import Header from './Header';
import Exercises from './Exercises';
import Notes from './Notes';

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
    render() {
        return(
            <div className="weight-training">
                <div className="menu">
                    <Header subTitle="Light Weight" />
                </div>
                <Notes />
                <Exercises addExercise={this.addExercise}/>
            </div>
        )
    }
}

export default App;