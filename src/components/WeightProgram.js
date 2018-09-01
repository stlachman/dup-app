import React from 'react';
// import React, { Fragment } from 'react'; to use fragment tags, i.e. sibling detectors

class WeightProgram extends React.Component {
    myInput = React.createRef();

    goToProgram = event => {
        // 1. Stop the from from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const programName = this.myInput.value.value;
        // 3. Change the page to /program/user input
        this.props.history.push(`/program/${programName}`)
    }
 
    render() {
        return (
            <form className="weight-program" onSubmit={this.goToProgram}>
                <h2>Please Enter a Name for your Program</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Program Name"
                    
                />
                <button type="submit">Create Program</button>
            </form>
        )
    }
}

export default WeightProgram;
